console.log('Starting Jackbot');

require('dotenv').config();
console.log('Getting .env variables')
const { BOTTOKEN, PREFIX, VOICECHANNEL, TEXTCHANNEL, HOSTID } = process.env;

console.log('New Discord Client')
const Discord = require('discord.js');
const client = new Discord.Client();

const { stopAllGames } = require('./gameUtil');
console.log('Loading commands')
client.commands = new Discord.Collection();
const fs = require('fs');
const { leaveVoiceChannel } = require('./robotUtil');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

console.log('Logging in')
client.login(BOTTOKEN);
client.on('ready', () => {
  setInterval(() => {
    client.channels.fetch(VOICECHANNEL).then((ch) => {
      if (ch.members.size == 0 || (ch.members.size == 1 && ch.members.has(HOSTID))) {
        stopAllGames();
        Promise.delay(leaveVoiceChannel, 500);
      }
    })
  }, 10 * 60 * 1000);
  
  console.log('Jackbot online');
});

client.on('message', (msg) => {
  if (
    !msg.content.startsWith(PREFIX) ||
      msg.author.bot ||
      msg.channel.id != TEXTCHANNEL ||
      !commandRestrictionCheck(msg)
  ) return;

  const commandName = msg.content.slice(PREFIX.length).trim().toLowerCase();

  const command = client.commands.find(cmd => cmd.aliases.includes(commandName));

  if (!command) return;

  if (command.name != 'help') {
    client.channels.fetch(VOICECHANNEL).then((ch) => {
      if (!ch.members.has(HOSTID)) {
        stopAllGames();
        Promise.delay(joinVoiceChannel, 500)
      }
    });
  }

  Promise.delay(() => {
    try {
      command.execute(msg, commandName);
    } catch (error) {
      console.error(error);
      msg.channel.send('There was an error trying to execute that command!');
    }
  }, 1500)
})


function commandRestrictionCheck(msg) {
  if (msg.member.voice.channelID != VOICECHANNEL) {
    msg.channel.send('Must be in the correct voice channel to perform this command');
    return false;
  }
  return true;
}


// time delay util
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

Promise.delay = (func, ms) => {
  if (!ms) {
    ms = func;
    func = () => {};
  }
  return delay(ms).then(func);
}

Promise.prototype.delay = function (func, ms) {
  return this.then(() => Promise.delay(func, ms));
}
