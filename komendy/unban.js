const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'unban',
    description: 'unban',
    execute(message, args) {
        const unbanPermisje = new Discord.MessageEmbed()
        .setDescription(`${message.author} Nie masz permisji!\n\nWymagane Permisje: **Banowanie Członków**!`)
        .setTitle('Błąd!')
        .setColor('RED')
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))

        const unbanNie = new Discord.MessageEmbed()
        .setDescription(`${message.author} Nie możesz odbanować tej osoby!`)
        .setColor('RED')
        .setTitle('Błąd!')
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(unbanPermisje)
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(unbanNie)

        let reason = args.slice(1).join(" ")
        let id = args[0]

        const unbanOznacz = new Discord.MessageEmbed()
        .setDescription(`${message.author} Musisz wpisać ID osoby którą chcesz odbanować!`)
        .setColor('RED')
        .setTitle('Błąd!')
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))

        if(!reason) reason = "Nie podano powodu"
        if(!args[0]) return message.reply(unbanOznacz)

        if(isNaN(args[0])) return message.reply(unbanOznacz)

        message.guild.fetchBans().then(async bans =>{
            const unbanNiema = new Discord.MessageEmbed()
            .setDescription(`${message.author} Nie ma banów na tym serwerze!`)
            .setColor('RED')
            .setTitle('Błąd!')
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            if(bans.size === 0) return message.reply(unbanNiema)
            let bannedUser = bans.find(b => b.user.id == id)
            const unbanNiejest = new Discord.MessageEmbed()
            .setDescription(`${message.author} Ta osoba nie ma bana na tym serwerze!`)
            .setColor('RED')
            .setTitle('Błąd!')
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            if(!bannedUser) return message.reply(unbanNiejest)
            await message.guild.members.unban(bannedUser.user, reason).catch(err =>{
                console.log(err)
                const unbanUdane = new Discord.MessageEmbed()
                .setDescription(`${message.author} Odbanowano!\n Przez administratora ${message.author}`)
                .setColor('GREEN')
                .setTitle('UnBan!')
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                return message.channel.send(unbanUdane)
            }).then(() => {
                const unbanUdaneD = new Discord.MessageEmbed()
                .setDescription(`${message.author} Odbanowano ${args[0]}!\n Przez administratora ${message.author}`)
                .setColor('GREEN')
                .setTitle('UnBan!')
                message.channel.send(unbanUdaneD)
            })
        })
    }
}