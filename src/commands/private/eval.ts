import {
	ApplicationCommandOptionType,
	ApplicationCommandType,
	EmbedBuilder,
	codeBlock,
} from "discord.js";
import { Command } from "@/structs/types/Command";
import { client } from "@/index";

export default new Command({
	name: "eval",
	description: "Evaluate a javascript code on discord. Only for devs!",
	type: ApplicationCommandType.ChatInput,
	options: [
		{
			name: "code",
			description: "Your javascript code goes here.",
			type: ApplicationCommandOptionType.String,
			required: true,
		},
	],
	async run({ interaction, options }) {
		if (!interaction.inCachedGuild()) return;
		if (
			!["315254767716663296", "1064162067919163485"].includes(
				interaction.user.id
			)
		)
			return await interaction.reply({
				ephemeral: true,
				content: `**${interaction.user} você não tem permissão para executar este comando!**`,
			});

		const code = options.getString("code");

		const lyra = client;

		try {
			const resRaw = await eval(code as string);
			const res =
				typeof resRaw === "object" ? JSON.stringify(resRaw) : resRaw;

			const embed = new EmbedBuilder({
				title: `Evaluate`,
				color: 0x2b2d31,
				fields: [
					{
						name: "Input",
						value: code!,
					},
					{
						name: "Output",
						value: codeBlock("typescript", res),
					},
				],
			});

			await interaction.reply({ ephemeral: true, embeds: [embed] });
		} catch (error) {
			await interaction.reply({
				ephemeral: true,
				content: `**Ocorreu um erro na execução do código.**\n${codeBlock(
					"powershell",
					error as string
				)}`,
			});
		}
	},
});
