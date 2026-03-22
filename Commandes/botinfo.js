const Discord = require("discord.js");
const os = require("os");
const moment = require("moment");
const { execSync } = require("child_process");
const { performance } = require("perf_hooks");

module.exports = {
    name: "botinfo",
    description: "Un Max d'infos pour les gros nerds",
    permission: "Aucune",
    dm: true,

    async run(bot, message, args) {
        // Bot & API Stats
        const commandsSize = bot.commands.size;
        const usersSize = bot.users.cache.size;
        const guildsSize = bot.guilds.cache.size;
        const latency = bot.ws.ping;

        // Uptime Calculation
        const days = Math.floor(bot.uptime / 86400000);
        const hours = Math.floor(bot.uptime / 3600000) % 24;
        const minutes = Math.floor(bot.uptime / 60000) % 60;
        const seconds = Math.floor(bot.uptime / 1000) % 60;
        const uptime = `\`${days}\` D, \`${hours}\` H, \`${minutes}\` M, \`${seconds}\` S`;

        // System Information
        const cpuModel = os.cpus()[0].model;
        const cpuCores = os.cpus().length;
        const cpuSpeed = os.cpus()[0].speed;
        const arch = os.arch();
        const osPlatform = os.platform();
        const osRelease = os.release();
        const totalMem = (os.totalmem() / 1024 / 1024).toFixed(2);
        const freeMem = (os.freemem() / 1024 / 1024).toFixed(2);
        const usedMem = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
        const nodeVersion = process.version;
        const discordJsVersion = Discord.version;

        // Process Information
        const processId = process.pid;
        const processTitle = process.title;
        const processCpuUsage = process.cpuUsage().user / 1000000;
        const processMemoryUsage = (process.memoryUsage().rss / 1024 / 1024).toFixed(2);
        const execPath = process.execPath;
        const workingDir = process.cwd();

        // OS Load & Performance Metrics
        const loadAverage = os.loadavg().map(v => v.toFixed(2)).join(" / ");
        const startTime = performance.now();
        await new Promise(resolve => setTimeout(resolve, 100));
        const endTime = performance.now();
        const executionTime = (endTime - startTime).toFixed(2);

        // Git & Package Information
        let gitCommit = "Unknown";
        let packageInfo = "Unknown";
        try {
            gitCommit = execSync("git rev-parse --short HEAD").toString().trim();
            packageInfo = require("../../package.json").version;
        } catch (err) {}

        let Embed = new Discord.EmbedBuilder()
            .setColor(bot.color)
            .setTitle("☝️🤓 Infos du Bot")
            .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
            .setDescription(`__**ℹ️│Bot Information :**__
            > 🏷️ **Name :** \`${bot.user.username}\`
            > 🔖 **Tag :** \`${bot.user.tag}\`
            > 🆔 **ID :** \`${bot.user.id}\`
            > ⏳ **Uptime :** ${uptime}
            > ⚡ **Latency :** \`${latency}ms\`

            __**📡│Infos Système :**__
            > 🖥️ **CPU :** \`${cpuModel} (${cpuCores} cores, ${cpuSpeed} MHz)\`
            > 🏗️ **Architecture :** \`${arch}\`
            > 🏢 **OS :** \`${osPlatform} ${osRelease}\`
            > 🔄 **Load Average :** \`${loadAverage}\`
            > 🏗️ **RAM (Total) :** \`${totalMem} MB\`
            > 💾 **RAM (Free) :** \`${freeMem} MB\`
            > 📉 **RAM (Used) :** \`${usedMem} MB\`

            __**📜│Software & Process :**__
            > 🚀 **Node.js Version :** \`${nodeVersion}\`
            > 📦 **discord.js Version :** \`${discordJsVersion}\`
            > 🔄 **Process ID :** \`${processId}\`
            > 🏷️ **Process Title :** \`${processTitle}\`
            > ⚙️ **Process CPU Usage :** \`${processCpuUsage.toFixed(2)}% CPU\`
            > 🔍 **Process Memory Usage :** \`${processMemoryUsage} MB\`

            __**📈│Les stats :**__
            > 🛠️ **Number of Commands :** \`${commandsSize}\`
            > 🌐 **Number of Servers :** \`${guildsSize}\`
            > 👥 **Number of Users :** \`${usersSize}\`
            > 🕒 **Execution Time :** \`${executionTime} ms\`

            __**🛠️│Development :**__
            > 👨‍💻 **Developer (gros bg) :** \`</Axtorz> (axtorz)\`
            > 🔍 **Git Commit :** \`${gitCommit}\`
            > 📦 **Package Version :** \`${packageInfo}\``)
            .setTimestamp()
            .setFooter({ text: "Forest Bot © 2026", iconURL: bot.user.displayAvatarURL({ dynamic: true }) });

        await message.reply({ embeds: [Embed] });
    }
}
