const discord = require('discord.js');

module.exports.run = async (bots, message, args) => {

    const search = require('yt-search');               
    search(args.join(' '), async function(err, res)  {
         if(err) return message.channel.send('Sorry, something went wrong');
         let videos = res.videos.slice(0, 10);
         let resp = '';
         for (var i in videos){
             resp += `**[${parseInt(i)+1}]:**\`${videos[i].title}\`\n`;}
             resp += `\n**Choose a number between \`1-${videos.length}\``;
             message.channel.send(resp);
             const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > 0;
             const collector = message.nel.createMessageCollector(filter);
             collector.videos = videos;
             collector.once('collect', function(m) {
           //let connection = message.member.voiceConnection();
           // runs play command, passing in the url as args[0]
           // we aren't sepcifiying the commands folder since we are already there with search.js
            // let commandFile = require(`./Individual Commands/Play.js`);
            // commandFile.run(client, message, [this.videos[parseInt(m.content)-1].url]);
             let url = collector.videos[i].url;
            //let info = YTDL.getInfo(collector.received.url);
             //              connection = message.member.voiceChannel.join();
                           
             //              dispatcher = connection.playStream(YTDL(url, {filter: "audioonly"}));
   
                           const streamOptions = { seek: 0, volume: 1 };
                           var voiceChannel = message.member.voiceChannel;
                                   voiceChannel.join().then(connection => {
                                     //   console.log("joined channel");
                                       const stream = YTDL('https://www.youtube.com' + url, { filter : 'audioonly' });
                                       const dispatcher = connection.playStream(stream, streamOptions);
                                       dispatcher.on("end", end => {
                                         //   console.log("left channel");
                                           voiceChannel.leave();
                                       });
                                   }).catch(err => console.log(err));
   
   
   
   
                            message.channel.send(`Now playing: ` + collector.videos[i].title);
   
             });
             });

}

module.exports.help = {
    name:"search"
}