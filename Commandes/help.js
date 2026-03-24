import { EmbedBuilder } from 'discord.js';

export default {
    name: "help",
    description: "Voir les commandes disponibles",
    permission: "Aucune",
    dm: true,

    async run(bot, message, args) {

        const Embed = new EmbedBuilder()
            .setColor(bot.color)
            .setTitle(`🛠️ Commandes Disponibles 🛠️`)
            .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
            .setDescription(`
**Bot Diagnostic Commands:**

\`pingbot\`
> __Description:__ Afficher la latence du bot.
> __Exemple:__ pingbot

\`botinfo\`
> __Description:__ Un Max d'infos pour les gros nerds.
> __Exemple:__ botinfo

\`help\`
> __Description:__ Voir les commandes disponibles.
> __Exemple:__ help

\`uptime\`
> __Description:__ Voir depuis combien de temps le bot est en ligne.
> __Exemple:__ uptime`)
            .setTimestamp()
            .setFooter({ 
                text: "Forest Bot © 2026", 
                iconURL: bot.user.displayAvatarURL({ dynamic: true }) 
            });

        await message.reply({ embeds: [Embed] });
    }
};
