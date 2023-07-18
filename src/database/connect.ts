import mongoose from "mongoose";

mongoose
	.connect(
		"mongodb+srv://nyx-bot:qwas4213@cluster0.efayldv.mongodb.net/?retryWrites=true&w=majority",
		{
			dbName: "nyx-database",
		}
	)
	.then(() =>
		console.log("✅ | Banco de dados MongoDB conectado com sucesso!".green)
	)
	.catch(err =>
		console.error(
			`❌ | Um erro ocorreu durante a conexão com o banco de dados: ${err.message}`
		)
	);

export const db = mongoose.connection.db;
