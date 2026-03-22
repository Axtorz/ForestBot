const Discord = require("discord.js")
const intents = new Discord.IntentsBitField([
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.GuildMessageReactions
]);

const bot = new Discord.Client({ intents });
const loadCommands = require("./Loaders/loadCommands")
const loadEvents = require("./Loaders/loadEvents")
const config = require("./config")
const client = require("./main.js")

bot.commands = new Discord.Collection()
bot.color = "#00a30e";

bot.login(config.token)
loadCommands(bot)
loadEvents(bot)