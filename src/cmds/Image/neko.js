'use strict';

const { BaseCommand } = require("../../classes/Command");
const nekosBestCmds = require("../../src/nekosBestCmds");

module.exports = class NekoCmd extends BaseCommand {
    constructor(client) {
        super(client, {
            name: "neko",
            aliases: ["n"]
        });
    }

    async run(msg) {
        return nekosBestCmds(msg, "nekos", null, `Nyaaaa~`);
    }
}