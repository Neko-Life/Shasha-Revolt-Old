'use strict';

async function handle(reclient, msg1, msg2) {
    // if (!(msg1.content || msg2.content)) return;
    // if (msg1.content !== msg2.content)
    msg1.client.handlers["checkIfCmd"].handle(msg1);
}

module.exports = { handle }