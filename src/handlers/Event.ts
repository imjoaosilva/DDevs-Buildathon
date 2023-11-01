import { Handler } from "../models/Handler";
import { HandlerOptions } from "../@types/types";
import { Bot } from "../models/Bot";
import { ClientEvents } from "discord.js";

export class EventHandler extends Handler {

    constructor(client: Bot, options: HandlerOptions) {
        super(client, options);
    }

    async Load() {
        const files = await super.Load();
        
        
        if(files.once) {
            this._client.once(files.name, (...args: ClientEvents[keyof ClientEvents]) => files.execute(...args));
        }
        else {
            this._client.on(files.name, (...args: ClientEvents[keyof ClientEvents]) => files.execute(...args));
        }
    }
}