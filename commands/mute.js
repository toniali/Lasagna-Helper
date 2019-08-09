
module.exports.run = async (message, bots, args) => {

    let user = message.guild.member(message.mentions.users.first());
    if(user){
        let member = message.guild.member.mentions;
        if(member){
            let muted = message.guild.roles.find(role => role.name == "muted")
            if(!muted){
                try{
                    muted = await message.guild.createRole({
                        name: "muted",
                        color: "6BBCF3",
                        permissions:[]
                    })
                    message.guild.channels(async (channel, id) => {
                        await channel.overwritePermissions(muted, {
                            SEND_MESSAGES: false,
                            ADD_REACTIONS: false
                        });
                    })
                } catch (e) {
                    console.log(e.stack)
                }
            }
            await(member.addRole(muted.id));
            message.channel.send(`${member} has been successfully muted!`)
        } else return message.channel.send('That use isn\'t')
    } else return message.channel.send('You didn\'t mention a user!')

}

module.exports.help = {
    name:"mute"
}