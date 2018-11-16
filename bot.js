client.on("guildMemberAdd", member => { // @! Falsteni - آدم#8655 
        if(member.guild.id === "495305349499453450") {  // @! Falsteni - آدم#8655 
setTimeout(function(){ // @! Falsteni - آدم#8655 
  const channel = member.guild.channels.find('id', '504875279957884928');  // @! Falsteni - آدم#8655 
if (!channel) return; // @! Falsteni - آدم#8655 
  channel.send(`**Welcome To __TM CLAN__  ** ❤️ `)  // @! Falsteni - آدم#8655 
}, 5000);  // @! Falsteni - آدم#8655 
}}); // @! Falsteni - آدم#8655 




client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء