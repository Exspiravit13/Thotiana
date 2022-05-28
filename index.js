/**
 * Thotiana Discord Bot 
 * @author A1FA
 * @author Khaled
 */

 import  { Intents, Client, MessageEmbed, Message } from "discord.js";

 import cfg from "./config.json" assert {type: "json"};
 const testGuild = cfg.testGuild;
 const devID1 = cfg.devID1;
 const devID2 = cfg.devID2;
 const defaultPrefix = cfg.defaultPrefix;
 const disableEveryone = cfg.disableEveryone;
 const token = cfg.token;

 const prefix= '$' //idk it said prefix is not defined so I did this
 
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
 

 
 const arrCommands = [ "help", "ban", "kick", "mute", "say", ];
 
 client.on('messageCreate', (message) => {
    if(message.author.id === client.user.id) return;
     else if (message.content == 'kys') {
         message.reply({content: 'you first'})
         
     } else if (message.content == `beggar`) {
         message.reply({content: `is a cocksucking bitch ass gay boy`})
            
     } else if (message.content == `shut up`) {
         message.reply({content: `KYS`})
     
     } else if (message.content == `head`) {
         message.reply({content: `I love giving head!`})
         
     } else if (message.content == `fuck`) {
         message.reply({content: `me!`})
         
     } else if (message.content == `slut`) {
         message.reply({content: `Only for you ;)`})
         
     } else if (message.content == `smd`) {
         message.reply({content: `Cum here`})
         
     }
 })
 
 
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



 //trying to make an SAY command lol 

 /*client.on('message', async message => {
    if (message.content.startsWith(prefix)) return // dont run if the prefix is not used
    const args = message.content.substring(prefix.length).split(" "); // creating array of the message contents
    if (args[0].toLowerCase() === 'say') { // a simple command handler
        const description = args.splice(1).join(" ");
        const embed = new MessageEmbed().setDescription(description); // setTitle and stuff according to your preference
        await message.delete().catch(e => console.log(e)); // deleting the user message since it should be anonymous
        message.channel.send(embed);
    }
});
 */
 
 
 client.login(token)
