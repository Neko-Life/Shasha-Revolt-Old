'use strict';

const { Client } = require("..");

/**
 * 
 * @param {Client} reClient 
 * @param {import("revolt-api/types/Channels").Message} msg 
 * @returns 
 */
async function handle(reClient, msg) {
    console.log(msg, msg.content);
    msg.client.handlers["checkIfCmd"].handle(msg);
}

module.exports = { handle }