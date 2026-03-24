import loadSlashCommands from '../Loaders/loadSlashCommands.js';

export default async function(bot){

    await loadSlashCommands(bot)

    console.log(`${bot.user.tag} est bien en ligne !`)

    const activities = [
        { name: `Axtorz on YT`, type: 3 },
        { name: `Rapace333 on YT`, type: 3 }
    ];

    let i = 0;
    setInterval(() => {
        if(i >= activities.length) i = 0;
        bot.user.setActivity(activities[i]);
        i++;
    }, 5000);
    
}