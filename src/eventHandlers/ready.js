'use strict';

const { Client } = require("..");
const configFile = require("../../config.json");

/**
 * 
 * @param {Client} reClient 
 */
async function handle(reClient) {
    reClient.defaultCmdPrefix = new RegExp(configFile.reCmdPrefix[0].replace("{{_id}}",
        reClient.user._id), configFile.reCmdPrefix[1]);
    console.log(reClient.user.username, "ready!");
}

module.exports = { handle }