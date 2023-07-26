import { LyraClient } from "./structs/LyraClient";
import config from "./config.json";
import("./database/connect");

export * from "colors";

const client = new LyraClient();

client.start();

export { client, config };
