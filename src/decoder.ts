import inflate from './inflate.js';
import decode64 from './decode64.js';

export function decode(encoded: string) {
  var deflated = decode64(encoded);
  return inflate(deflated);
}
