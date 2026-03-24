import { InteractionType } from "discord.js"

export default async function(bot, interaction){

    if(interaction.type === InteractionType.ApplicationCommandAutocomplete) {

        let entry = interaction.options.getFocused()

        if(interaction.commandName === "help") {

            let choises = bot.commands.filter(cmd => cmd.name.includes(entry))
            await interaction.respond(entry === "" ? bot.commands.map(cmd => ({name: cmd.name, value: cmd.name})) : choises.map(choice => ({name: choice.name, value: choice.name})))
        }
        if(interaction.commandName === "translate") {

            let choices = ["en", "fr"] 
            let sortie = choices.filter(c => c.includes(entry))
            await interaction.respond(entry === "" ? sortie.map(c => ({name: c, value: c})) : sortie.map(c => ({name: c, value: c})))
    
        }
    }

    if(interaction.type === InteractionType.ApplicationCommand) {

        let command = (await import(`../Commandes/${interaction.commandName}.js`)).default;
        command.run(bot, interaction, interaction.options, bot.db)
    }

}