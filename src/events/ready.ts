import { REST, Routes } from "discord.js";
import { Bot } from "../models/Bot";
import { Event } from "../models/Event";
import Settings from '../settings/Settings.json';
import { CommandOptions } from "../@types/types";

export default class ReadyEvent extends Event {

    // Client Property
    public _client: Bot;

    constructor(client: Bot) {
        super({
            name: "ready",
            once: true
        });
        
        this._client = client;
    }

    // This method will be executed when the event is triggered
    async execute() {
            
        console.log("[READY-EVENT] Bot is ready!")

        // Registering all the commands
        const rest = new REST({ version: '10' }).setToken(this._client.token!);
        await rest.put(
            Routes.applicationCommands(Settings["BOT-ID"]),
            { 
                // map() will return an array of all the slash commands
                body: this._client.CommandHandler._store.map((command: CommandOptions) => command.slash)
            }
        );
            
    }
}