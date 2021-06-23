const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'clear',
    description: 'clear',
    execute(message, args) {
        const clearPermisje = new Discord.MessageEmbed()
        .setTitle('Błąd')
        .setDescription(`${message.author} Nie posiadasz permisji do użycia tej komendy!\n\nWymagane Permisje: **Zarządzanie Wiadomościami**!`)
        .setColor(`RED`)
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
    
        const clearWiado = new Discord.MessageEmbed()
        .setTitle('Błąd')
        .setDescription(`${message.author} Nie napisałeś liczby wiadomości do usunięcia!`)
        .setColor(`RED`)
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))

        const clearWiado2 = new Discord.MessageEmbed()
        .setTitle('Błąd')
        .setDescription(`${message.author} Maksymalnie możesz usunąć 100 wiadomości!`)
        .setColor(`RED`)
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))

        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(clearPermisje).then(msg => {
        })

        if(args[0] > 100) return message.channel.send(clearWiado2)

        const number = args.join(" ")
        if(!number) return message.channel.send(clearWiado).then(msg => {
        })
        message.channel.bulkDelete(number).catch(console.error)
    
        const clearUdane = new Discord.MessageEmbed()
        .setTitle('Clear')
        .setDescription(`Usunięto ${number} wiadomości!\n Komenda wykonana przez administratora: ${message.author}`)
        .setColor(`GREEN`)
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
       message.channel.send(clearUdane)
    }   
}