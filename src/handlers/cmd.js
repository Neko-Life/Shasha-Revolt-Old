'use strict';

const { isArray } = require("lodash");

async function handle(msg, matchPref) {
    msg.args = msg.content.slice(matchPref.length).trim().split(/ +/);
    msg.commandAlias = msg.args.shift().toLowerCase();
    msg.command = msg.client.commands[msg.commandAlias];
    if (!msg.command)
        for (const C in msg.client.commands) {
            if (!msg.client.commands[C].aliases?.includes(msg.commandAlias)) continue;
            msg.command = msg.client.commands[C];
            break;
        }
    if (!msg.command) return console.log("No command:", msg.commandAlias, msg.channel);
    msg.isCommand = true;
    msg.commandPrefix = matchPref;
    let replies = msg.command.run(
        msg, msg.content.slice(
            (msg.commandAlias + msg.commandPrefix)
                .length
        ).trim()
    );
    if (msg.commandReplies?.length)
        for (const U of msg.commandReplies) {
            if (!U) continue;
            if (U instanceof Promise) await U;
            await U.delete?.().catch(() => { });
        }
    msg.commandReplies = [];
    if (!isArray(replies)) msg.commandReplies.push(await replies);
    else for (const U of replies) msg.commandReplies.push(await U);
}

module.exports = { handle }