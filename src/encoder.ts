import deflate from './deflate.js';
import encode64 from './encode64.js';

export function encode(puml: string) {
  const deflated = deflate(puml);
  return encode64(deflated);
}
