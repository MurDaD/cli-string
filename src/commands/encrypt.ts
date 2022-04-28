import { MD5, SHA1, SHA256, SHA224, SHA512, SHA384, SHA3, RIPEMD160 } from 'crypto-js';import type { Arguments, CommandBuilder } from 'yargs';type Options = {  string: string;  format: string | undefined;};exports.command = 'encrypt <format> <string>';exports.describe = 'Encrypts string in specified format';export const builder: CommandBuilder<Options, Options> = (yargs) =>  yargs    .positional('format', { type: 'string', demandOption: true })    .positional('string', { type: 'string', demandOption: true });export const handler = (argv: Arguments<Options>): void => {  const { format, string } = argv;  if (!format) {    throw new Error('No --format was provided');  }  try {    let result: string;    switch (format) {      case 'md5':        result = MD5(string).toString();        break;      case 'sha1':        result = SHA1(string).toString();        break;      case 'sha256':        result = SHA256(string).toString();        break;      case 'sha224':        result = SHA224(string).toString();        break;      case 'sha512':        result = SHA512(string).toString();        break;      case 'sha384':        result = SHA384(string).toString();        break;      case 'sha3':        result = SHA3(string).toString();        break;      case 'ripemd160':        result = RIPEMD160(string).toString();        break;      default:        throw new Error('Unknown --format was provided');    }    process.stdout.write(result);    process.exit(0);  } catch (error) {    process.stdout.write(error.message);    process.exit(1);  }};