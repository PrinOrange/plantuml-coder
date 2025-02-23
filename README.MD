# PlantUML Coder

This is the package that allows you make transforming between your plantuml code and encoded text.

This package is ESM only with TypeScript declarations, and compatible with Node.js and Browser environment.

It's a forked project of [PlantUML Encoder](https://github.com/markushedvall/plantuml-encoder). For origin project is lack of maintenance and does not support TypeScript.

## Usage

Install this package first.

```bash
npm i plantuml-coder
```

In your code,

```ts
import PlantUmlCoder from 'plantuml-coder';

const puml = 'A -> B: Hello World';

const encoded = PlantUmlCoder.encode(puml);
console.log(encoded);

const decoded = PlantUmlCoder.decode(encoded);
console.log(decoded);
```

Then it will generate encoded content like

```plaintext
SrJGjLDmibBmICt9oLS8po_AIG40
```

Then you can view the image in URL

```plaintext
www.plantuml.com/plantuml/png/SrJGjLDmibBmICt9oLS8po_AIG40
```

It looks like:

![](https://www.plantuml.com/plantuml/png/SrJGjLDmibBmICt9oLS8po_AIG40)

## Reference

- [PlantUML TextEncoding](https://plantuml.com/en/text-encoding)
- [PlantUML-encoder](https://github.com/markushedvall/plantuml-encoder)

## License

[MIT](./LICENSE) © 但为君故
