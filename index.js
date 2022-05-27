/**
 * Thotiana Discord Bot 
 * @author A1FA
 */
 const { Intents, message, Client } = require ('discord.js')

 const client = new Client({
     partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
     intents: Object.keys(Intents.FLAGS)
 });

client.on('ready', () => {
    console.log('Thotiana Online')
    let activities = [`Giving Head`, `Taking it deep`, `Being a naughty girl`,`.gg/thotzz` ],i = 0;
  setInterval(() => client.user.setActivity(`${activities[i++ %  activities.length]}`,  {type:"PLAYING",name:".gg/thotzz"  }), 5000)
    client.guilds.cache.forEach(guild => {
    console.log(`${guild.name} | ${guild.id}`);
  })
});

const prefix = "!!"

const arrCommands = [ "help", "ban", "kick", "mute", "say" ];

const responses =["","","","","","","","","","","",];

runCommands
resCommands

function runCommands() {
    for (let i = 0; i < arrCommands.length; i++)
        if (message.content.startsWith(prefix + arrCommands[i]))
            switch(i) {
                case 0:message.channel.send({embeds: [help]})
                break;
                case 1:banMember()
                break;
                case 2:kickMember()
                break;
                case 3:muteMember()
                break;
                case 4:say() 
            }
}


function banMember(message,) {
        const member = message.mentions.users.first();
        if(message.member.permissions.has(`BAN_MEMBERS`)){
            const target = message.guilds.members.cache.get(member.id);
            target.Ban();
            message.channel.send(`target has been banned`)
        } else {
            message.channel.send(`You do not have permission to ban this user`)
            
        }
};

client.on('messageCreate', (message) => {
    if (message.content === prefix + 'help') {
        message.reply({content: 'you first'
        })
    }
})

client.on('messageCreate', (message) => {
    if (message.content === 'kys') {
        message.reply({content: 'you first'
        })
    }
})

client.on('messageCreate', (message) => {
    if (message.content === 'beggar') {
        message.reply({content: 'is a cocksucking bitch ass gay boy'
        })
    }
})

client.on('messageCreate', (message) => {
    if (message.content === 'shut up') {
        message.reply({content: 'kys'
        })
    }
})

client.on('messageCreate', (message) => {
    if (message.content === 'fuck') {
        message.reply({content: 'me'
        })
    }
})

client.on('messageCreate', (message) => {
    if (message.content === 'head') {
        message.reply({content: 'I love giving head!'
        })
    }
})

client.on('messageCreate', (message) => {
    if (message.content === 'ding') {
        message.reply({content: 'dong'
        })
    }
});

client.on('messageCreate', (message) => {
    if (message.content === 'slut') {
        message.reply({content: 'only for you ;)'
        })
    }
})

client.on('messageCreate', (message) => {
    if (message.content === 'smd') {
        message.reply({content: 'cum here'
        })
    }
})


//empty commands start

function resCommands() {
    for (let i = 0; i <responses.length; i++)
        if (message.content.startsWith(prefix + responses[i]))
            switch(i) {
                case 0:message.reply()
                break;
                case 1:message.reply()
                break;
                case 2:message.reply()
                break;
                case 3:message.reply()
                break;
                case 4:message.reply() 
                break;
                case 5:message.reply()
                break;
                case 6:message.reply()
                break;
                case 7:message.reply()
                break;
                case 8:message.reply()
                break;
                case 9:message.reply()
                break;
                case 10:message.reply()
                break;              
            }
}

//empty commands end

client.login("OTc2NzgxOTIxMDIxNDgxMDEw.Gj6t1t.0TQj3UDJlu6NI0HLwPrQw8nUc0H15E1mXNolhI")
