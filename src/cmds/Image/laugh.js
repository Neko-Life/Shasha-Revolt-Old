'use strict';

const { BaseCommand } = require("../../classes/Command");
const nekosBestCmds = require("../../src/nekosBestCmds");

module.exports = class LaughCmd extends BaseCommand {
    constructor(client) {
        super(client, {
            name: "laugh"
        });
    }

    async run(msg) {
        return nekosBestCmds(msg, "laugh");
    }
}