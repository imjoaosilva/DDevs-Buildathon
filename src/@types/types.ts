import { PermissionFlagsBits, SlashCommandBuilder } from "discord.js";
import { Bot } from "../models/Bot";

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
    options?: CommandOption[],
    slash?: SlashCommandBuilder;
    execute?: (...args: any[]) => void;
}

interface CommandOption {
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