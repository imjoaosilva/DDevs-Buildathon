import { Bot } from "../models/Bot";
import { Event } from "../models/Event";

export default class ReadyEvent extends Event {

    // Client Property
    public _client: Bot;

    constructor(client: Bot) {
        super({
            name: "ready",
            once: true
        });
        
        this._client = client;
    }

    // This method will be executed when the event is triggered
    async execute() {
        console.log("Bot is ready!");
    }
}