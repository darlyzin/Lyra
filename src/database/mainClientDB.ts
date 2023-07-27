import usersClass from "./models/usersModel";

export default class mainDatabase {
	constructor() {
		users: usersClass;
	}

	async findOrDB(id: string, type: string, filter: string = "") {
		if (type == "users") {
			let data = await usersClass.findOne({ _id: id }, filter);
			if (!data) data = await usersClass.create({ _id: id });
			return data;
		}
	}

	async updateCoins(id: string, amount: number) {
		if (!amount || !id || isNaN(amount)) return "error";
		await usersClass.updateOne(
			{ _id: id },
			{ $inc: { "economy.money": amount } },
			{ upsert: true }
		);
	}
}
