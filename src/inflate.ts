import pako from 'pako';

export default function (data: string): string {
  const decompressed = pako.inflateRaw(
    new Uint8Array([...data].map((c) => c.charCodeAt(0))),
  );
  return new TextDecoder('utf-8').decode(decompressed);
}
