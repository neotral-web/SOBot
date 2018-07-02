const Discord = require('discord.js');
const coins = require('../coins.json');
const config = require('../config.json');

exports.run = async (client, message, params) => {
  if(!coins[message.author.id]) {
    coins[message.author.id] = {
      coins: 100
    };
  }

  let uCoins = coins[message.author.id].coins;
  message.channel.send(`W tej chwili masz ${uCoins} <:gwiazdka:424229903664414720>`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['stars'],
  permLevel: 0
};

exports.help = {
  name: "gwiazdki",
  description: "Wyświetla liczbę posiadanych gwiazdek.",
  usage: "gwiazdki"
};
