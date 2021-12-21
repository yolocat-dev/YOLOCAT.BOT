const Discord = require('discord.js');
require('dotenv').config();

module.exports = {
    name: 'ping',
    description: 'Responds pong!',
    execute(message, args){
        message.channel.send("Pong!")
    }
}