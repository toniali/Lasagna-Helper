const Discord = require("discord.js");

module.exports.run = async(message, bots, args) => {

    const user = message.mentions.users.first();
    if(!user) return message.channel.send('You must mention a user!')
    if(!message.guild.member.hasPermission("KICK_MEMBERS")) return message.channel.send('You must have Kick Member permission or Administrator permission to use this command')
    const member = message.guild.member(user);
    if(!member) return message.channel.send('That user isn\'t in this guild!')
    member.kick('Optional reason that will display in the the audit logs')
    message.channel.send(`Successfully kicked ${user.tag}`);

}

module.exports.help = {
    name:"kick"
}