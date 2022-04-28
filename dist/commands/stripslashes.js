"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = void 0;
exports.command = 'stripslashes <string>';
exports.describe = 'Un-quotes a quoted string';
const builder = (yargs) => yargs
    .positional('string', { type: 'string', demandOption: true });
exports.builder = builder;
const handler = (argv) => {
    const { string } = argv;
    try {
        const result = string.replace(/\\(.)/mg, "$1");
        process.stdout.write(result);
        process.exit(0);
    }
    catch (error) {
        process.stdout.write(error.message);
        process.exit(1);
    }
};
exports.handler = handler;
