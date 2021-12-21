const DiscordJS = require('discord.js')
const client = new DiscordJS.Client({intents: ["GUILDS", "GUILD_MESSAGES"]})
require('dotenv').config()

client.commands = new DiscordJS.Collection()
client.events = new DiscordJS.Collection()

const handlers = ['command', 'event'];

handlers.forEach(handler => {
    require(`./handlers/${handler}`)(client, DiscordJS)
})

client.login(process.env.BOT_TOKEN)