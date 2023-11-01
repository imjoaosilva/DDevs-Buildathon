import { CommandInteraction, Interaction, PermissionFlagsBits } from "discord.js";
import { Command } from "../models/Command";
import { Bot } from "../models/Bot";


export default class testCommand extends Command {

    // Client Property
    public _client: Bot;

    constructor(client: Bot) {
        super({
            name: "profile",
            description: "Shows the profile of a user",
            permissions: {
                admin: true,
                permission: PermissionFlagsBits.Administrator
            },
            options: [
                {
                    name: "user",
                    description: "The user to show the profile",
                    type: "USER",
                    required: true
                }
            ]
        })

        this._client = client;
    }

    // This method will be executed when the command is used
    async execute(interaction: CommandInteraction) {
        interaction.reply({content: 'This is a test command!'})
    }
}