"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerFunc = exports.handler = exports.builder = void 0;
exports.command = 'jsonPretty [--spaces <n>] <string>';
exports.describe = 'Converts string json to prettified string. Amount of spaces is optional. Default: 2';
const builder = (yargs) => yargs
    .options({
    spaces: { type: 'number' },
})
    .positional('string', { type: 'string', demandOption: true });
exports.builder = builder;
const handler = (argv) => {
    const { spaces, string } = argv;
    try {
        const result = (0, exports.handlerFunc)(string, spaces);
        process.stdout.write(result);
        process.exit(0);
    }
    catch (error) {
        process.stdout.write(error.message);
        process.exit(1);
    }
};
exports.handler = handler;
const handlerFunc = (string, spaces) => {
    const stringSpaces = spaces ? parseInt(String(spaces)) : 2;
    return JSON.stringify(JSON.parse(string), null, stringSpaces);
};
exports.handlerFunc = handlerFunc;
