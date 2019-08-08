const Discord = require("discord.js");

module.exports.run = async (bot, messages, args) => {
    console.log('Works')
    messages.channel.send('Working')
}

module.exports.help = {
    name: "testing"
}
