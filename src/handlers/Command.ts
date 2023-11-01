import { Handler } from "../models/Handler";
import { HandlerOptions } from "../@types/types";
import { Bot } from "../models/Bot";

export class CommandHandler extends Handler {

    constructor(client: Bot, options: HandlerOptions) {
        super(client, options);
    }

    async Load() {

        // Loading all the commands
        const files = await super.Load();

        // Loop to store all the commands
        files.forEach((file: any) => {
            this._store.push(file);
        });
    }
}