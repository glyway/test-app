import fs from 'node:fs'
import path from 'node:path'
import { Client, Collection, Events, GatewayIntentBits } from 'discord.js';
import TestResult from './models/test-result';
import User from './models/user';
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

let users: User[] = [];

let clientCommands = new Collection<unknown, any>();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

let blockedUsers: string[] = []

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.ts'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			clientCommands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

fs.readFile('users.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
	users = JSON.parse(data); //now it an object
}});

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;
	const command = clientCommands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		if (interaction.commandName === 'test' && blockedUsers.includes(interaction.user.id)){
			if (interaction.replied || interaction.deferred) {
				await interaction.followUp({ content: 'Нельзя делать другие действия во время теста!', ephemeral: true });
			} else {
				await interaction.reply({ content: 'Нельзя делать другие действия во время теста!', ephemeral: true });
			}
			await new Promise(resolve => setTimeout(resolve, 2000));
			interaction.deleteReply();
			return;
		}
		let userIndex = users.findIndex(user => user.id === interaction.user.id);
		if (userIndex === -1){
			userIndex = users.push({
				id: interaction.user.id,
				results: []
			}) - 1
		}

		blockedUsers.push(interaction.user.id)
		const result = await command.execute(interaction, users[userIndex]);
		if (result instanceof TestResult) {
			let userIndex = users.findIndex(user => user.id === result.userId);
			if (userIndex !== -1){
				let userTestIndex = users[userIndex].results.findIndex(res => res.testName === result.name);
				if (userTestIndex !== -1){
					users[userIndex].results[userTestIndex].result = result.result;
				}
				else {
					users[userIndex].results.push({
						testName: result.name,
						result: result.result
					})
				}
			}
			else {
				users.push({
					id: result.userId,
					results: [{
						testName: result.name,
						result: result.result
					}]
				})
			}
			fs.writeFile('users.json', JSON.stringify(users), 'utf8',function(err) {
				if (err) throw err;
				console.log('complete');
				})
		}
		blockedUsers = blockedUsers.filter(x => x !== interaction.user.id)
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
});

client.login(token);
