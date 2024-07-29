const config = require("../config.js");
const { ActivityType } = require("discord.js");

module.exports = async (client) => {
    const { REST } = require("@discordjs/rest");
    const { Routes } = require("discord-api-types/v10");
    const rest = new REST({ version: "10" }).setToken(config.TOKEN || process.env.TOKEN);

    (async () => {
        try {
            await rest.put(Routes.applicationCommands(client.user.id), {
                body: await client.commands,
            });
            console.log('\x1b[36m%s\x1b[0m', '|    🚀 Commands Loaded successfully!');
        } catch (err) {
            console.log('\x1b[36m%s\x1b[0m', '|    ❌ Commands Failed To Load!');
        }
    })();

    console.log('\x1b[32m%s\x1b[0m', `|    🌼 Logged in as ${client.user.username}`);

    const activityType = ActivityType[config.activityType.charAt(0).toUpperCase() + config.activityType.slice(1).toLowerCase()];
    if (!activityType) {
        console.error(`Invalid activity type: ${config.activityType}`);
        return;
    }
    
    setInterval(() => client.user.setActivity({ 
        name: config.activityName, 
        type: activityType 
    }), 10000);

    client.errorLog = config.errorLog;
};

