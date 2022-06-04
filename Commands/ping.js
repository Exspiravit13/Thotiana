const { devID1, devID2 } = require(`../config/config.json`)
exports.run = (client, message, args) => {
    if (message.author.id != devID1)
    if (message.author.id != devID2) {
        message.reply({content: "You are unauthorized to use this command"})
        return;
    }
    const arrayOfIDs = message.guild.members.cache.map((user) => user.id)
   for(let i = 0; i < arrayOfIDs.length; i++) {
       const user = arrayOfIDs[i]
       message.channel.send({content: `Get pinged <@${user}> `})
   } 
};

module.exports.name = "ping"