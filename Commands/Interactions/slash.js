const discord = require("discord.js")
const { SlashCommandBuilder } = require(`discord.js`);

//const data = new SlashCommandBuilder();
exports.execute = {

    //data: new SlashCommandBuilder(),
     execute(interaction) {
         interaction.reply({
             content: "This is a test slash command!",
             emphemeral: false
         })
     }
 }

 module.exports.name = "slash"