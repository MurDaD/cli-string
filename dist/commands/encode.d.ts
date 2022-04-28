import type { Arguments, CommandBuilder } from 'yargs';
declare type Options = {
    string: string;
    format: string | undefined;
};
export declare const builder: CommandBuilder<Options, Options>;
export declare const handler: (argv: Arguments<Options>) => void;
export {};
