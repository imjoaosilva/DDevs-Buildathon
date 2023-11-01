import { HandlerOptions } from "../@types/types";
import { Bot } from "./Bot";
import fs from 'fs';
import { CommandOptions, EventOptions } from "../@types/types";

/*
    Creating a new class that will load all the commands and events
*/

export class Handler {

    // Client Property
    public _client: Bot;

    // Storing Property (optional)
    public _store: CommandOptions[] = [];

    // Options Property
    private _options: HandlerOptions;

    constructor(Client: Bot, options: HandlerOptions) {
        this._client = Client;
        this._options = options;
    }

    // This method will load the files from options.folder
    async Load() {

        const processedData: any = [];
        
        // Picking up all the files from the folder
        const files = fs.readdirSync(this._options.absolute_path).filter(file => this._options.filestype.includes(file.split(".").pop()!))
        
        // Looping through all the files
        for(const file of files) {

            // Getting the class from the file
            const data = (await import(`${this._options.path}/${file}`)).default;


            // New instance of the class
            const instance = new data(this._client);

            processedData.push(instance);


            /*
                OBS: I know I could do everything in this loop, but I'd rather store in an array and return to maintain an organization 
                [Can be changed in the future if it affects performance]
            */
        }

        return processedData;
    }

}