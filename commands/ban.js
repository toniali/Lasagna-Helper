const Discord = require('discord.js');

module.exports.run = async (bots, message, args) => {

    const user = message.mentions.user.first();
    if(!user) return message.channel.send('You didn\'t mention a user!');
    if(!message.guild.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You need the ban member permission!');
    const member = message.guild.member(user);
    if(!member) return message.channel.send('This user isn\'t in the guild!');
    member.ban('Optional reason that will display in the the audit logs')
    return message.channel.send(`Successfully banned ${user.tag}`);

}

module.exports.help = {
    name:"ban"
}