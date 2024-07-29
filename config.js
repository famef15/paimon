module.exports = {
  TOKEN: "",
  ownerID: ["1008513350013038612", ""], 
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#e6ff2a",
  musicardTheme:"themes16", //Goes from themes1 to themes19
  activityName: "🧬 /help ║ V1.0", // This is bot status Write Anything here 
  activityType: "WATCHING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/uGk8QcZMRs",
  CheckmarkIcon: "https://cdn.discordapp.com/attachments/1122876346117398608/1267116701321920573/3983_My_best_verified.gif?ex=66a79de3&is=66a64c63&hm=3778314b9073c0b9d0f3abf369bfc9ad67fc54ac7c7fa851a88d9c80881aaf86&",
  MusicIcon:"https://cdn.discordapp.com/attachments/1122876346117398608/1267117156147920999/song-musicdis.gif?ex=66a79e4f&is=66a64ccf&hm=5a069628f35e9962f13974e48bc4f489cc913550b817dbb76cefda7a9ada8826&",
  embedTimeout: 5,  // Timeout before the button interaction embeds are deleted ( Default - 5 seconds)
  errorLog: "", 

   // Lavalink Server Details

  nodes: [
    {
        name: "banana man",
        host: "lava-v3.ajieblogs.eu.org",
        port: 80,
        password: "https://dsc.gg/ajidevserver",
        reconnectTimeout: 5000,
        reconnectTries: Infinity,
        secure: false
    },
 ]
}
