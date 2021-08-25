'use strict';

const { BaseCommand } = require("../../classes/Command");
const interactCmds = require("../../src/interactCmds");

module.exports = class TickleCmd extends BaseCommand {
    constructor(client) {
        super(client, {
            name: "tickle"
        });
    }

    async run(msg, arg) {
        return interactCmds(msg, arg, "tickle");
    }
}