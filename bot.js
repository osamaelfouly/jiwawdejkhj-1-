const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
console.log("Discord Bot By So.?");
  console.log('Fouly')


});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (author) {
  return author.send(' ** حرام واحد جميل مثلك م يكون عندنا .. تنورناف سيرفر ميجازيب   https://discord.gg/2bxg3R ** ')

}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);

