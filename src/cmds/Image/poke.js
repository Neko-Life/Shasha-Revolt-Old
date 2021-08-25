'use strict';

const { BaseCommand } = require("../../classes/Command");
const interactCmds = require("../../src/interactCmds");

module.exports = class PokeCmd extends BaseCommand {
    constructor(client) {
        super(client, {
            name: "poke"
        });
    }

    async run(msg, arg) {
        return interactCmds(msg, arg, "poke");
    }
}