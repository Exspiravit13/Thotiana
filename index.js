/**
 * Thotiana Discord Bot 
 * @author A1FA
 * @author Khaled
 */

const  { Intents, Client, MessageEmbed, Message, Collection, } = require("discord.js");
const express = require("express")
const fs = require("fs");


 //Import Config.json
const { devID1, devID2, testGuild, defaultPrefix, disableEveryone, token} = require("./config/config.json");


//Express Runtime
const app = express();

app.listen(8080, () => {
  console.log('Thotiana Online')
  let activities = [`Giving Head`, `Taking it deep`, `Being a naughty girl`,`.gg/thotzz` ],i = 0;
setInterval(() => client.user.setActivity(`${activities[i++ %  activities.length]}`,  {type:"PLAYING",name:".gg/thotzz"  }), 5000)
  client.guilds.cache.forEach(guild => {
  console.log(`${guild.name} | ${guild.id}`);
})
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});


const client = new Client({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
  intents: Object.keys(Intents.FLAGS),
});

client.on("ready", () => {
  let activities = [`Giving Head`, `Taking it deep`, `Being a naughty girl`,`.gg/thotzz` ],i = 0;
setInterval(() => client.user.setActivity(`${activities[i++ %  activities.length]}`,  {type:"PLAYING",name:".gg/thotzz"  }), 5000)
  client.guilds.cache.forEach(guild => {
  console.log(`${guild.name} | ${guild.id}`);
})
})

client.commands = new Collection();


const commands = fs.readdirSync(`./Commands`).filter(file => file.endsWith(`.js`));
for(file of commands) {
  const commandName = file.split(".")[0];
  const command = require(`./Commands/${commandName}`);
  client.commands.set(commandName, command); 
};

client.on("messageCreate", message => {
if (message.author.bot || !message.guild) return;
if (message.content.startsWith(defaultPrefix)) {
  const args = message.content.slice(defaultPrefix.length).trim().split(/ +/g)
  const commandName = args.shift();
  const command = client.commands.get(commandName);

  if (!command) return;
  command.run(client, message, args);

  //keywords
  
};
// client.on("interactionCreate", interaction => {
//   if(!interaction.isCommand()) return; 

//   const command = client.commands.get(interaction.commandName);

//   if (!command) return;
//   command.execute(interaction)
// });


if (message.content.toLowerCase() == 'kys') {
  message.reply({content: 'you first'});  
} else if (message.content.toLowerCase() == `beggar`) {
  message.reply({content: `<@892228535144566794> is a cocksucking bitch ass gay boy`});
} else if (message.content.toLowerCase() == `shut up`) {
  message.reply({content: `kys`});
} else if (message.content.toLowerCase() == `head`) {
  message.reply({content: `I love giving head!`});
} else if (message.content.toLowerCase() == `fuck`) {
  message.reply({content: `me!`});
} else if (message.content.toLowerCase() == `slut`) {
  message.reply({content: `Only for you ;)`});
} else if (message.content.toLowerCase() == `smd`) {
  message.reply({content: `Cum here`});
//} else if (message.content.toLowerCase() == `ambition`) {
//  message.reply({content: `<@966890733736976445> Is a straight up physchopath lol with a mixed form of reality whom uses pictures of a dead girl to catfish poor e-boys and coherces them into paying for her nitro every month.`})
}
})

client.login(token);