const { EmbedBuilder } = require('discord.js');
const config = require("../config.js");

module.exports = {
  name: "help",
  description: "Get information about the bot",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {
      const botName = client.user.username; 

      const helpDescription = `
\`\`\`css
Welcome to ${botName}!

Your ultimate music companion on Discord. Here are the available commands:

[ /play    ] - Start playing the songs.
[ /pause   ] - Pause the current song.
[ /resume  ] - Resume the current song.
[ /lyrics  ] - Displays the lyrics of a song.
[ /skip    ] - Skip the current song.
[ /stop    ] - Destroys the music player.
[ /np      ] - Shows now playing song.
[ /volume  ] - Sets the volume of the player.
[ /ping    ] - Check bot latency.
[ /support ] - Shows support server info.
[ /help    ] - Display this help menu.
\`\`\`
      `;

      const embed = new EmbedBuilder()
        .setColor(config.embedColor)
        .setTitle(`${botName} Help`)
        .setThumbnail(client.user.displayAvatarURL()) 
        .setDescription(helpDescription)
        .setFooter({ text: `Prime Music v1.0`, iconURL: client.user.displayAvatarURL() }) 
      

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
      console.error(e);
    }
  },
};
