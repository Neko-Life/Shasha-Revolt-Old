'use strict';

const { BaseCommand } = require("../../classes/Command");
const interactCmds = require("../../src/interactCmds");

module.exports = class CuddleCmd extends BaseCommand {
    constructor(client) {
        super(client, {
            name: "cuddle"
        });
    }

    async run(msg, arg) {
        return interactCmds(msg, arg, "cuddle");
    }
}