'use strict';

const { BaseCommand } = require("../../classes/Command");

module.exports = class ProfileCmd extends BaseCommand {
    constructor(client) {
        super(client, {
            name: "profile",
            aliases: ["info", "about", "whois"]
        });
    }

    async run(msg) {
        console.log;
    }
}