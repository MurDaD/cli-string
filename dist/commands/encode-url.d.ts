import type { Arguments, CommandBuilder } from 'yargs';
declare type Options = {
    string: string;
};
export declare const builder: CommandBuilder<Options, Options>;
export declare const handler: (argv: Arguments<Options>) => void;
export declare const handlerFunc: (string: string) => string;
export {};
