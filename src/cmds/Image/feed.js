'use strict';

const { BaseCommand } = require("../../classes/Command");
const interactCmds = require("../../src/interactCmds");

module.exports = class FeedCmd extends BaseCommand {
    constructor(client) {
        super(client, {
            name: "feed"
        });
    }

    async run(msg, arg) {
        return interactCmds(msg, arg, "feed");
    }
}