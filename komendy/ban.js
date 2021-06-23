const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'ban',
    description: 'ban',
    execute(message, args) {
        const banPermisje = new Discord.MessageEmbed()
        .setTitle('Błąd')
        .setDescription(` Nie posiadasz permisji do użycia tej komendy!\n\n Wymagane permisje: **Banowanie Członków**!`)
        .setColor(`RED`)
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
    
        const banOznacz = new Discord.MessageEmbed()
        .setTitle('Błąd')
        .setDescription(` ${message.author} Nie oznaczyłeś osoby którą chcesz zbanować!`)
        .setColor(`RED`)
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
    
        const banUnable = new Discord.MessageEmbed()
        .setTitle('Błąd')
        .setDescription(` ${message.author} Nie możesz zbanować tej osoby!`)
        .setColor(`RED`)
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
    
            if (!message.member.hasPermission('BAN_MEMBERS'))
                return message.channel.send(banPermisje).then(msg => {
        })
            const member = message.mentions.members.first();
            if (!member)
                return message.channel.send(banOznacz).then(msg => {
        })
            if (!member.bannable)
                return message.channel.send(banUnable).then(msg => {
        })
            const reason = args.slice(1).join(" ")
            if (member) {
                if (!reason) return member.ban().then(member => {
                    const banUdanyD = new Discord.MessageEmbed()
                    .setTitle('BAN')
                    .setDescription(`Kto:\n${member.user.tag}.\n\nZbanowany Przez:\n${message.author}\n`)
                    .setColor(`GREEN`)
                    .setImage('https://media.tenor.com/images/514999795ee0021dc2a60c2110077ce2/tenor.gif')
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(banUdanyD);
                })
				if (reason) return member.ban().then(member => {
            		const BickU2 = new Discord.MessageEmbed()
                    .setTitle('BAN')
                    .setDescription(`Kto:\n${member.user.tag}\n\nPowód:\n${reason}\n\nZbanowany Przez:\n${message.author}\n`)
            		.setColor(`GREEN`)
                    .setImage('https://media.tenor.com/images/514999795ee0021dc2a60c2110077ce2/tenor.gif')
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            		message.channel.send(BickU2);
        })
        }
    }
}