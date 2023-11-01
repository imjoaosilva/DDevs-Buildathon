import { Client } from "discord.js";
import { intents } from "../settings/intents";
import { CommandHandler } from "../handlers/Command";
import { EventHandler } from "../handlers/Event";

/*
    Creating a new class that extends the Client class from discord.js
*/

export class Bot extends Client {

    // This is the token that will be used to login to the bot
    private _token: string | undefined;

    // This is the CommandHandler instance
    public CommandHandler: CommandHandler;

    // This is the EventHandler instance
    public EventHandler: EventHandler;

    // Passing the intents to the super class
    constructor(token?: string) {
        super({
            intents
        })

        this._token = token;

        this.CommandHandler = new CommandHandler(this, {
            absolute_path: "./src/commands",
            path: "../commands",
            filestype: ["js", "ts"],
        });

        this.EventHandler = new EventHandler(this, {
            absolute_path: "./src/events",
            path: "../events",
            filestype: ["js", "ts"],
        });

    }

    // This method will be used to login to the bot
    async start() {
        if (!this._token) throw new Error("Please provide a token to login to the bot.");

        // Loading all the commands and events
        this.CommandHandler.Load();
        this.EventHandler.Load();

        // Logging in to the bot
        await this.login(this._token);
    }
}