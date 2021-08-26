'use strict';

const { fetchNeko } = require("nekos-best.js");
const { Message } = require("../maps/Messages");

/**
 * 
 * @param {Message} msg 
 * @param {import("nekos-best.js").nbEndpoints} img 
 * @param {string} is
 * @param {string} desc
 * @returns 
 */
module.exports = async (msg, img, is, desc = "") => {
    const link = await fetchNeko(img);
    return msg.channel.sendMessage(`${is ? `${msg.author.username} is ${is}` : ""} ${desc}[ ](${link.url})`);
}