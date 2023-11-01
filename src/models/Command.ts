import { ApplicationCommandOptionBase, PermissionFlagsBits, SlashCommandBuilder} from "discord.js";
import { CommandOptionSlash, CommandOptions, CommandOptionType, CommandOptionSlashBuilderOption  } from "../@types/types";


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

    constructor(command: CommandOptions) {
        this.name = command.name;
        this.description = command.description;
        this.permissions = command.permissions;

        this.slash = new SlashCommandBuilder()
            .setName(this.name)
            .setDescription(this.description);
    
        // Setting the permissions
        if(this.permissions.admin) this.slash.setDefaultMemberPermissions(this.permissions.permission)

        // Setting the options
        if (command.options) {

            // Option Type Map (To transform the type to the [command.option].type to slash command builder method)
            const optionTypeMap: Record<CommandOptionType, string> = {
                STRING: "addStringOption",
                INTEGER: "addIntegerOption",
                CHANNEL: "addChannelOption",
                USER: "addUserOption"
            };

            // Looping through the options
            for (const option of command.options) {

                // Transforming the option.type to CommandOptionType (STRING, INTEGER, CHANNEL, USER)
                const optiontype = option.type as CommandOptionType;

                // Getting the optionName from the optionTypeMap
                const optionName = optionTypeMap[optiontype];

                // Setting the this.slash to CommandOptionSlash to accept the key as the optionName
                const slashcommand = this.slash as CommandOptionSlash;

                // Checking if the optionName exists
                if (optionName) {
                    
                    // Setting the option
                    slashcommand[optionName]((opt: CommandOptionSlashBuilderOption) => 
                        opt.setName(option.name)
                        .setDescription(option.description)
                        .setRequired(option.required!)
                    )
                } 
                else {
                    throw new TypeError(`Unknown option type "${optiontype}"`);
                }
            }
            
        }
    }
}