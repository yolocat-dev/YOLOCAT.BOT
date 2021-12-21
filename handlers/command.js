const fs = require('fs')

module.exports = (client, DiscordJS) => {
    const files = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
    for(const file of files) {
        const command = require(`../commands/${file}`);
        if(command.name) {
            client.commands.set(command.name, command);
        } else {
            continue;
        }
    }
}