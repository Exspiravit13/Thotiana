/**
 * Thotiana Discord Bot 
 * @author A1FA
 * @author Khaled
 */

import  { Intents, Client, MessageEmbed, Message, } from "discord.js";
import fs from "node:fs";
//import { Routes } from "discord-api-types/v10";
//import { REST } from "@discordjs/rest";

import cfg from "./config/config.json" assert {type: "json"};
const devs = (cfg.devID1, cfg.devID2) 
const testGuild = cfg.testGuild;
const devID1 = cfg.devID1;
const devID2 = cfg.devID2;
const defaultPrefix = cfg.defaultPrefix;
const disableEveryone = cfg.disableEveryone;
const token = cfg.token;


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

client.on("messageCreate", (message) => {
//Args
    let args = message.content.split(" ").slice(1);
    var args1 = args[0]; // Amount
    var args2 = args.slice(1).join(' ') // Naming
    var args3 = args.slice(2).join(', '); // Other
    
    //Help Embed
    const help = new MessageEmbed()
    .setColor (`DARK_VIVID_PINK`)
    .setTitle (`Thotiana Help`)
    .setAuthor ({name: `Thotiana`, iconURL: `https://cdn.discordapp.com/attachments/955916659019890762/980077322910716005/Thotiana.jpg`})
    .setThumbnail (`https://cdn.discordapp.com/attachments/955916659019890762/980077322910716005/Thotiana.jpg`)
    .addFields(
       { name:`**Commands**`, value: `${defaultPrefix}say *your message here*` },
       { name:`**Keywords I respond to!**`, value: `head \n slut \n smd \n fuck` }
    )
    .setFooter ({text: ``})

    const arrCommands = [ "help", "say", "wyr", "sop",  ];

    if (message.content.startsWith(defaultPrefix)) {
        runCommands()
    }

    function runCommands() {
        for (let i = 0; i < arrCommands.length; i++)
            if (message.content.startsWith(defaultPrefix + arrCommands[i]))
                switch(i) {
                    case 0:message.channel.send({embeds: [help]})
                    break;
                    case 1:say()
                    break;
                    case 2:wouldYouRather();
                    break;
                    case 3:smashOrPass();
                    break;
     
                }
    }


    if (message.content == 'kys') {
        message.reply({content: 'you first'})
    } else if (message.content == `beggar`) {
        message.reply({content: `is a cocksucking bitch ass gay boy`})
    } else if (message.content == `shut up`) {
        message.reply({content: `kys`})
    } else if (message.content == `head`) {
        message.reply({content: `I love giving head!`})
    } else if (message.content == `fuck`) {
        message.reply({content: `me!`})
    } else if (message.content == `slut`) {
        message.reply({content: `Only for you ;)`})
    } else if (message.content == `smd`) {
        message.reply({content: `Cum here`})
    }
    
    function say() {
        let sayMessage = message.content;
        let repeat = sayMessage.split(' ').slice(1).join(' ');
        message.delete();
        message.channel.send(repeat);
    }
})


client.login(token)
