import { PermissionFlagsBits, SlashCommandBuilder, SlashCommandChannelOption, SlashCommandIntegerOption, SlashCommandStringOption, SlashCommandUserOption } from "discord.js";
import { CommandOption, CommandOptions } from "../@types/types";


export class Command {

    // Command Properties 
    public readonly name: string;

    // Description Property
    public readonly description: string;

    // Permissions Property
    public readonly permissions: {
        admin?: boolean;
        permission?: bigint;
    }

    // Slash Property
    public slash: SlashCommandBuilder;

    constructor(options: CommandOptions) {
        this.name = options.name;
        this.description = options.description;
        this.permissions = options.permissions;

        this.slash = new SlashCommandBuilder()
            .setName(this.name)
            .setDescription(this.description);
    
        // Setting the permissions
        if(this.permissions.admin) this.slash.setDefaultMemberPermissions(this.permissions.permission)

        // Setting the options
        if(options.options) {

            // TODO
        }
    }
}