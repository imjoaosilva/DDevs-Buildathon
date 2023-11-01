import { Handler } from "../models/Handler";
import { HandlerOptions } from "../@types/types";
import { Bot } from "../models/Bot";

export class CommandHandler extends Handler {

    constructor(client: Bot, options: HandlerOptions) {
        super(client, options);
    }

    async Load() {
        const files = await super.Load();
        this._store.push(files);
    }
}