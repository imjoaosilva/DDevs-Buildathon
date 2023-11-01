import { PermissionFlagsBits } from "discord.js";
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
    }
}

// Event interface
export interface EventOptions {
    name: string;
    once?: boolean;
}