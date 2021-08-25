'use strict';

const { BaseCommand } = require("../../classes/Command");
const interactCmds = require("../../src/interactCmds");

module.exports = class HugCmd extends BaseCommand {
    constructor(client) {
        super(client, {
            name: "hug"
        });
    }

    async run(msg, arg) {
        return interactCmds(msg, arg, "hug");
    }
}