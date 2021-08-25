'use strict';

const { BaseCommand } = require("../../classes/Command");
const nekosBestCmds = require("../../src/nekosBestCmds");

module.exports = class BakaCmd extends BaseCommand {
    constructor(client) {
        super(client, {
            name: "baka"
        });
    }

    async run(msg) {
        return nekosBestCmds(msg, "baka");
    }
}