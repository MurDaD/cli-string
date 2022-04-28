import type { Arguments, CommandBuilder } from 'yargs';

type Options = {
  string: string;
  format: string | undefined;
};

exports.command = 'encode <format> <string>';
exports.describe = 'Encodes string in specified format';

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
