import type { Arguments, CommandBuilder } from 'yargs';

type Options = {
  string: string;
};

exports.command = 'addslashes <string>';
exports.describe = 'Quote string with slashes';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs
    .positional('string', { type: 'string', demandOption: true });

export const handler = (argv: Arguments<Options>): void => {
  const { string } = argv;
  try {
    const result = handlerFunc(string);
    process.stdout.write(result);
    process.exit(0);
  } catch (error) {
    process.stdout.write(error.message);
    process.exit(1);
  }
};

export const handlerFunc = (string: string) => {
  return string.replace(/'/g, "\\'");
};
