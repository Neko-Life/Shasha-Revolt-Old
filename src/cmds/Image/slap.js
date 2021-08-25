'use strict';

const { BaseCommand } = require("../../classes/Command");
const interactCmds = require("../../src/interactCmds");

module.exports = class SlapCmd extends BaseCommand {
    constructor(client) {
        super(client, {
            name: "slap"
        });
    }

    async run(msg, arg) {
        return interactCmds(msg, arg, "slap");
    }
}