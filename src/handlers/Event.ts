import { Handler } from "../models/Handler";
import { HandlerOptions } from "../@types/types";
import { Bot } from "../models/Bot";
import { ClientEvents } from "discord.js";

export class EventHandler extends Handler {

    constructor(client: Bot, options: HandlerOptions) {
        super(client, options);
    }

    async Load() {

        // Loading all the events
        const files = await super.Load();

        // Loop to store all the events
        files.forEach((file: any) => {
            if(file.once) {

                // if the event is once, then we will use the once method
                this._client.once(file.name, (...args: ClientEvents[keyof ClientEvents]) => file.execute(...args));
            }
            else {

                // if the event is not once, then we will use the on method
                this._client.on(file.name, (...args: ClientEvents[keyof ClientEvents]) => file.execute(...args));
            }
        });
    }
}