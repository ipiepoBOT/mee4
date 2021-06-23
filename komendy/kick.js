const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'kick',
    description: 'kick',
    execute(message, args) {
        const kickPermisje = new Discord.MessageEmbed()
        .setTitle('Błąd')
        .setDescription(`Nie posiadasz permisji do użycia tej komendy!\n\n Wymagane Permisje: **Wyrzucanie członków**!`)
        .setColor(`RED`)
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
    
        const kickOznacz = new Discord.MessageEmbed()
        .setTitle('Błąd')
        .setDescription(`${message.author} Nie oznaczyłeś osoby którą chcesz wyrzucić!`)
        .setColor(`RED`)
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
    
        const kickUnable = new Discord.MessageEmbed()
        .setTitle('Błąd')
        .setDescription(`Nie możesz wyrzucić tej osoby!`)
        .setColor(`RED`)
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))

        if (!message.member.hasPermission('KICK_MEMBERS'))
        return message.channel.send(kickPermisje).then(msg => {
})
    const member = message.mentions.members.first();
    if (!member)
        return message.channel.send(kickOznacz).then(msg => {
})
    if (!member.kickable)
        return message.channel.send(kickUnable).then(msg => {
})
    const reason = args.slice(1).join(" ")
    if (member) {
        if (!reason) return member.kick().then(member => {
            const kickU1 = new Discord.MessageEmbed()
            .setTitle('Kick')
            .setDescription(`Kto:\n${member.user.tag} został wyrzucony.\n\n Wyrzucony Przez:\n${message.author}`)
            .setColor(`GREEN`)
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(kickU1);
        })

        if (reason) return member.kick().then(member => {
            const kickU2 = new Discord.MessageEmbed()
            .setTitle('Kick')
            .setDescription(`Kto:\n${member.user.tag}.\n\nPowód:\n${reason}\n\n Wyrzucony Przez:\n${message.author}`)
            .setColor(`GREEN`)
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(kickU2);
        })
    }
    }
}