import { Handler } from "../models/Handler";
import { HandlerOptions } from "../@types/types";
import { Bot } from "../models/Bot";

export class CommandHandler extends Handler {
    constructor(Client: Bot, options: HandlerOptions) {
        super(Client, options);
    }
}