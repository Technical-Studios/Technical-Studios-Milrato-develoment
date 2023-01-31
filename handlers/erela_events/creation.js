
require('dotenv').config();
var { Manager } = require("erela.js"),
  
    Spotify = require("erela.js-spotify"),
    Deezer = require("erela.js-deezer"),
    Facebook = require("erela.js-facebook"),
    erela = require(`${process.cwd()}/botconfig/erela.json`),
  
    clientID = process.env.clientID || erela.spotify.clientID,
    clientSecret = process.env.clientSecret || erela.spotify.clientSecret;
  module.exports = (client) => {
      if (!clientID || !clientSecret) {
        client.manager = new Manager({
          nodes: erela.clientsettings.nodes,
          /*plugins: [
            new Deezer(),
            new Facebook(),
          ],*/
          send(id, payload) {
            var guild = client.guilds.cache.get(id);
            if (guild) guild.shard.send(payload);
          },
        });
      } else {
        client.manager = new Manager({
          nodes: erela.clientsettings.nodes,
          /*plugins: [
            new Spotify({
              clientID, //get a clientid from there: https://developer.spotify.com/dashboard
              clientSecret
            }),
            new Deezer(),
            new Facebook(),
          ],*/
          send(id, payload) {
            var guild = client.guilds.cache.get(id);
            if (guild) guild.shard.send(payload);
          },
        });
      }
      //require the other events
      require("./node_events")(client)
      require("./client_events")(client)
      require("./events")(client)
      require("./musicsystem")(client)
      
  };
  /**
   * @INFO
   * Bot Coded by Truchorko#5566 | https://github?.com/Truchorko5566/discord-js-lavalink-Music-Bot-erela-js
   * @INFO
   * Work for Team Arcades | https://team.arcades.ga
   * @INFO
   * Please mention Him / Team Arcades, when using this Code!
   * @INFO
   */
  
