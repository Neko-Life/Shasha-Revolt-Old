'use strict';

const { BaseCommand } = require("../../classes/Command");
const interactCmds = require("../../src/interactCmds");

module.exports = class KissCmd extends BaseCommand {
    constructor(client) {
        super(client, {
            name: "kiss",
            aliases: ["k"]
        });
    }

    async run(msg, arg) {
        return interactCmds(msg, arg, "kiss");
    }
}