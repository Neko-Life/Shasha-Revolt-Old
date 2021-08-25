'use strict';

const { BaseCommand } = require("../../classes/Command");
const nekosBestCmds = require("../../src/nekosBestCmds");

module.exports = class DanceCmd extends BaseCommand {
    constructor(client) {
        super(client, {
            name: "dance"
        });
    }

    async run(msg) {
        return nekosBestCmds(msg, "dance");
    }
}