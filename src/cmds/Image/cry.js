'use strict';

const { BaseCommand } = require("../../classes/Command");
const nekosBestCmds = require("../../src/nekosBestCmds");

module.exports = class CryCmd extends BaseCommand {
    constructor(client) {
        super(client, {
            name: "cry"
        });
    }

    async run(msg) {
        return nekosBestCmds(msg, "cry");
    }
}