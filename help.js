const Discord = require('discord.js');
// let botconfig =  require('..\ botconfig.js')
// let prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {

    let help = new Discord.RichEmbed()
    .setTitle("Help")
    .setColor('RANDOM')
    .setDescription('Hello \n This bot was made by ༺.Legends.༻™ #3631 \n to see the commands type $$commands');
   // .addField('Hello');// welcome to Lasagna Helper! ')
    //
    
    return message.channel.send(help)
}

module.exports.help = {
    name:"help"
}