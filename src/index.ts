import { Bot } from "./models/Bot";
import 'dotenv/config';

// Creating a new instance of the bot
const bot = new Bot(process.env.TOKEN);

// Starting the bot
bot.start();