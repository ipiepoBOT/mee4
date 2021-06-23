const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "userinfo",
    description: "userinfo",
    async execute(message, args, Discord, client) {
        const userTarget = message.mentions.users.first() || message.author;
        const memberTarget = message.guild.members.cache.get(userTarget.id);

        let isBot;
        if(userTarget.bot) isBot = 'tak';
        else isBot = 'nie';

        const embed = new MessageEmbed()
        .setColor('RED')
        .setAuthor(`Informacje o użytkowniku ${userTarget.tag}`, userTarget.displayAvatarURL({dynamic: true}))
        .addFields(
            {name: "Nick | tag:", value: `${userTarget.tag}`},
            {name: "ID:", value: `${userTarget.id}`},
            {name: "Czy to jest bot?:", value: isBot},
            {name: "Data dołączenia do serwera:", value: new Date(memberTarget.joinedTimestamp).toLocaleDateString() },
            {name: "Data założenia konta:", value: new Date(userTarget.createdTimestamp).toLocaleDateString() },
            {name: "Ilość posiadanych ról:", value: memberTarget.roles.cache.size }
        );
         
        message.channel.send(embed);
    }
}