import { APIApplicationCommandOptionChoice, APIApplicationCommandStringOption, ActionRowBuilder, ButtonBuilder, ButtonInteraction, ButtonStyle, ChatInputCommandInteraction, Interaction, InteractionResponse, Message, MessageActionRowComponentBuilder, SlashCommandBuilder } from 'discord.js'
import TestQuestion from 'src/models/question';
import Tests from './tests' 
import Test from 'src/models/test';
import TestResult from '../../models/test-result';

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Команда для начала теста.')
		.addStringOption(option => 
			option.setName('testname')
			.setDescription('Название теста')
			.setRequired(true)
			.setChoices(
				...Tests.map<APIApplicationCommandOptionChoice<string>>((test) => {
					return {
						name: test.name,
						value: test.name
					}
				}
				)
			)
			),
	async execute(interaction: ChatInputCommandInteraction): Promise<TestResult | null> {
		console.log(interaction)
		let testName = interaction.options.getString('testname');
		const test: Test | undefined = Tests.find(test =>  test.name === testName);
		if (test !== undefined) {
			let testQuestions: TestQuestion[] = test.questions;
			let response: InteractionResponse | Message | null = null
			let score: number = 0;
			for (let i = 0; i < testQuestions.length; i++) {
				let buttons: ButtonBuilder[] = [];
				for (let j = 0; j < testQuestions[i].options.length; j++){
					buttons.push(new ButtonBuilder().setCustomId((j+1).toString()).setLabel((j+1).toString()).setStyle(ButtonStyle.Primary));
				}
				buttons.push(new ButtonBuilder().setCustomId('cancel').setLabel('Отмена').setStyle(ButtonStyle.Danger));
				const row = new ActionRowBuilder<ButtonBuilder>().addComponents(buttons);
				const text = testQuestions[i].question + '\n' + testQuestions[i].options.map((option, index )=> `${index + 1}) ${option}`).join('\n') + `\nВопрос ${i+1} из ${testQuestions.length}.`
				if (response !== null){
					response = await interaction.followUp({content: text, components: [row]});
				}
				else {
					response = await interaction.reply({content: text, components: [row]});
				}
				
				const collectorFilter = (i: Interaction) => i.user.id === interaction.user.id;
				try {
					const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 60_000 });
					confirmation.update({content: text, components: []});
					if (confirmation.customId === testQuestions[i].answer.toString()) {
						response = await interaction.followUp(`Вы правы.`);
						score++;
					}
					else if (confirmation.customId === 'cancel') {
						response = await interaction.followUp(`Тест был отменён.`);
						break;
					}
					else {
						response = await interaction.followUp(`Вы неправы. Правильный ответ был ${testQuestions[i].answer}. Вы выбрали ${confirmation.customId}`);
					}
					await new Promise(resolve => setTimeout(resolve, 1000));
				}
				catch (e) {
					await interaction.editReply({ content: `Ответ не был получен в течении 1 минуты. Отменяем.`, components: [] });
				}
			}
			await interaction.followUp(`На этом конец этого теста! Ваш балл ${score}/${testQuestions.length}.`);
			return new TestResult(interaction.user.id, test.name, score / testQuestions.length);
				
		}
		else {
			await interaction.reply(`Тест с таким именем не существует.`);
		}
		return null;
		
	},
};
