const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({ checkUpdate: false });

client.on('ready', () => {

    const guildId = ''; // id do server
    const targetChannelId = ''; // id do canal onde vai jogar os membros

    const guild = client.guilds.cache.get(guildId);

    const targetChannel = guild.channels.cache.get(targetChannelId);

    guild.channels.cache
        .filter(channel => channel.type === 'GUILD_VOICE' && channel.id !== targetChannelId)
        .forEach(channel => {
            channel.members.forEach(member => {
                member.voice.setChannel(targetChannel).catch(err => {
                    console.error(`Erro ao mover ${member.user.tag}:`, err);
                });
            });
        });
});

client.login(""); // token
