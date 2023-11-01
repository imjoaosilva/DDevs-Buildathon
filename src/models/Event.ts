import { EventOptions } from "../@types/types";
import { Bot } from "./Bot";

export class Event {
    
    // Name Property
    public readonly name: string;

    // Once Property
    public readonly once: boolean;

    constructor(options: EventOptions) {
        this.name = options.name;
        this.once = options.once!;
    }
}