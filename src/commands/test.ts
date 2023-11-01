import { PermissionFlagsBits } from "discord.js";
import { Command } from "../models/Command";
import { Bot } from "../models/Bot";

export default class testCommand extends Command {

    // Client Property
    public _client: Bot;

    constructor(client: Bot) {
        super({
            name: "test",
            description: "This is a test command",
            permissions: {
                admin: true,
                permission: PermissionFlagsBits.Administrator
            }
        })

        this._client = client;
    }

    // This method will be executed when the command is used
    async execute() {
        console.log("test command executed")
    }
}