import { PresenceData, ActivityType } from "discord.js";
import { client } from "../..";
import { Event } from "../../structs/types/Event";

let duration: number;

export default new Event({
	name: "ready",
	once: true,
	run() {
		const { commands, buttons, selects, modals, users } = client;

		console.log(`✅ | Bot online ${client.user?.tag}`.green);
		console.log(
			`Commands loaded: ${commands.size}\nButtons loaded: ${buttons.size}\nSelect Menus loaded: ${selects.size}\nModals loaded: ${modals.size}`
				.magenta
		);

		client.user?.setPresence({
			status: "online",
			activities: [
				{
					name: `${users.cache.size} usuários 💖`,
					type: ActivityType.Listening,
				},
			],
		});
	},
});
