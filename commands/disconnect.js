const discord = require('discord.js');

module.exports.run = async (bots, message, args) => {

    if(message.guild.voiceConnection){
        message.guild.voiceConnection.disconnect()
        message.channel.send('Successfully left the voice channel')
        .catch(console.error);
    }else {message.channel.send('You must be in a voice channel to disconnect me!')}

}

module.exports.help = {
    name:"disconnect"
}