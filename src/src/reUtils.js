'use strict';

function cleanId(str) {
    str = str.trim();
    if (str.startsWith("<")) str = str.slice(1);
    if (str.startsWith("@") | str.startsWith("#") | str.startsWith("&")) str = str.slice(1);
    if (str.endsWith(">")) str = str.slice(0, -1);
    return str;
}

JSON.safeStringify = (obj, indent = 2) => {
    let cache = [];
    const retVal = JSON.stringify(
        obj,
        (key, value) =>
            typeof value === "object" && value !== null
                ? cache.includes(value)
                    ? undefined // Duplicate reference found, discard key
                    : cache.push(value) && value // Store value in our collection
                : value,
        indent
    );
    cache = null;
    return retVal;
};

function parseComa(str) {
    if (typeof str !== "string") throw new TypeError("string is " + typeof str);
    return str.split(/(?<!\\),+/);
}

module.exports = {
    cleanId,
    parseComa
}