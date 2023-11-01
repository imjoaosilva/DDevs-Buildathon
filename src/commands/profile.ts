import { AttachmentBuilder, CommandInteraction, Interaction, PermissionFlagsBits, User } from "discord.js";
import { Command } from "../models/Command";
import { Bot } from "../models/Bot";
import { ProfileTemplate } from "../templates/profile";
import * as user_controller from "../useCases/User/Controller/user.controller";

export default class profileCommand extends Command {

    // Client Property
    public _client: Bot;

    constructor(client: Bot) {
        super({
            name: "profile",
            description: "Shows the profile of a user",
            permissions: {
                admin: false,
                permission: PermissionFlagsBits.Administrator
            },
            options: [
                {
                    name: "user",
                    description: "The user to show the profile",
                    type: "USER",
                    required: true
                }
            ]
        })

        this._client = client;
    }

    // This method will be executed when the command is used
    async execute(interaction: CommandInteraction) {
        interaction.deferReply();

        const user = interaction.options.getUser("user") as User;

        const userdata = await user_controller.get(user.id);

        const profile = new ProfileTemplate(user.username, user.displayAvatarURL(), userdata.banner, userdata.roles);

        const image = await profile.create();
        const attachment = new AttachmentBuilder(image, { name: "profile.png" });

        interaction.followUp({ files: [attachment] });
    }
}