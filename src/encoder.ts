import deflate from './deflate';
import encode64 from './encode64';

export function encode(puml: string) {
  const deflated = deflate(puml);
  return encode64(deflated);
}
