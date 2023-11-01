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

        // Checking if the event is once
        if(files.once) {

            // If the event is once, then it will be executed only once
            this._client.once(files.name, (...args: ClientEvents[keyof ClientEvents]) => files.execute(...args));
        }
        else {
            
            // If the event is not once, then it will be executed every time
            this._client.on(files.name, (...args: ClientEvents[keyof ClientEvents]) => files.execute(...args));
        }
    }
}