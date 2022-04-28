"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = void 0;
exports.command = 'decode <format> <string>';
exports.describe = 'Decodes string from specified format';
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
            case 'base64':
                result = Buffer.from(string, format).toString('utf-8');
                break;
            case 'base64url':
                result = Buffer.from(string, format).toString('utf-8');
                break;
            case 'ascii':
                result = Buffer.from(string, format).toString('utf-8');
                break;
            case 'binary':
                result = Buffer.from(string, format).toString('utf-8');
                break;
            case 'hex':
                result = Buffer.from(string, format).toString('utf-8');
                break;
            case 'utf16le':
                result = Buffer.from(string, format).toString('utf-8');
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