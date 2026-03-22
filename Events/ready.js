const Discord = require("discord.js")
const loadSlashCommands = require("../Loaders/loadSlashCommands")

module.exports = async bot => {

    await loadSlashCommands(bot)

    console.log(`${bot.user.tag} est bien en ligne !`)

    const activities = [
        { name: `Axtorz on YT`, type: 3 }, 
    ];

const status = [
        'o'
    ];

    let i = 0;
    setInterval(() => {
        if(i >= activities.length) i = 0
        bot.user.setActivity(activities[i])
        i++;
    }, 5000);
    
    let s = 0;
    setInterval(() => {
        if(s >= activities.length) s = 0
        bot.user.setStatus(status[s])
        s++;
    }, 30000);
}