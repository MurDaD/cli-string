import type { Arguments, CommandBuilder } from 'yargs';

type Options = {
  string: string;
  spaces: string | number | undefined;
};

exports.command = 'jsonPretty [--spaces <n>] <string>';
exports.describe = 'Converts string json to prettified string. Amount of spaces is optional. Default: 2';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs
    .options({
      spaces: { type: 'number' },
    })
    .positional('string', { type: 'string', demandOption: true });

export const handler = (argv: Arguments<Options>): void => {
  const { spaces, string } = argv;
  try {
    const result = handlerFunc(string, spaces);
    process.stdout.write(result);
    process.exit(0);
  } catch (error) {
    process.stdout.write(error.message);
    process.exit(1);
  }
};

export const handlerFunc = (string: string, spaces: string | number | undefined) => {
  const stringSpaces = spaces ? parseInt(String(spaces)) : 2;
  return JSON.stringify(JSON.parse(string), null, stringSpaces);
};
