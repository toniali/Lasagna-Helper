const Discord = require('Discord.js');

module.exports.run = async (bots, message, args) => {

    message.channel.send('Works')

}

module.exports.help = {
    name:"moderation commands"
}