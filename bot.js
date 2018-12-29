const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Hi') {
    msg.reply('Hello');
  }
});
client.on('message', msg => {
  if (msg.content === 'اشلونك') {
    msg.reply('بخير وانته');
  }
});



client.login('NTI4NDE0MzU3ODczMzYwODk2.DwiC5w.b32z4Sj62WRB_WXsVJEjok6mvuU');
