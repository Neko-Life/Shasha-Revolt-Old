'use strict';

const { BaseCommand } = require("../../classes/Command");
const nekosBestCmds = require("../../src/nekosBestCmds");

module.exports = class WaveCmd extends BaseCommand {
    constructor(client) {
        super(client, {
            name: "wave"
        });
    }

    async run(msg) {
        return nekosBestCmds(msg, "wave", "waving");
    }
}