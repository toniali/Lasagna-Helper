const discord = require('discord.js')

module.exports.run = async (bots, message, args) => {

        
    if(message.member.voiceChannel) {
        if(!message.guild.voiceConnection) 
        message.member.voiceChannel.join()
        .then (connection => {
            message.channel.send(`Successfully joined the voice channel`);
            return
        })
        .catch(console.error);
    
    
        } else {message.channel.send('You must be in a voice channel to summon me!')}

}

module.exports.help = {
    name:"join"
}