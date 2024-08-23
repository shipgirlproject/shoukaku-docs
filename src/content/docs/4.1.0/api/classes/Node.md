---
editUrl: false
next: false
prev: false
title: Node
slug: 4.1.0/apiclasses/node
---

Represents a Lavalink node

## Extends

* [`TypedEventEmitter`](/4.1.0/api/namespaces/utils/classes/typedeventemitter/)\<[`NodeEvents`](/4.1.0/api/type-aliases/nodeevents/)>

## Constructors

<a id="constructors" name="constructors" />

### new Node()

```ts
new Node(manager: Shoukaku, options: NodeOption): Node
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `manager` | [`Shoukaku`](/4.1.0/api/classes/shoukaku/) | Shoukaku instance |
| `options` | [`NodeOption`](/4.1.0/api/interfaces/nodeoption/) | Options on creating this node |

#### Returns

[`Node`](/4.1.0/api/classes/node/)

#### Overrides

`TypedEventEmitter<NodeEvents>.constructor`

#### Defined in

[shoukaku/src/node/Node.ts:153](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Node.ts#L153)

## Properties

<a id="group" name="group" />

### group?

```ts
readonly optional group: string;
```

Group in which this node is contained

#### Defined in

[shoukaku/src/node/Node.ts:103](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Node.ts#L103)

***

<a id="info" name="info" />

### info

```ts
info: null | NodeInfo;
```

Information about lavalink node

#### Defined in

[shoukaku/src/node/Node.ts:127](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Node.ts#L127)

***

<a id="manager" name="manager" />

### manager

```ts
readonly manager: Shoukaku;
```

Shoukaku class

#### Defined in

[shoukaku/src/node/Node.ts:91](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Node.ts#L91)

***

<a id="name" name="name" />

### name

```ts
readonly name: string;
```

Name of this node

#### Defined in

[shoukaku/src/node/Node.ts:99](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Node.ts#L99)

***

<a id="reconnects" name="reconnects" />

### reconnects

```ts
reconnects: number;
```

The number of reconnects to Lavalink

#### Defined in

[shoukaku/src/node/Node.ts:115](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Node.ts#L115)

***

<a id="rest" name="rest" />

### rest

```ts
readonly rest: Rest;
```

Lavalink rest API

#### Defined in

[shoukaku/src/node/Node.ts:95](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Node.ts#L95)

***

<a id="sessionid" name="sessionid" />

### sessionId

```ts
sessionId: null | string;
```

SessionId of this Lavalink connection (not to be confused with Discord SessionId)

#### Defined in

[shoukaku/src/node/Node.ts:135](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Node.ts#L135)

***

<a id="state" name="state" />

### state

```ts
state: State;
```

The state of this connection

#### Defined in

[shoukaku/src/node/Node.ts:119](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Node.ts#L119)

***

<a id="stats" name="stats" />

### stats

```ts
stats: null | Stats;
```

Statistics from Lavalink

#### Defined in

[shoukaku/src/node/Node.ts:123](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Node.ts#L123)

***

<a id="ws" name="ws" />

### ws

```ts
ws: null | WebSocket;
```

Websocket instance

#### Defined in

[shoukaku/src/node/Node.ts:131](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Node.ts#L131)

## Methods

<a id="connect" name="connect" />

### connect()

```ts
connect(): void
```

Connect to Lavalink

#### Returns

`void`

#### Defined in

[shoukaku/src/node/Node.ts:202](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Node.ts#L202)

***

<a id="disconnect" name="disconnect" />

### disconnect()

```ts
disconnect(code: number, reason?: string): void
```

Disconnect from Lavalink

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `code` | `number` | Status code |
| `reason`? | `string` | Reason for disconnect |

#### Returns

`void`

#### Defined in

[shoukaku/src/node/Node.ts:236](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Node.ts#L236)

***

<a id="emit" name="emit" />

### emit()

```ts
emit<K>(eventName: K, ...args: NodeEvents[Extract<K, string>]): boolean
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
| `K` *extends* `symbol` | keyof ShoukakuEvents |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `K` |
| ...`args` | [`NodeEvents`](/4.1.0/api/type-aliases/nodeevents/)\[`Extract`\<`K`, `string`>] |

#### Returns

`boolean`

#### Inherited from

[`TypedEventEmitter`](/4.1.0/api/namespaces/utils/classes/typedeventemitter/).[`emit`](/4.1.0/api/namespaces/utils/classes/typedeventemitter/#emit)

#### Since

v0.1.26

#### Defined in

[shoukaku/src/Utils.ts:21](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Utils.ts#L21)

***

<a id="error" name="error" />

### error()

```ts
error(error: Error): void
```

To emit error events easily

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `error` | `Error` | error message |

#### Returns

`void`

#### Defined in

[shoukaku/src/node/Node.ts:333](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Node.ts#L333)

***

<a id="off" name="off" />

### off()

```ts
off<K>(eventName: K, listener: (...args: NodeEvents[Extract<K, string>]) => void): this
```

Alias for `emitter.removeListener()`.

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `symbol` | keyof ShoukakuEvents |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `K` |
| `listener` | (...`args`: [`NodeEvents`](/4.1.0/api/type-aliases/nodeevents/)\[`Extract`\<`K`, `string`>]) => `void` |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](/4.1.0/api/namespaces/utils/classes/typedeventemitter/).[`off`](/4.1.0/api/namespaces/utils/classes/typedeventemitter/#off)

#### Since

v10.0.0

#### Defined in

[shoukaku/src/Utils.ts:17](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Utils.ts#L17)

***

<a id="on" name="on" />

### on()

```ts
on<K>(eventName: K, listener: (...args: NodeEvents[Extract<K, string>]) => void): this
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
| `K` *extends* `symbol` | keyof ShoukakuEvents |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `K` | The name of the event. |
| `listener` | (...`args`: [`NodeEvents`](/4.1.0/api/type-aliases/nodeevents/)\[`Extract`\<`K`, `string`>]) => `void` | The callback function |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](/4.1.0/api/namespaces/utils/classes/typedeventemitter/).[`on`](/4.1.0/api/namespaces/utils/classes/typedeventemitter/#on)

#### Since

v0.1.101

#### Defined in

[shoukaku/src/Utils.ts:9](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Utils.ts#L9)

***

<a id="once" name="once" />

### once()

```ts
once<K>(eventName: K, listener: (...args: NodeEvents[Extract<K, string>]) => void): this
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
| `K` *extends* `symbol` | keyof ShoukakuEvents |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `K` | The name of the event. |
| `listener` | (...`args`: [`NodeEvents`](/4.1.0/api/type-aliases/nodeevents/)\[`Extract`\<`K`, `string`>]) => `void` | The callback function |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](/4.1.0/api/namespaces/utils/classes/typedeventemitter/).[`once`](/4.1.0/api/namespaces/utils/classes/typedeventemitter/#once)

#### Since

v0.3.0

#### Defined in

[shoukaku/src/Utils.ts:13](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Utils.ts#L13)
