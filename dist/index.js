"use strict";
const addslashes_1 = require("./commands/addslashes");
const decode_1 = require("./commands/decode");
const decode_url_1 = require("./commands/decode-url");
const encode_1 = require("./commands/encode");
const encode_url_1 = require("./commands/encode-url");
const hash_1 = require("./commands/hash");
const json_pretty_1 = require("./commands/json-pretty");
const stripslashes_1 = require("./commands/stripslashes");
module.exports = {
    addslashes: addslashes_1.handlerFunc,
    decode: decode_1.handlerFunc,
    decodeUrl: decode_url_1.handlerFunc,
    encode: encode_1.handlerFunc,
    encodeUrl: encode_url_1.handlerFunc,
    hash: hash_1.handlerFunc,
    jsonPretty: json_pretty_1.handlerFunc,
    stripslashes: stripslashes_1.handlerFunc,
};
