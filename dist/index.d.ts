/// <reference types="yargs" />
declare const _default: {
    addslashes: (argv: import("yargs").Arguments<{
        string: string;
    }>) => void;
    decode: (argv: import("yargs").Arguments<{
        string: string;
        format: string | undefined;
    }>) => void;
    decodeUrl: (argv: import("yargs").Arguments<{
        string: string;
    }>) => void;
    encode: (argv: import("yargs").Arguments<{
        string: string;
        format: string | undefined;
    }>) => void;
    encodeUrl: (argv: import("yargs").Arguments<{
        string: string;
    }>) => void;
    encrypt: (argv: import("yargs").Arguments<{
        string: string;
        format: string | undefined;
    }>) => void;
    jsonPretty: (argv: import("yargs").Arguments<{
        string: string;
        spaces: string | number | undefined;
    }>) => void;
    stripslashes: (argv: import("yargs").Arguments<{
        string: string;
    }>) => void;
};
export = _default;
