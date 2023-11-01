import { ApplicationCommandOptionBase, PermissionFlagsBits, SlashCommandBuilder } from "discord.js";

// Handler options interface
export interface HandlerOptions {
    absolute_path: string;
    filestype: string[],
    path?: string;
    store?: boolean;
}

// Command interface
export interface CommandOptions {
    name: string;
    description: string;
    permissions: {
        admin?: boolean;
        permission?: bigint;
    },
    options?: CommandOption[];
    slash?: SlashCommandBuilder;
    execute?: (...args: any[]) => void;
}

// Command Option interface
export interface CommandOption {
    type: string,
    name: string,
    description: string,
    required?: boolean,
}

// Event interface
export interface EventOptions {
    name: string;
    once?: boolean;
}

// Command Options Type
export type CommandOptionType = "STRING" | "INTEGER" | "CHANNEL" | "USER";

// Command Option Slash
export interface CommandOptionSlash {
    [key: string]: any;
}

// Command Option Slash Builder Option
export interface CommandOptionSlashBuilderOption extends Omit<ApplicationCommandOptionBase, "setName" | "setDescription" | "setRequired"> {
    setName: (name: string) => this;
    setDescription: (description: string) => this;
    setRequired: (required: boolean) => this;
}