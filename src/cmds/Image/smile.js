'use strict';

const { BaseCommand } = require("../../classes/Command");
const nekosBestCmds = require("../../src/nekosBestCmds");

module.exports = class SmileCmd extends BaseCommand {
    constructor(client) {
        super(client, {
            name: "smile"
        });
    }

    async run(msg) {
        return nekosBestCmds(msg, "smile", "smilin");
    }
}