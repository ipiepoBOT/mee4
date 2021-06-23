module.exports = {
    name: "rr",
    description: "stwórz reaction role!",
    execute(message, args, Discord, client) {

        if(!message.member.hasPermission(`MANAGE_ROLES`)) return message.channel.send(new Discord.MessageEmbed().setColor(`#FF0000`).setTitle(`Błąd`).setDescription(`Nieposiadasz Permisji do wykonania komendy!`));


        if(!args[0] || !args[1] || !args[2] === null) {
            message.channel.send( new Discord.MessageEmbed().setColor(`#FF0000`).setTitle(`Błąd!`).setDescription(` Nie podałeś wszystkich arguentów!\n\n&rr ID WIADOMOSCI EMOTKA ID ROLI np.\n&rr 855705382327156736 :white_check_mark: 836251188776403017`).setFooter(`pamiętaj wiadomość oraz role oznaczmy po ich ID!`));
            return;
        }
 
        message.delete();
 
        let rolaZaReakcje = message.guild.roles.cache.get(args[2]);
 
        message.channel.messages.fetch(args[0]).then(message => message.react(args[1]));
 
        let emojiToReact = args[1];
 
        client.on(`messageReactionAdd`, async (reaction, user) =>{
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if(reaction.emoji.name === emojiToReact) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(rolaZaReakcje);
            } else {
                return;
            }
        })
 
        client.on(`messageReactionRemove`, async (reaction, user) =>{
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if(reaction.emoji.name === emojiToReact) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(rolaZaReakcje);
            } else{
                return;
            }
        })
    }
}