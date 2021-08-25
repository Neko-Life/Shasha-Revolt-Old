'use strict';

const { fetchNeko } = require("nekos-best.js");
const { Message } = require("../maps/Messages");
const { cleanId } = require("./reUtils");

/**
 *
 * @param {Message} msg
 * @param {string} arg
 * @param {import("nekos-best.js").nbEndpoints} img
 * @returns {Message}
 */
module.exports = async (msg, arg, img) => {
    const strs = arg.split(/(?<!\\),+/);
    const inv = strs.length === 1 && !strs[0] ? msg.client.user : msg.author;
    const targets = [];
    if (!(strs.length === 1 && !strs[0]))
        for (const U of strs) {
            if (!U) continue;
            const T = cleanId(U);
            if (!T) continue;
            if (T.length !== 26) continue;
            const user = await msg.client.users.fetch(T).catch(() => { });
            if (!user || targets.includes(user)) continue;
            targets.push(user);
        }
    else targets.push(msg.author);
    const map = targets.map(r => r.username + ",");
    if (map.length > 1) map[map.length - 2] = map[map.length - 2].slice(0, -1) + " and";
    const link = await fetchNeko(img);
    return msg.channel.sendMessage(`${inv.username} ${img.endsWith("s") ? img + "es" : img + "s"} ${map.join(" ").slice(0, -1)} [❤️](${link.url})`);
}