import inflate from './inflate';
import decode64 from './decode64';

export function decode(encoded: string) {
  var deflated = decode64(encoded);
  return inflate(deflated);
}
