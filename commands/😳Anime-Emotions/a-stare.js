const Discord = require("discord.js");
const {MessageEmbed, MessageAttachment} = require("discord.js");
const config = require(`${process.cwd()}/botconfig/config.json`);
const canvacord = require("canvacord");
var ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const anime = require('anime-actions');
module.exports = {
  name: "a-stare",
  aliases: ["astare", "animestare", "anime-stare"],
  category: "😳Anime-Emotions",
  description: "Shows an Emotion-Expression in an Anime style",
  usage: "a-stare",
  type: "mention",
  run: async (client, message, args, cmduser, text, prefix) => {
    
    let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
    if(!client.settings.get(message.guild.id, "ANIME")){
        return message.reply({embeds : [new MessageEmbed()
        .setColor(es.wrongcolor).setFooter(client.getFooter(es))
        .setTitle(client.la[ls].common.disabled.title)
        .setDescription(require(`${process.cwd()}/handlers/functions`).handlemsg(client.la[ls].common.disabled.description, {prefix: prefix}))
        ]});
    }
    //send new Message
    message.reply({embeds : [
        new MessageEmbed()
        .setColor(es.color)
        .setImage(await anime.stare())
        .setAuthor(`${message.author.username} stares${message.mentions.users.first() ? " at " + message.mentions.users.first().username : " at nothing.."}`, message.author.displayAvatarURL({ dynamic: true }))
    ]}).catch(() => {})
      
  }
}
/**
 * @INFO
 * Bot Coded by Truchorko_ | https://discord.gg/team-arcades-935157109761388554
 * @INFO
 * Work for Milrato Development | https://teamarcades.xyz
 * @INFO
 * Please mention him / Milrato Development, when using this Code!
 * @INFO
 */
