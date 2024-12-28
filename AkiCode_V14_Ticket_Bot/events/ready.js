const { ActivityType } = require('discord.js');

module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`${client.user.tag} olarak giriş yapıldı!`);
        client.user.setPresence({
            activities: [{ name: 'EasyBoxTR', type: ActivityType.Playing, url: 'EasyBoxTR' }],
            status: 'online',
        });
    },
};
