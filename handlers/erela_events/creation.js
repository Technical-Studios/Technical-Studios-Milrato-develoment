var {
  Manager
} = require("erela.js");
var { Permissions } = require("discord.js");
var Spotify = require("erela.js-spotify");
var AppleMusic = require("erela.js-apple");
var Deezer = require("erela.js-deezer");
var Facebook = require("erela.js-facebook");
var config = require(`../../botconfig/erela.json`);

clientID = config.spotify.clientID,
clientSecret = config.spotify.clientSecret;
module.exports = (client) => {
      if (!clientID || !clientSecret) {
        client.manager = new Manager({
          nodes: config.clientsettings.nodes,
          /*plugins: [
            new Deezer(),
            new Facebook(),
            new AppleMusic(),
          ],*/
          send(id, payload) {
            var guild = client.guilds.cache.get(id);
            if (guild) guild.shard.send(payload);
          },
        });
      } else {
        client.manager = new Manager({
          nodes: config.clientsettings.nodes,
         /* plugins: [
            new Spotify({
              clientID, //get a clientid from there: https://developer.spotify.com/dashboard
              clientSecret
            }),
            new Deezer(),
            new Facebook(),
            new AppleMusic(),
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

  
  function collect(node) {
    return node.map(x => {
        
      if (!x.host) throw new RangeError('"host" must be provided');
      if (!x.password) throw new RangeError('"password" must be provided');
      if (typeof x.port !== 'number') throw new RangeError('"port" must be a number');
      if (x.retryAmount && typeof x.retryAmount !== 'number') throw new RangeError('Retry amount must be a number');
      if (x.retryDelay && typeof x.retryDelay !== 'number') throw new RangeError('Retry delay must be a number');
      if (x.secure && typeof x.secure !== 'boolean') throw new RangeError('Secure must be a boolean');

      return {
          host: x.host,
          password: x.password ? x.password : 'youshallnotpass',
          port: x.port && !isNaN(x.port) ? Number(x.port) : 2333,
          identifier: x.identifier || x.host,
          retryAmount: x.retryAmount ? Number(x.retryAmount) : 5,
          retryDelay: x.retryDelay ? Number(x.retryDelay) : 5000,
          secure: x.secure ? x.secure : false
      };
    });
}