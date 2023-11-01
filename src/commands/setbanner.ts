import { Command } from "../models/Command";
import { Bot } from "../models/Bot";
import { setbanner } from "../useCases/User/Controller/user.controller";
import { EmbedBuilder } from "discord.js";

export default class setbannerCommand extends Command {

    // Client Property
    public _client: Bot;

    constructor(client: Bot) {
        super({
            name: "setbanner",
            description: "Changes the banner of a user",
            permissions: {
                admin: false
            },
            options: [
                {
                    name: "image",
                    description: "The image to set as banner",
                    type: "ATTACHMENT",
                    required: true
                }
            ]
        })

        this._client = client;
    }

    // This method will be executed when the command is used
    async execute(interaction: any) {

        // Getting the image
        const image = interaction.options.getAttachment("image")
       
        // Checking if the image big
        if(image.size > 8000000) return interaction.reply({ content: "The image is too big.", ephemeral: true });

        // Checking if its jpeg or png
        if(!image.contentType.includes("jpeg") && !image.contentType.includes("png")) return interaction.reply({ content: "The image must be jpeg or png.", ephemeral: true });
        
        // Checking if the image is a banner
        await setbanner(interaction.user.id, image.url);

        // Creating the embed
        const embed = new EmbedBuilder()
            .setColor("Purple")
            .setTitle("Banner Changed")
            .setDescription("Your banner has been changed successfully!")
            .setImage(image.url);

        // Sending the embed
        interaction.reply({ embeds: [embed] });

    }
}