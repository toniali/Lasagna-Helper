const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
const config = require('dotenv').config();

bot.commands = new Discord.Collection;
const tokenfile = process.env.CLIENT_TOKEN;

console.log ("tokenfile=" + tokenfile);

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Couldn't find commands");
        return;
    }

    jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
    });

});

bot.on("message", async message => {
    if(message.author.bot) return;
    let prefix = botconfig.prefix
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args)
});

// try{
//     console.log ("before login.. token=" + tokenfile.token );
    bot.login(tokenfile);
//     console.log ("after login.. ");
// } catch (err){
//     console.log ("when login.. "+ err);
// }
