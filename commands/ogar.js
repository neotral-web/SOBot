exports.run = (client, message, params) => {
  var ogar = new Array();
  ogar[0] = 'https://cdn.discordapp.com/attachments/422082830085128233/459828007113195530/ogar_1.png';
  ogar[1] = 'https://cdn.discordapp.com/attachments/422082830085128233/459694325979283468/ogar.png';
  ogar[2] = 'https://cdn.discordapp.com/attachments/422082830085128233/456126905746456597/tele.png';
  ogar[3] = 'https://cdn.discordapp.com/attachments/422082830085128233/460823813899288577/karabin_2.png'
  ogar[4] = 'https://cdn.discordapp.com/attachments/461251813178343449/461622452301332490/zartysieskonczyly.png'

  message.channel.send(ogar[Math.floor(Math.random()*ogar.length)]);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ogar",
  description: "Wysyła zdjęcie z pingwinem sierżantem, żeby ten ogarnął wszystkich",
  usage: "ogar"
};
