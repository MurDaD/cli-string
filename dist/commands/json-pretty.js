"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = void 0;
exports.command = 'json-pretty <string> [spaces]';
exports.describe = 'Converts string json to prettified string. Amount of spaces is optional. Default: 2';
const builder = (yargs) => yargs
    .options({
    spaces: { type: 'number' },
})
    .positional('string', { type: 'string', demandOption: true });
exports.builder = builder;
const handler = (argv) => {
    const { string, spaces } = argv;
    const stringSpaces = spaces ? parseInt(String(spaces)) : 2;
    try {
        const result = JSON.stringify(JSON.parse(string), null, stringSpaces);
        process.stdout.write(result);
        process.exit(0);
    }
    catch (error) {
        process.stdout.write(error.message);
        process.exit(1);
    }
};
exports.handler = handler;
