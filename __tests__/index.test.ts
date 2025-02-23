import test from 'node:test';
import assert from 'node:assert';
import PlantUmlCoder from '../src/index';

test('Encoding: Test 1', () => {
  const umlCode = `A -> B: Hello/你好`;
  const expected = 'SrJGjLDmibBmICt9oTT_idV1qwLx0G00';
  const actual = PlantUmlCoder.encode(umlCode);
  assert.strictEqual(actual, expected);
});

test('Encoding: Test 2', () => {
  const umlCode = `@startuml
abstract        abstract
abstract class  "abstract class"
annotation      annotation
circle          circle
()              circle_short_form
class           class
class           class_stereo  <<stereotype>>
diamond         diamond
<>              diamond_short_form
entity          entity
enum            enum
exception       exception
interface       interface
metaclass       metaclass
protocol        protocol
stereotype      stereotype
struct          struct
@enduml
`;
  const expected =
    'RP5B2iCm34JtEeNfghr32Bb9K1s56cmhs0eqjs-CVmbKAxyP2NdG50M3xCu2lgC4rA9ALUw6jXYZKe-xy03qdWN5i2-JZK6Re2sfLfdX-LAtol8SFnnaNZauABjwH-B_wXo50h5Imv1VScmqZh0OTEoNrbmOXl6-lEZNxUJ5oD5RCf_oxgwJYO6-chOUNZK6uy_lhAXh_iRWIF2QfJ5iWOKrsxgYClHesUXyMc7lTqjMOfZ8B-cmFm00';
  const actual = PlantUmlCoder.encode(umlCode);
  assert.strictEqual(actual, expected);
});

test('Decoding: Test 1', () => {
  const encoded =
    'SoWkIImgAStDuRBoICt9oLSepo_AIR7ciWh9o2nM0AAKrBJClDGKXVmyhkBKijIYn1m5BQqSe52nbfOrbqDgNWf8Cm00';
  const expected = `@startuml
:Hello world;
:This is defined on
several **lines**;
@enduml
`;
  const actual = PlantUmlCoder.decode(encoded);
  assert.strictEqual(actual, expected);
});

test('Decoding: Test 2', () => {
  const encoded = 'SrJGjLDmibBmICt9oTT_idV1qwLx0G00';
  const expected = 'A -> B: Hello/你好';
  const actual = PlantUmlCoder.decode(encoded);
  assert.strictEqual(actual, expected);
});
