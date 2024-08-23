---
editUrl: false
next: false
prev: false
title: TypedEventEmitter
slug: 4.1.0/apinamespacesutilsclasses/typedeventemitter
---

## Extends

* `EventEmitter`

## Extended by

* [`Player`](/4.1.0/api/classes/player/)
* [`Node`](/4.1.0/api/classes/node/)
* [`Shoukaku`](/4.1.0/api/classes/shoukaku/)

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `Record`\<`string`, `unknown`\[]> |

## Methods

<a id="emit" name="emit" />

### emit()

```ts
emit<K>(eventName: K, ...args: T[Extract<K, string>]): boolean
```

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` | `symbol` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `K` |
| ...`args` | `T`\[`Extract`\<`K`, `string`>] |

#### Returns

`boolean`

#### Overrides

`EventEmitter.emit`

#### Since

v0.1.26

#### Defined in

[shoukaku/src/Utils.ts:21](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Utils.ts#L21)

***

<a id="off" name="off" />

### off()

```ts
off<K>(eventName: K, listener: (...args: T[Extract<K, string>]) => void): this
```

Alias for `emitter.removeListener()`.

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` | `symbol` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `K` |
| `listener` | (...`args`: `T`\[`Extract`\<`K`, `string`>]) => `void` |

#### Returns

`this`

#### Overrides

`EventEmitter.off`

#### Since

v10.0.0

#### Defined in

[shoukaku/src/Utils.ts:17](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Utils.ts#L17)

***

<a id="on" name="on" />

### on()

```ts
on<K>(eventName: K, listener: (...args: T[Extract<K, string>]) => void): this
```

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` | `symbol` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `K` | The name of the event. |
| `listener` | (...`args`: `T`\[`Extract`\<`K`, `string`>]) => `void` | The callback function |

#### Returns

`this`

#### Overrides

`EventEmitter.on`

#### Since

v0.1.101

#### Defined in

[shoukaku/src/Utils.ts:9](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Utils.ts#L9)

***

<a id="once" name="once" />

### once()

```ts
once<K>(eventName: K, listener: (...args: T[Extract<K, string>]) => void): this
```

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` | `symbol` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `K` | The name of the event. |
| `listener` | (...`args`: `T`\[`Extract`\<`K`, `string`>]) => `void` | The callback function |

#### Returns

`this`

#### Overrides

`EventEmitter.once`

#### Since

v0.3.0

#### Defined in

[shoukaku/src/Utils.ts:13](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Utils.ts#L13)
