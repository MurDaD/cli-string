import { MD5, SHA1, SHA256, SHA224, SHA512, SHA384, SHA3, RIPEMD160 } from 'crypto-js';
import type { Arguments, CommandBuilder } from 'yargs';

type Options = {
  string: string;
  format: string | undefined;
};

exports.command = 'hash <format> <string>';
exports.describe = 'Hashes string in specified format';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs
    .positional('format', { type: 'string', demandOption: true })
    .positional('string', { type: 'string', demandOption: true });

export const handler = (argv: Arguments<Options>): void => {
  const { format, string } = argv;
  try {
    const result: string = handlerFunc(format, string);
    process.stdout.write(result);
    process.exit(0);
  } catch (error) {
    process.stdout.write(error.message);
    process.exit(1);
  }
};

export const handlerFunc = (format: string | undefined, string: string) => {
  if (!format) {
    throw new Error('No --format was provided');
  }
  switch (format) {
    case 'md5':
      return MD5(string).toString();
    case 'sha1':
      return SHA1(string).toString();
    case 'sha256':
      return SHA256(string).toString();
    case 'sha224':
      return SHA224(string).toString();
    case 'sha512':
      return SHA512(string).toString();
    case 'sha384':
      return SHA384(string).toString();
    case 'sha3':
      return SHA3(string).toString();
    case 'ripemd160':
      return RIPEMD160(string).toString();

    default:
      throw new Error('Unknown --format was provided');
  }
};
