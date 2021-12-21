const fs = require('fs')

module.exports = (client, DiscordJS) => {
    const loadDir = (dirs) => {
        const files = fs.readdirSync(`./events/${dirs}`).filter(file => file.endsWith('.js'))
        for(const file of files) {
            const event = require(`../events/${dirs}/${file}`)
            const name = file.split('.')[0];
            client.on(name, event.bind(null, DiscordJS, client))
        }
    }

    ['client', 'guild'].forEach(e => loadDir(e))
}