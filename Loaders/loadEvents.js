import { readdirSync } from "fs";

export default async function(bot) {
    readdirSync("./Events").filter(f => f.endsWith(".js")).forEach(async file => {

        let event = (await import(`../Events/${file}`)).default;
        bot.on(file.split(".js").join(""), event.bind(null, bot))
        console.log(`Évènement ${file} chargé avec succès !`)
    })
}