﻿
/**********************************************************
 * @INFO [TABLA DE CONTENIDOS]
  * 1 Import_Modules
    * 1.1 Script de validación para publicidad
  * 2 CREAR EL CLIENTE DE DISCORD BOT
  * 3 Cargar botones de discord y menús de discord
  * 4 Crear el client.memer
  * 5 crear los objetos de idiomas
  * 6 Elevar el máximo de oyentes
  * 7 Definir los Anuncios del Cliente
  * 8 CARGAR las funciones BOT
  * 9 Iniciar sesión en el Bot
 * 
 *   BOT CODED BY: Truchorko5566 | https://teamarcades.xyz
 *********************************************************/



/**********************************************************
 * @param {1} Import_Modules for this FIle
 **********************************************************/
const Discord = require("discord.js");
const colors = require("colors");
const enmap = require("enmap");
const fs = require("fs");
const OS = require('os');
const Events = require("events");
const emojis = require("./botconfig/emojis.json")
const config = require("./botconfig/config.json")
const advertisement = require("./botconfig/advertisement.json")
const { delay } = require("./handlers/functions")
require('dotenv').config()


/**********************************************************
 * @param {2} CREATE_THE_DISCORD_BOT_CLIENT with some default settings
 *********************************************************/
const client = new Discord.Client({
  fetchAllMembers: false,
  restTimeOffset: 0,
  failIfNotExists: false,
  shards: "auto",
  allowedMentions: {
    parse: ["roles", "users"],
    repliedUser: false,
  },
  partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'GUILD_MEMBER', 'USER'],
  intents: [
        "GUILDS",
        "GUILD_MEMBERS",
        "GUILD_BANS",
        "GUILD_EMOJIS_AND_STICKERS",
        "GUILD_INTEGRATIONS",
        "GUILD_WEBHOOKS",
        "GUILD_INVITES",
        "GUILD_VOICE_STATES",
        "GUILD_VOICE_STATES",
        "GUILD_PRESENCES",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "DIRECT_MESSAGES",
        "DIRECT_MESSAGE_REACTIONS"
  ],
  presence: {
    activities: [{ name: `${config.status.text}`.replace("{prefix}", config.prefix), type: config.status.type, url: config.status.url }],
    status: "online"
  }
});



/**********************************************************
 * @param {4} Create_the_client.memer property from luismisaki's Api 
 *********************************************************/
const Meme = require("memer-api");
client.memer = new Meme(process.env.memer_api || config.memer_api); // GET a TOKEN HERE: https://discord.gg/Mc2FudJkgP





/**********************************************************
 * @param {5} create_the_languages_objects to select via CODE
 *********************************************************/
client.la = {}
var langs = fs.readdirSync("./languages")
for (const lang of langs.filter(file => file.endsWith(".json"))) {
  client.la[`${lang.split(".json").join("")}`] = require(`./languages/${lang}`)
}
Object.freeze(client.la)
//function "handlemsg(txt, options? = {})" is in /handlers/functions 




/**********************************************************
 * @param {6} Raise_the_Max_Listeners to 0 (default 10)
 *********************************************************/
client.setMaxListeners(0);
Events.defaultMaxListeners = 0;
process.env.UV_THREADPOOL_SIZE = OS.cpus().length;


/**********************************************************
 * @param {7} Define_the_Client_Advertisments from the Config File
 *********************************************************/
client.ad = {
  enabled: advertisement.adenabled,
  statusad: advertisement.statusad,
  spacedot: advertisement.spacedot,
  textad: advertisement.textad
}



/**********************************************************
 * @param {8} LOAD_the_BOT_Functions 
 *********************************************************/
//those are must haves, they load the dbs, events and commands and important other stuff
function requirehandlers() {
  ["extraevents", "clientvariables", "command", "loaddb", "events", "erelahandler", "slashCommands"].forEach(handler => {
    try { require(`./handlers/${handler}`)(client); } catch (e) { console.log(e.stack ? String(e.stack).grey : String(e).grey) }
  });
  ["twitterfeed", /*"twitterfeed2",*/ "livelog", "youtube", "tiktok"].forEach(handler => {
    try { require(`./social_log/${handler}`)(client); } catch (e) { console.log(e.stack ? String(e.stack).grey : String(e).grey) }
  });
  ["logger", "anti_nuke", "antidiscord", "antilinks", "anticaps", "antispam", "blacklist", "keyword", "antimention", "autobackup",

    "apply", "ticket", "ticketevent",
    "roster", "joinvc", "epicgamesverification", "boostlog",

    "welcome", "leave", "ghost_ping_detector", "antiselfbot",

    "jointocreate", "reactionrole", "ranking", "timedmessages",

    "membercount", "autoembed", "suggest", "validcode", "dailyfact", "autonsfw",
    "aichat", "mute", "automeme", "counter"].forEach(handler => {
      try { require(`./handlers/${handler}`)(client); } catch (e) { console.log(e.stack ? String(e.stack).grey : String(e).grey) }
    });
} requirehandlers();


/**********************************************************
 * @param {9} Login_to_the_Bot
 *********************************************************/
client.login(process.env.token || config.token);


/**********************************************************
 * @INFO
 * Bot Coded by Truchorko_ | https://discord.gg/team-arcades-935157109761388554
 * @INFO
 * Work for Milrato Development | https://teamarcades.xyz
 * @INFO
 * Please mention him / Milrato Development, when using this Code!
 * @INFO
 *********************************************************/

client.on("ready", () => {
  require("./dashboard/index.js")(client);
})
