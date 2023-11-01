import { Interaction, REST, Routes } from "discord.js";
import { Bot } from "../models/Bot";
import { Event } from "../models/Event";
import Settings from '../settings/Settings.json';
import { CommandOptions } from "../@types/types";

export default class interactionCreateEvent extends Event {

    // Client Property
    public _client: Bot;

    constructor(client: Bot) {
        super({
            name: "interactionCreate",
            once: false
        });
        
        this._client = client;
    }

    // This method will be executed when the event is triggered
    async execute(interaction: Interaction) {
        
        // Checking if the interaction is a command
        if(!interaction.isCommand()) return;

        // Checking if the command exists in the store property
        const command = this._client.CommandHandler._store.find((cmd: CommandOptions) => cmd.name === interaction.commandName);
        if(!command) return;
        
        try {
            // Executing the command
            command.execute!(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
            
    }
}