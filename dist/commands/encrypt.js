"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = void 0;
const crypto_js_1 = require("crypto-js");
exports.command = 'encrypt <format> <string>';
exports.describe = 'Encrypts string in specified format';
const builder = (yargs) => yargs
    .positional('format', { type: 'string', demandOption: true })
    .positional('string', { type: 'string', demandOption: true });
exports.builder = builder;
const handler = (argv) => {
    const { format, string } = argv;
    if (!format) {
        throw new Error('No --format was provided');
    }
    try {
        let result;
        switch (format) {
            case 'md5':
                result = (0, crypto_js_1.MD5)(string).toString();
                break;
            case 'sha1':
                result = (0, crypto_js_1.SHA1)(string).toString();
                break;
            case 'sha256':
                result = (0, crypto_js_1.SHA256)(string).toString();
                break;
            case 'sha224':
                result = (0, crypto_js_1.SHA224)(string).toString();
                break;
            case 'sha512':
                result = (0, crypto_js_1.SHA512)(string).toString();
                break;
            case 'sha384':
                result = (0, crypto_js_1.SHA384)(string).toString();
                break;
            case 'sha3':
                result = (0, crypto_js_1.SHA3)(string).toString();
                break;
            case 'ripemd160':
                result = (0, crypto_js_1.RIPEMD160)(string).toString();
                break;
            default:
                throw new Error('Unknown --format was provided');
        }
        process.stdout.write(result);
        process.exit(0);
    }
    catch (error) {
        process.stdout.write(error.message);
        process.exit(1);
    }
};
exports.handler = handler;
