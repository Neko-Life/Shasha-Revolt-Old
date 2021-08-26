'use strict';

function handle(msg) {
    if (!msg.content) return;
    const rePrefix = msg.client.defaultCmdPrefix;
    if (rePrefix && !msg.author.bot) {
        const matchPref = msg.content.match(rePrefix)?.[0];
        if (matchPref) {
            msg.client.handlers["cmd"].handle(msg, matchPref);
        }
    }
}

module.exports = { handle }