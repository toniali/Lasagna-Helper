const Discord = require("discord.js");
let fs = require("fs");
let ms = require("ms")
let warns = JSON.parse(fs.readFileSync("./commands/warnings.json", "utf8"));

module.exports.run = async (bots, message, args) => {

    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.member.get(args[0]);
    if(message.member.hasPermission("MANAGE_MESSAGES" || "ADMINISTRATOR")){
        if(!wUser){
            return message.channel.send('Couldn\'t find the user');
        }
        let reason = args.join(" ").slice(22);
        if(!warns[wUser.id]) warns[wUser.id] = {
            warns:0
        };
        warns [wUser.id].warns++;
        fs.writeFile("./commands/warnings.json", JSON.stringify(warns), (err) => {
            if(err){
                console.log(err);
            }
            return message.channel.send(`Successfully warned ${wUser}`)
        })
    } else return message.channel.send('You need manage messages to use this command!')

}

module.exports.help = {
    name:"warn"
}