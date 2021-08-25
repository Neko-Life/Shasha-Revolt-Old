'use strict';

const { fetchNeko } = require("nekos-best.js");
const { Message } = require("../maps/Messages");

/**
 * 
 * @param {Message} msg 
 * @param {import("nekos-best.js").nbEndpoints} img 
 * @returns 
 */
module.exports = async (msg, img) => {
    const link = await fetchNeko(img);
    return msg.channel.sendMessage(`[:heart:](${link.url})`);
}