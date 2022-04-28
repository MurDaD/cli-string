"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerFunc = exports.handler = exports.builder = void 0;
exports.command = 'decode <format> <string>';
exports.describe = 'Decodes string from specified format';
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
            return Buffer.from(string, format).toString('utf-8');
        case 'base64url':
            return Buffer.from(string, format).toString('utf-8');
        case 'ascii':
            return Buffer.from(string, format).toString('utf-8');
        case 'binary':
            return Buffer.from(string, format).toString('utf-8');
        case 'hex':
            return Buffer.from(string, format).toString('utf-8');
        case 'utf16le':
            return Buffer.from(string, format).toString('utf-8');
        default:
            throw new Error('Unknown --format was provided');
    }
};
exports.handlerFunc = handlerFunc;
