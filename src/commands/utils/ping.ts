import { ApplicationCommandType, EmbedBuilder, inlineCode } from "discord.js";
import { Command } from "../../structs/types/Command";
import { config } from "../..";

export default new Command({
	name: "ping",
	description: "Veja a latência do bot.",
	type: ApplicationCommandType.ChatInput,
	async run({ interaction }) {
		if (!interaction.inCachedGuild()) return;

		const { client, user, guild } = interaction;

		const botPing: string = inlineCode(
			`${Date.now() - interaction.createdTimestamp}`
		);
		const wsPing: string = inlineCode(`${client.ws.ping}`);

		const embed = new EmbedBuilder({
			description: `
      			Minha latência atual é de ${botPing}ms!
     			A latência do **WebSocket** é de ${wsPing}ms!`,
			color: parseInt(config.colors.blue),
			timestamp: Date.now(),
		});

		await interaction.reply({
			embeds: [embed],
		});
	},
});
