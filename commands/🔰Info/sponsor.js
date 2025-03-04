const {MessageEmbed} =require("discord.js")
const config = require(`${process.cwd()}/botconfig/config.json`)
var ee = require(`${process.cwd()}/botconfig/embed.json`)
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const { swap_pages2	 } = require(`${process.cwd()}/handlers/functions`);
module.exports = {
	name: "sponsor",
	category: "🔰Info",
	aliases: ["sponsors"],
	description: "Shows the sponsor of this BoT",
	usage: "sponsor",
	type: "bot",
	run: async (client, message, args, cmduser, text, prefix) => {
		let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
		
	try{
			let embed1 = new MessageEmbed()
		    .setColor(es.color)
		    .setTitle(eval(client.la[ls]["cmds"]["info"]["sponsor"]["variable1"]))
		    .setURL("http://bero-host.de/?utm_source=bot&utm_medium=cpc&utm_id=milrato")
		    .setDescription(`
Third Sponsor of This Bot is:
**BERO-HOST** THE BEST HOSTER
📌 BERO-HOST.de is sponsoring them with some free / cheaper Hosting Methods,
📌 Thanks to them, we are able to host our Website, Bots and GAME SERVERS
📌 Our suggestion is, if you want to host Bots / Games / Websites, then go to [BERO-HOST.de](http://bero-host.de/?utm_source=bot&utm_medium=cpc&utm_id=milrato)

**What they are offering:**
📌 **>>** Minecraft Hosting, CounterStrike: Global Offensive, Garry's Mod, ARK, ARMA 3, ...
📌 **>>** Cheap and fast Domains
📌 **>>** WEBHOSTING
📌 **>>** TEAMSPEAK SERVERS
📌 **>>** Linux & Windows Root Servers

[**Discord Server:**](https://discord.bero-host.de)
[**Website:**](http://bero-host.de/?utm_source=bot&utm_medium=cpc&utm_id=milrato)
[**__SPONSOR LINK!__**](https://teamarcades.xyz/img/paysafecard.png)
`)
		    .setImage("https://cdn.bero-host.de/img/logo/bero_white.png")
		    .setFooter("BERO-HOST",  "https://imgur.com/jXyDEyb?.png")
		
		let embed2 = new MessageEmbed()
			.setColor(es.color)
			.setTimestamp()
			.setFooter("Bittmax.de | Code  'x10' == -5%",  'https://imgur.com/UZo3emk.png')
			.setImage("https://cdn.discordapp.com/attachments/807985610265460766/822982640000172062/asdasdasdasdasd.png")
			.setTitle(eval(client.la[ls]["cmds"]["info"]["sponsor"]["variable4"]))
			.setURL("https://bittmax.de")
			.setDescription(`
📌 Bittmax is providing us, like BERO-HOST with free Discord Bot-Hosting technologies

📌 If you use the code: **\`x10\`** their, then you'll get at least 5% off everything!

📌 Check out their [Website](https://bittmax.de) and their [Discord](https://discord.gg/GgjJZCyYKD) to get your own Bot too!`);
			swap_pages2(client, message, [embed1, embed2])
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
