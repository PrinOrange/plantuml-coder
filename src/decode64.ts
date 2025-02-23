function decode6bit(cc: string) {
  var c = cc.charCodeAt(0);
  if (cc === '_') return 63;
  if (cc === '-') return 62;
  if (c >= 97) return c - 61; // - 97 + 26 + 10
  if (c >= 65) return c - 55; // - 65 + 10
  if (c >= 48) return c - 48;
  throw 'invalid char.';
}

function extract3bytes(data: string) {
  var c1 = decode6bit(data[0]);
  var c2 = decode6bit(data[1]);
  var c3 = decode6bit(data[2]);
  var c4 = decode6bit(data[3]);
  var b1 = (c1 << 2) | ((c2 >> 4) & 0x3f);
  var b2 = ((c2 << 4) & 0xf0) | ((c3 >> 2) & 0xf);
  var b3 = ((c3 << 6) & 0xc0) | (c4 & 0x3f);

  return [b1, b2, b3];
}

export default function (data: string) {
  var r = '';
  var i = 0;
  for (i = 0; i < data.length; i += 4) {
    var t = extract3bytes(data.substring(i, i + 4));
    r = r + String.fromCharCode(t[0]);
    r = r + String.fromCharCode(t[1]);
    r = r + String.fromCharCode(t[2]);
  }
  return r;
}
