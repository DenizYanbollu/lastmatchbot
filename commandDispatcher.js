const lastmatch = require("./commands/lastmatch")

function commandDispatcher (msg) {
    const [prefix, command] = msg.content.split(" ", 2)

    if (prefix !== "!lmb") return; // The message is not for our bot.
    if (!command || command == "") return; // Prefix is given but there's no command.

    if (command === "lastmatch") {
        lastmatch(msg)
    }
}

module.exports = commandDispatcher;