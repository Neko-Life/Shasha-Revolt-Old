'use strict';

const configFile = require("../../../config.json");
const { BaseCommand } = require("../../classes/Command");
const { Message } = require("../../maps/Messages");

module.exports = class EvalCmd extends BaseCommand {
    constructor(client) {
        super(client, {
            name: "eval",
            aliases: ["e"]
        });
    }

    /**
     * 
     * @param {Message} msg 
     * @returns 
     */
    async run(msg) {
        if (!configFile.owners.includes(msg.author_id)) return msg.channel.sendMessage("lol no");
        const ev = msg.content.slice((msg.commandAlias + msg.commandPrefix).length).trim();
        if (!ev) return msg.channel.sendMessage("...nothin");
        let mes;
        try {
            const U = await eval(ev);
            // if (U?.client) delete U.client;
            mes = JSON.safeStringify(U) || "undefined";
        } catch (e) {
            mes = e.stack;
        }
        return msg.channel.sendMessage({
            content: "```js\n" + mes + "\n```",
            replies: [{
                id: msg._id,
                mention: true
            }]
        });
    }
}