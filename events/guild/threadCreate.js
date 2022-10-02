//The Module
module.exports = async (client, thread) => {
    try{
        if(thread.joinable && !thread.joined){
            await thread.join();
        }
    }catch (e){
        console.log(String(e).grey)
    }
}
/**
 * @INFO
 * Bot Coded by LuisMisaki#4165 | https://team.aracdes.ga/discord
 * @INFO
 * Work for Milrato Development | https://team.arcades.ga
 * @INFO
 * Please mention him / Milrato Development, when using this Code!
 * @INFO
 */
