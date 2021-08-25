'use strict';

const { Client } = require("..");

/**
 * @typedef {object} BaseCommandData
 * @property {string} name
 * @property {string[]} aliases
 * @property {string} description
 * @property {string} details
 * @property {string[]} examples
 * @property {boolean} guildOnly
 */

class BaseCommand {
    /**
     * 
     * @param {Client} reClient 
     * @param {BaseCommandData} param1 
     */
    constructor(reClient, { name, aliases, description, details, examples, guildOnly }) {
        if (!(reClient instanceof Client)) throw new TypeError("Invalid instance of Client!");
        this.client = reClient;
        this.name = name;
        this.aliases = aliases || [];
        this.description = description;
        this.details = details;
        this.examples = examples || [];
        this.guildOnly = guildOnly || false;
    }
}

module.exports = { BaseCommand }