const profileModel = require('../../models/profileSchema')
require('dotenv').config()

module.exports = async (DiscordJS, client, message) => {
    const prefix = process.env.DEFAULT_PREFIX

    let profileData

    try {
        profileData = await profileModel.findOne({ userId: message.author.id })
    } catch(err) {
        throw err
    }

    if(!message.content.startsWith(prefix) || message.author.bot) return
    const args = message.content.slice(prefix.length).split(/ +/)
    const cmd = args.shift().toLowerCase()

    const command = client.commands.get(cmd)

    if(command) command.execute(message, args, client, DiscordJS)
}