import { Client, GatewayIntentBits, Collection } from 'discord.js';
import dotenv from 'dotenv';
import loadCommands from './Loaders/loadCommands.js';
import loadEvents from './Loaders/loadEvents.js';

const bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions
  ]
});

bot.commands = new Collection();
bot.color = "#00a30e";

dotenv.config();

await bot.login(process.env.TOKEN);

loadCommands(bot);
loadEvents(bot);