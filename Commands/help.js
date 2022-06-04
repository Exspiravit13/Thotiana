const Discord = require("discord.js")
const { defaultPrefix } = require("../config/config.json");
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor (`DARK_VIVID_PINK`)
    .setTitle (`Thotiana Help`)
    .setAuthor ({name: `Thotiana`, iconURL: `https://cdn.discordapp.com/attachments/955916659019890762/980077322910716005/Thotiana.jpg`})
    .setThumbnail (`https://cdn.discordapp.com/attachments/955916659019890762/980077322910716005/Thotiana.jpg`)
    .addFields(
       { name:`**Commands**`, value: `These are my following commands` },
       { name:`**Say**`, value: `${defaultPrefix}say *your message here*` },
       { name:`**Smash or Pass (coming soon!)**`, value: `${defaultPrefix}sop` },
       { name:`**Would you rather (coming soon!) **`, value: `${defaultPrefix}wyr` },
       { name:`**Keywords I respond to!**`, value: `Head \n Slut \n Fuck \n Smd` }
    )
    .setFooter ({text: ``})
    message.channel.send({embeds: [embed]})

};

exports.name = `help`
