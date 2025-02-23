import pako from 'pako';

export default function (data: string): string {
  const compressed = pako.deflateRaw(data, {level: 9});
  const u8 = new Uint8Array(compressed);
  return Buffer.from(u8).toString('binary');
}
