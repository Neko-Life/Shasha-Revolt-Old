'use strict';

const { Client } = require("../Client");
const configFile = require("../../config.json");

/**
 * 
 * @param {Client} reClient 
 * @param {Error} e 
 */
async function errLog(reClient, e) {
    if (!configFile.errLogChannel) return console.error("[errLog] Log channel not configured. ERROR:", e);
    const log = await reClient.channels.fetch(configFile.errLogChannel).catch(() => { });
    if (!log) console.error("[errLog] Log channel not found. ERROR:", e);
    console.error(e);
    return log.sendMessage("```js\n" + e.stack + "\n```");
}

module.exports = { errLog }