import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js'
import User from 'src/models/user';

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Информация о пользователе.'),
	async execute(interaction: ChatInputCommandInteraction, user: User) {
		console.log(interaction)
		await interaction.reply(`Вы ${interaction.user.username}.\nРешённые тесты:\n${user.results.map(result => result.testName + ': ' + (result.result * 100).toFixed(2) + '%').join('\n')}`);
	},
};
