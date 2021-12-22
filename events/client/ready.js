module.exports = async (DiscordJS, client) => {
    console.log("Bot is online!")

    const guildId = '919672035003736074'
    const commands = await client.api.applications(client.user.id).commands.get()
    console.log(commands)
}