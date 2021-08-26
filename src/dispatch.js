'use strict';

const { join } = require("path");
const requireAll = require("require-all");

async function dispatchReClient(reClient) {
    reClient.eventHandlers = requireAll({
        dirname: join(__dirname, "eventHandlers")
    });
    reClient.handlers = requireAll({
        dirname: join(__dirname, "handlers")
    });
    const commands = requireAll({
        dirname: join(__dirname, "cmds")
    });
    reClient.commands = {};
    reClient.commandGroups = {};

    for (const U in commands) {
        if (!commands[U]) continue;
        for (const R in commands[U]) {
            if (!commands[U][R]?.name) continue;
            if (reClient.commands[R]) throw new Error("Duplicate name for command:" + R);
            else reClient.commands[R] = new commands[U][R](reClient);
            if (!reClient.commandGroups[U]) reClient.commandGroups[U] = new Map();
            reClient.commandGroups[U].set(R, reClient.commands[R]);
            if (reClient.reDebug) console.log("Registered command:", R, "\nin group:", U);
        }
    }

    for (const event in reClient.eventHandlers) {
        reClient.on(event.replace(/-/g, "/"), (...args) => {
            reClient.eventHandlers[event].handle(reClient, ...args);
        });
        if (reClient.reDebug) console.log("Listener dispatched:", event);
    }
}

module.exports = { dispatchReClient }