const DiscordJS = require('discord.js')
const client = new DiscordJS.Client({intents: ["DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGE_TYPING", "GUILDS", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INTEGRATIONS", "GUILD_INVITES", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_MESSAGE_TYPING", "GUILD_PRESENCES", "GUILD_VOICE_STATES", "GUILD_WEBHOOKS"]})
const mongoose = require('mongoose')
require('dotenv').config()

client.commands = new DiscordJS.Collection()
client.events = new DiscordJS.Collection()

const handlers = ['command', 'event'];

handlers.forEach(handler => {
    require(`./handlers/${handler}`)(client, DiscordJS)
})

mongoose.connect(process.env.MONGOOSE_URL).then(() => {
    console.log("Connected to the database.")
}).catch((err) => {
    throw err;
})

client.login(process.env.BOT_TOKEN)