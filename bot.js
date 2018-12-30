const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '526959084235128838').setName("W");
client.channels.find('id', '526959084235128838').setName("We");
client.channels.find('id', '526959084235128838').setName("Wel");
client.channels.find('id', '526959084235128838').setName("Welc");
client.channels.find('id', '526959084235128838').setName("Welco");
client.channels.find('id', '526959084235128838').setName("Welcom");
client.channels.find('id', '526959084235128838').setName("Welcome");
client.channels.find('id', '526959084235128838').setName("Welcome T");
client.channels.find('id', '526959084235128838').setName("Welcome To");
client.channels.find('id', '526959084235128838').setName("Welcome To s");
client.channels.find('id', '526959084235128838').setName("Welcome To ser");
client.channels.find('id', '526959084235128838').setName("Welcome To serv");
client.channels.find('id', '526959084235128838').setName("Welcome To server i");
client.channels.find('id', '526959084235128838').setName("Welcome To seever ir");
client.channels.find('id', '526959084235128838').setName("Welcome To server iraq");
client.channels.find('id', '526959084235128838').setName("Welcome To server iraqm");
client.channels.find('id', '526959084235128838').setName("Welcome To server iraqma");
client.channels.find('id', '526959084235128838').setName("Welcome To server iraqmax");
client.channels.find('id', '526959084235128838').setName("Welcome To server iraqmaxyt");
client.channels.find('id', '526959084235128838').setName("Welcome To server iraqmaxyt");
  }, 4000);
});



client.on('message',async message => {
  if(message.content.startsWith(prefix + "setVoice")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('✅| **تم عمل الروم بنجاح**');
  message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${529035159614259220}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(function() {
      c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
    },1000);
  });
  }
});



client.login('NTI0NTU3NDg2OTQyODQ2OTc3.DwqbMw.NLoJgHoPSAysm8mFCGEwQrSlpfg');
