import { HandlerOptions } from "../@types/types";
import { Bot } from "./Bot";
import fs from 'fs';

/*
    Creating a new class that will load all the commands and events
*/

export class Handler {

    // Client Property
    public _client: Bot;

    // Storing Property (optional)
    private _store: any;

    // Options Property
    private _options: HandlerOptions;

    constructor(Client: Bot, options: HandlerOptions) {
        this._client = Client;
        this._options = options;
    }

    // This method will load the files from options.folder
    Load() {
        
        // Picking up all the files from the folder
        const files = fs.readdirSync(this._options.folder).filter(file => this._options.filestype.includes(file.split(".").pop()!))
        
        // Looping through all the files
        for(const file of files) {
            console.log(file)
        }
    }

}