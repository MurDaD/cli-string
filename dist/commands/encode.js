"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerFunc = exports.handler = exports.builder = void 0;
exports.command = 'encode <format> <string>';
exports.describe = 'Encodes string in specified format';
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
        case 'base64':
            return Buffer.from(string, 'utf-8').toString(format);
        case 'base64url':
            return Buffer.from(string, 'utf-8').toString(format);
        case 'ascii':
            return Buffer.from(string, 'utf-8').toString(format);
        case 'binary':
            return Buffer.from(string, 'utf-8').toString(format);
        case 'hex':
            return Buffer.from(string, 'utf-8').toString(format);
        case 'utf16le':
            return Buffer.from(string, 'utf-8').toString(format);
        default:
            throw new Error('Unknown --format was provided');
    }
};
exports.handlerFunc = handlerFunc;
