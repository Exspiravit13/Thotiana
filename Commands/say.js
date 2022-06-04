exports.run = (client, message, args) => {
        /**
         * @param {string} repeat Message to be repeated
         */
        let repeat = message.content.split(` `).slice(1).join(` `);
        if (message.content.includes( `@everyone`, `@here`, `@all`)) {
            message.reply({content: `Unauthorized ping.`})
        } else if (repeat.length == 0 ) {
            message.reply({content: `Please provide a string to return.`})
        } else {
            message.delete();
            message.channel.send(repeat)
        }

};

module.exports.name = "say"