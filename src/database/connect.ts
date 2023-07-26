import mongoose from "mongoose";
import("dotenv/config");

mongoose
	.connect(process.env.BOT_TOKEN, {
		dbName: "nyx-database",
	})
	.then(() =>
		console.log("✅ | MongoDB database successfully connected!".green)
	)
	.catch(err =>
		console.error(
			`❌ | An error occurred while connecting to the database: ${err.message}`
		)
	);

export const db = mongoose.connection.db;
