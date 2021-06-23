module.exports = {
    name: 'help',
    aliases: ['pomoc', 'komendy'],
    description: 'help',
    execute(message, args, Discord) {
        let newEmbed = new Discord.MessageEmbed()
 
        .setColor('#A200FF')
        .setTitle('Pomoc!')
        .setDescription(`**Komendy moderacyjne:**\nban, kick, unban, rr, clear\n**Komendy Informacyjne:**\nuserinfo`)
 
        message.channel.send(newEmbed);
    },
};