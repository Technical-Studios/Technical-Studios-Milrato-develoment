//Here the command starts
const config = require(`${process.cwd()}/botconfig/config.json`)
var ee = require(`${process.cwd()}/botconfig/embed.json`)
module.exports = {
	//definition
	name: "registerall", //the name of the command 
	category: "📈Ranking", //the category this will be listed at, for the help cmd
	aliases: [""], //every parameter can be an alias
	cooldown: 4, //this will set it to a 4 second cooldown
	usage: "registerall", //this is for the help command for EACH cmd
  	description: "Register everyone in the Server to the Database", //the description of the command
	type: "manage",
	//running the command with the parameters: client, message, args, user, text, prefix
    run: async (client, message, args, cmduser, text, prefix) => {
    

	}
}
//-CODED-BY-Truchorko_-//