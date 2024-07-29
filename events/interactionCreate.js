const config = require("../config.js");
const { InteractionType } = require('discord.js');
const fs = require("fs");

module.exports = async (client, interaction) => {
  try {
    if (!interaction?.guild) {
      return interaction?.reply({ content: "This command can only be used in a server.", ephemeral: true });
    } else {
      function cmd_loader() {
        if (interaction?.type === InteractionType.ApplicationCommand) {
          fs.readdir(config.commandsDir, (err, files) => {
            if (err) throw err;
            files.forEach(async (f) => {
              let props = require(`.${config.commandsDir}/${f}`);
              if (interaction.commandName === props.name) {
                try {
                  if (interaction?.member?.permissions?.has(props?.permissions || "0x0000000000000800")) {
                    return props.run(client, interaction);
                  } else {
                    return interaction?.reply({ content: `You don't have permission to use this command.`, ephemeral: true });
                  }
                } catch (e) {
                  return interaction?.reply({ content: `❌ Error: ${e.message}`, ephemeral: true });
                }
              }
            });
          });
        }
      }

      cmd_loader();
    }
  } catch (e) {
    console.error(e);
  }
}

