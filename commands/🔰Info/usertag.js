const Discord = require("discord.js");
const {MessageEmbed} = require("discord.js");
const config = require(`${process.cwd()}/botconfig/config.json`);
var ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const { GetUser, GetGlobalUser } = require(`${process.cwd()}/handlers/functions`)
module.exports = {
  name: "usertag",
  aliases: ["utag"],
  category: "🔰Info",
  description: "Get the TAG of a USER | for mobile copy paste abilities",
  usage: "usertag [@USER] [global/guild]",
  type: "usertag",
  run: async (client, message, args, cmduser, text, prefix) => {
    let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
    try {   
      var user;
      if(args[0]){
        try{
          if(args[1] && args[1].toLowerCase() == "global"){
            args.pop()
            user = await GetGlobalUser(message, args)
          }else {
            user = await GetUser(message, args)
          }
        }catch (e){
          console.log(e.stack ? String(e.stack).grey : String(e).grey)
          return message.reply(client.la[ls].common.usernotfound)
        }
      }else{
        user = message.author;
      }
      return message.reply(`${user.tag}`);
    } catch (e) {
      console.log(String(e.stack).grey.bgRed)
      return message.reply({embeds: [new MessageEmbed()
        .setColor(es.wrongcolor)
        .setFooter(client.getFooter(es))
        .setTitle(client.la[ls].common.erroroccur)
        .setDescription(eval(client.la[ls]["cmds"]["info"]["color"]["variable2"]))
      ]});
    }
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
