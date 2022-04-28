import { handlerFunc as addslashes } from './commands/addslashes';
import { handlerFunc as decode } from './commands/decode';
import { handlerFunc as decodeUrl } from './commands/decode-url';
import { handlerFunc as encode } from './commands/encode';
import { handlerFunc as encodeUrl } from './commands/encode-url';
import { handlerFunc as hash } from './commands/hash';
import { handlerFunc as jsonPretty } from './commands/json-pretty';
import { handlerFunc as stripslashes } from './commands/stripslashes';

export = {
  addslashes,
  decode,
  decodeUrl,
  encode,
  encodeUrl,
  hash,
  jsonPretty,
  stripslashes,
}
