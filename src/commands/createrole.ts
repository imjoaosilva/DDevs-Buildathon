import { Command } from "../models/Command";
import { Bot } from "../models/Bot";
import { PermissionFlagsBits } from "discord.js";
import { create } from '../useCases/Role/Controller/role.controller'

export default class createRoleCommand extends Command {

    // Client Property
    public _client: Bot;

    constructor(client: Bot) {
        super({
            name: "createrole",
            description: "Create a role",
            permissions: {
                admin: true,
                permission: PermissionFlagsBits.Administrator
            },
            options: [
                {
                    name: "name",
                    description: "The name of the role",
                    type: "STRING",
                    required: true
                },
                {
                    name: "icon",
                    description: "The icon of the role",
                    type: "ATTACHMENT",
                    required: true
                }
            ]
        })

        this._client = client;
    }

    // This method will be executed when the command is used
    async execute(interaction: any) {

        // Getting the rolename from the options
        const rolename = interaction.options.getString("name");

        // Getting the roleicon from the options
        const roleicon = interaction.options.getAttachment("icon");

        // Checking if its jpeg or png
        if(!roleicon.contentType.includes("jpeg") && !roleicon.contentType.includes("png")) return interaction.reply({ content: "The image must be jpeg or png.", ephemeral: true });
        
        // Creating the role
        const role = await create(rolename, roleicon.url);
        if(!role) return interaction.reply({content: "A role with that name already exists.", ephemeral: true});

        interaction.reply({content: `The role ${role.name} has been created successfully!`, ephemeral: true});
    }
}