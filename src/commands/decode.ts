import type { Arguments, CommandBuilder } from 'yargs';

type Options = {
  string: string;
  format: string | undefined;
};

exports.command = 'decode <format> <string>';
exports.describe = 'Decodes string from specified format';

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
