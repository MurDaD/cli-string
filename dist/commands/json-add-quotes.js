"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = void 0;
exports.command = 'jsonAddQuotes <string>';
exports.describe = 'Converts string json to prettified string. Amount of spaces is optional. Default: 2';
const builder = (yargs) => yargs
    .positional('string', { type: 'string', demandOption: true });
exports.builder = builder;
const handler = (argv) => {
    const { string } = argv;
    try {
        const result = string.replace(/([a-zA-Z0-9-]+):/g, '"$1":');
        process.stdout.write(result);
        process.exit(0);
    }
    catch (error) {
        process.stdout.write(error.message);
        process.exit(1);
    }
};
exports.handler = handler;
