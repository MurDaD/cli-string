# 🖹 CLI String - to manipulate strings in the console (and more)This package gives you opportunity to manipulate strings in local environemnt. Maybe your company restricts you from sharing the data in the open web, or you're afraid of web tools stealing your data for self purpose - CLI String is locally installed and is not sharing your information anywhere. It's opensource - check that out.## Contents* [Installation](#installation)* [Usage](#usage)  * [CLI](#cli)  * [Code](#code)* [Commands](#Commands)  * [jsonPretty](#jsonPretty)  * [encode](#encode)  * [decode](#decode)  * [encrypt](#encrypt)  * [addslashes](#addslashes)  * [stripslashes](#stripslashes)  * [encodeUrl](#encodeUrl)  * [decodeUrl](#decodeUrl)* [Tips and Tricks](#tips-and-tricks)  * [Pipe and save](#pipe-and-save)## InstallationTo use CLI String, install in globally, or add it tou the project to get access to all the methods available in CLI.```npm install -g cli-string```or```npm i -g cli-string```## Usage### CLITo list all commands:```shell$ cstr help```To run command with the full name:```shell$ cli-string <command> [options] <string>```Or shortened alias:```shell$ cstr <command> [options] <string>```### Codeyou can also use the library in your code:```typescriptimport { jsonPretty } from 'cli-string';const prettyJson = jsonPretty('{"thisIs": "JSON"}', 4);/** * { *     "thisIs": "JSON" * } */```## Commands### jsonPrettyMakes your ugly JSON string pretty with specified spaces amount```shellUSAGE  $ cstr jsonPretty [--spaces <n>] <JSON>OPTIONS  --spaces 2 # Number of spaces for tabulation. Can't be less than 2, default: 2  EXAMPLE  $ cstr jsonPretty --spaces 4 "{\"test\":\"JSON\"}"  #  {  #      "test": "JSON"  #  }```### encodeEncodes given string in specific format```shellUSAGE  $ cstr encode <format> <string>FORMATS  - base64  - base64url  - ascii  - binary  - hex  - utf16le  EXAMPLE  $ cstr encode base64 "This is my string"  #  VGhpcyBpcyBteSBzdHJpbmc=```### decodeDecodes given string from specific format to UTF-8 string```shellUSAGE  $ cstr decode <format> <string>FORMATS  - base64  - base64url  - ascii  - binary  - hex  - utf16le  EXAMPLE  $ cstr decode base64 VGhpcyBpcyBteSBzdHJpbmc=  #  This is my string```### encryptEncrypts string in specified format```shellUSAGE  $ cstr encrypt <format> <string>FORMATS  - md5  - sha1  - sha256  - sha224  - sha512  - sha384  - sha3  - ripemd160  EXAMPLE  $ cstr encrypt sha256 "This is my string"  #  9da6c02379110815278b615f015f0b254fd3d5a691c9d8abf8141655982c046b```### addslashesQuote string with slashes```shellUSAGE  $ cstr addslashes <string>  EXAMPLE  $ cstr addslashes "O'Reilly?"  #  O\'Reilly?```### stripslashesUn-quotes a quoted string```shellUSAGE  $ cstr stripslashes <string>  EXAMPLE  $ cstr stripslashes "O\'Reilly?"  #  O'Reilly?```### encodeUrlEncodes the special characters. In addition, it encodes the following characters: , / ? : @ & = + $ #```shellUSAGE  $ cstr encodeUrl <string>  EXAMPLE  $ cstr encodeUrl "https://this.is/my?=url"  #  https%3A%2F%2Fthis.is%2Fmy%3F%3Durl```### decodeUrlDecodes URL generated by encodeUrl```shellUSAGE  $ cstr decodeUrl <string>  EXAMPLE  $ cstr decodeUrl "https%3A%2F%2Fthis.is%2Fmy%3F%3Durl"  #  https://this.is/my?=url```## Tips and Tricks### Pipe and saveYou can curl url content, prettify it and save to the file:```shell$ curl https://www.boredapi.com/api/activity | xargs -t -0 ./dist/cli.js jsonPretty > test.txt```This will create a `test.txt` file with content like this:```json{  "activity": "Write a short story",  "type": "recreational",  "participants": 1,  "price": 0,  "link": "",  "key": "6301585",  "accessibility": 0.1}```