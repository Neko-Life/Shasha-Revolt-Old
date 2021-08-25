'use strict';

const { BaseCommand } = require("../../classes/Command");
const interactCmds = require("../../src/interactCmds");

module.exports = class PatCmd extends BaseCommand {
    constructor(client) {
        super(client, {
            name: "pat"
        });
    }

    async run(msg, arg) {
        return interactCmds(msg, arg, "pat");
    }
}