import { EmbedBuilder } from "discord.js";

export default {
    name: "pingbot",
    description: "Afficher la latence du bot",
    permission: "Aucune",
    dm: true,

    async run(bot, message, args) {

        const Embed = new EmbedBuilder()
            .setColor(bot.color)
            .setTitle("**Pong !** 🏓")
            .setDescription(`Ping bot : \`${bot.ws.ping}\` ms\n`);

        await message.reply({ embeds: [Embed] });
    }
};