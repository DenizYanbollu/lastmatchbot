const fs = require("fs")
const Discord = require('discord.js');

const commandDispatcher = require("./commandDispatcher")

const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    commandDispatcher(msg)
});

client.login('NzAyNTk5Mzk2OTMxNjY2MDkz.XqCYrQ.YKcJ2Q7XjvjYA88cn9HI3rI19A0');

