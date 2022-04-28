"use strict";
const addslashes_1 = require("./commands/addslashes");
const decode_1 = require("./commands/decode");
const decode_url_1 = require("./commands/decode-url");
const encode_1 = require("./commands/encode");
const encode_url_1 = require("./commands/encode-url");
const encrypt_1 = require("./commands/encrypt");
const json_pretty_1 = require("./commands/json-pretty");
const stripslashes_1 = require("./commands/stripslashes");
module.exports = {
    addslashes: addslashes_1.handler,
    decode: decode_1.handler,
    decodeUrl: decode_url_1.handler,
    encode: encode_1.handler,
    encodeUrl: encode_url_1.handler,
    encrypt: encrypt_1.handler,
    jsonPretty: json_pretty_1.handler,
    stripslashes: stripslashes_1.handler,
};
