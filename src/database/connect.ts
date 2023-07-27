import mongoose from "mongoose";
import("dotenv/config");

mongoose?.connect(process.env.MONGO_URL, {
		dbName: "lyra-database",
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
