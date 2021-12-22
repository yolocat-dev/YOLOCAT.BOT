const profileModel = require('../../models/profileSchema')

module.exports = async (DiscordJS, client, member) => {
    let profile = await profileModel.create({
        userId: member.id,
        serverId: member.guild.id,
        coins: 0,
        bank: 0
    })

    profile.save()
}