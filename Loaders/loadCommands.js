import { readdirSync } from "fs";

export default async function(bot){
    readdirSync("./Commandes").filter(f => f.endsWith(".js")).forEach(async file => {

        const command = (await import(`../Commandes/${file}`)).default;
        if(!command.name || typeof command.name !== "string") throw new TypeError (`La commande ${file.slice(0, file.length - 3)} n'a pas de nom !`)
        bot.commands.set(command.name, command)
        console.log(`Commande ${command.name} chargée avec succès !`)
    })
}