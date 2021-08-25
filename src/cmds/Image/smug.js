'use strict';

const { BaseCommand } = require("../../classes/Command");
const nekosBestCmds = require("../../src/nekosBestCmds");

module.exports = class SmugCmd extends BaseCommand {
    constructor(client) {
        super(client, {
            name: "smug"
        });
    }

    async run(msg) {
        return nekosBestCmds(msg, "smug");
    }
}