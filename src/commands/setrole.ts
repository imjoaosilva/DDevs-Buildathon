import { Command } from "../models/Command";
import { Bot } from "../models/Bot";
import { PermissionFlagsBits } from "discord.js";
import * as role_controller from '../useCases/Role/Controller/role.controller';
import * as user_controller from "../useCases/User/Controller/user.controller";

export default class setRoleCommand extends Command {

    // Client Property
    public _client: Bot;

    constructor(client: Bot) {
        super({
            name: "setrole",
            description: "Set a role",
            permissions: {
                admin: true,
                permission: PermissionFlagsBits.Administrator
            },
            options: [
                {
                    name: "user",
                    description: "The user who will get the role",
                    type: "USER",
                    required: true
                },
                {
                    name: "name",
                    description: "The name of the role",
                    type: "STRING",
                    required: true
                },
            ]
        })

        this._client = client;
    }

    // This method will be executed when the command is used
    async execute(interaction: any) {

        // Getting the username from the options
        const user = interaction.options.getUser("user");

        // Getting the rolename from the options
        const rolename = interaction.options.getString("name");

        const role = await role_controller.get(rolename);
        if(!role) return interaction.reply({content: "A role with that name doesn't exists.", ephemeral: true});
        await user_controller.setrole(user.id, rolename);

        interaction.reply({content: `The role ${role.name} has been set successfully!`, ephemeral: true});
       
    }
}