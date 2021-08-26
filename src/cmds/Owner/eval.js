'use strict';

const { isArray } = require("lodash");
const configFile = require("../../../config.json");
const { BaseCommand } = require("../../classes/Command");
const { Message } = require("../../maps/Messages");

const includeTypes = ["String", "Boolean", "Number", "RegExp"];

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
        const obj = {};
        let mes = "undefined";
        try {
            const U = await eval(ev);
            // if (U?.client) delete U.client;
            if (U) {
                for (const RU in U) {
                    const data = U[RU];
                    if (isArray(data)) {
                        const set = [];
                        for (const U of data) {
                            if (U?.constructor && !includeTypes
                                .includes(U.constructor.name)) set.push("[" + U.constructor.name + "]");
                            else set.push(U);
                        }
                        obj[RU] = set;
                        continue;
                    }
                    if (data?.constructor && !includeTypes
                        .includes(data.constructor.name)) {
                        obj[RU] = "[" + data.constructor.name + "]";
                    } else try {
                        obj[RU] = JSON.stringify(data, null, 2);
                    } catch {
                        obj[RU] = "[Object]";
                    }
                }
                mes = JSON.stringify(obj, null, 2);
            }
        } catch (e) {
            mes = e.stack;
        }
        return msg.channel.sendMessage({
            content: ("```js\n" + mes + "\n```").replace(new RegExp(configFile.token, "g"),
                "zcmLW5Us6gQSAlJix03prP8roGy3HgFtfqm85hIgONxbD5-gw0Psr6yVrS0Qo9D_"),
            replies: [{
                id: msg._id,
                mention: true
            }]
        });
    }
}