import { Schema, model } from "mongoose";

export interface U {
	_id: string;
	economy: {
		money: number;
		bank: number;
		daily: {
			lastReward: number;
			streak: number;
		};
		work: {
			lastReward: number;
			job: string;
			level: number;
			xp: number;
			reqXp: { type: number; default: 500 };
		};
	};
}

export const UserSchema = new Schema<U>({
	_id: String,
	economy: {
		money: Number,
		bank: Number,
		daily: {
			lastReward: Number,
			streak: Number,
		},
		work: {
			lastReward: Number,
			job: String,
			level: Number,
			xp: Number,
			reqXp: { type: Number, default: 500 },
		},
	},
});

const User = model<U>("users", UserSchema);
export default User;
