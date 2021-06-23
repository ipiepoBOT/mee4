const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require("./config.js");
const fs = require('fs');
const config = require('./config.js');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./komendy/').filter(file => file.endsWith('.js'));

client.once('ready', () => {
    console.log('bot załadowany');
    client.user.setActivity('@Asxiv.xyz', {type: 'WATCHING'})
});

for (const file of commandFiles) {
    const command = require(`./komendy/${file}`);
    client.commands.set(command.name, command); 
}

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ban') {
        client.commands.get('ban').execute(message, args, Discord, client)
    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args, Discord, client)
    } else if (command === 'clear') {
        client.commands.get('clear').execute(message, args, Discord, client)
    } else if (command === 'rr') {
        client.commands.get('rr').execute(message, args, Discord, client)
    } else if (command === 'help') {
        client.commands.get('help').execute(message, args, Discord, client)
    } else if (command === 'unban') {
        client.commands.get('unban').execute(message, args, Discord, client)
    } else if (command === 'userinfo') {
        client.commands.get('userinfo').execute(message, args, Discord, client)
    }
});


client.on("message", message => {
    if (message.author.bot) return false;

    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
if (message.content.match(prefixMention)) {
      return message.channel.send((new Discord.MessageEmbed().setColor('#00FF02').setTitle('Ping').setDescription(`prefix: /\nkomenda: /help`)));
    };
});

client.login(config.token)