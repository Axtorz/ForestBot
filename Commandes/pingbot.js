const Discord = require("discord.js")

module.exports = {

    name: "pingbot",
    description: "Afficher la latence du bot",
    permission: "Aucune",
    dm: true,

    async run(bot, message, args) {

        let Embed = new Discord.EmbedBuilder()
            .setColor(bot.color)
            .setTitle("**Pong !** 🏓")
            .setDescription(`Ping bot : \`${bot.ws.ping}\` ms\n`)

        await message.reply({embeds: [Embed]})
    }
}
