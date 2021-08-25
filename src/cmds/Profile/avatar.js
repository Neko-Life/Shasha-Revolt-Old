'use strict';

const { BaseCommand } = require("../../classes/Command");
const { Message } = require("../../maps/Messages");

module.exports = class AvatarCmd extends BaseCommand {
    constructor(client) {
        super(client, {
            name: "avatar",
            aliases: ["av"]
        });
    }

    /**
     * 
     * @param {Message} msg 
     * @param {*} arg 
     */
    async run(msg, arg) {
        const link = msg.author.generateAvatarURL(4096, true);
        return msg.channel.sendMessage(link);
    }
}