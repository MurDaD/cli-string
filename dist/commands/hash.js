"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerFunc = exports.handler = exports.builder = void 0;
const crypto_js_1 = require("crypto-js");
exports.command = 'hash <format> <string>';
exports.describe = 'Hashes string in specified format';
const builder = (yargs) => yargs
    .positional('format', { type: 'string', demandOption: true })
    .positional('string', { type: 'string', demandOption: true });
exports.builder = builder;
const handler = (argv) => {
    const { format, string } = argv;
    try {
        const result = (0, exports.handlerFunc)(format, string);
        process.stdout.write(result);
        process.exit(0);
    }
    catch (error) {
        process.stdout.write(error.message);
        process.exit(1);
    }
};
exports.handler = handler;
const handlerFunc = (format, string) => {
    if (!format) {
        throw new Error('No --format was provided');
    }
    switch (format) {
        case 'md5':
            return (0, crypto_js_1.MD5)(string).toString();
        case 'sha1':
            return (0, crypto_js_1.SHA1)(string).toString();
        case 'sha256':
            return (0, crypto_js_1.SHA256)(string).toString();
        case 'sha224':
            return (0, crypto_js_1.SHA224)(string).toString();
        case 'sha512':
            return (0, crypto_js_1.SHA512)(string).toString();
        case 'sha384':
            return (0, crypto_js_1.SHA384)(string).toString();
        case 'sha3':
            return (0, crypto_js_1.SHA3)(string).toString();
        case 'ripemd160':
            return (0, crypto_js_1.RIPEMD160)(string).toString();
        default:
            throw new Error('Unknown --format was provided');
    }
};
exports.handlerFunc = handlerFunc;
