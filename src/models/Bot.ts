import { Client } from "discord.js";
import { intents } from "../settings/intents";
import { CommandHandler } from "../handlers/Command";

/*
    Creating a new class that extends the Client class from discord.js
*/

export class Bot extends Client {

    // This is the token that will be used to login to the bot
    private _token: string | undefined;

    // Passing the intents to the super class
    constructor(token?: string) {
        super({
            intents
        })

        this._token = token;
    }

    // This method will be used to login to the bot
    async start() {
        if (!this._token) throw new Error("Please provide a token to login to the bot.");

        // Creating a new instance of the CommandHandler
        const handler = new CommandHandler(this, {
            folder: "./src/commands",
            filestype: ["js", "ts"],
        })
        handler.Load();
        
        await this.login(this._token);
    }
}