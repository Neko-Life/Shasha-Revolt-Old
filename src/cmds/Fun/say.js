'use strict';

const { BaseCommand } = require("../../classes/Command");

module.exports = class SayCmd extends BaseCommand {
    constructor(client) {
        super(client, {
            name: "say"
        });
    }
}