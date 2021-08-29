'use strict';

const configFile = require("./config.json");
const { Client } = require("./src/Client");
const { errLog } = require("./src/src/errLog");
const reClient = new Client({
    apiURL: "https://api.revolt.chat",
    heartbeat: 25
});

reClient.reDebug = true;

require("./src/dispatch").dispatchReClient(reClient);

reClient.on("connecting", () => console.log("Connecting..."));

reClient.on("connected", () => console.log("Connected!"));

reClient.on("dropped", () => console.log("Connection dropped"));

reClient.on("user/relationship", (user) => {
    console.log(user);
});

// reClient.on("message", msg => {
//     msg.channel.
// })

process.on("uncaughtException", (e) => {
    errLog(reClient, e);
});
process.on("unhandledRejection", (e) => {
    errLog(reClient, e);
});
process.on("uncaughtExceptionMonitor", (e) => {
    errLog(reClient, e);
});

reClient.loginBot(configFile.token);