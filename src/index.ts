import { ExtendedClient } from "./structs/ExtendedClient";
import config from "./config.json";
import("./database/connect");

export * from "colors";

const client = new ExtendedClient();

client.start();

export { client, config };
