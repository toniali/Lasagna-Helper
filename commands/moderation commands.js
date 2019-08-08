const Discord = require('discord.js');

module.exports.run = async (bots, message, args) => {

    message.channel.send('Works')

}

module.exports.help = {
    name:"moderation commands"
}