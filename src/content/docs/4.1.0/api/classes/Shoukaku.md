---
editUrl: false
next: false
prev: false
title: Shoukaku
slug: 4.1.0/apiclasses/shoukaku
---

Main Shoukaku class

## Extends

* [`TypedEventEmitter`](/4.1.0/api/namespaces/utils/classes/typedeventemitter/)\<[`ShoukakuEvents`](/4.1.0/api/type-aliases/shoukakuevents/)>

## Constructors

<a id="constructors" name="constructors" />

### new Shoukaku()

```ts
new Shoukaku(
   connector: Connector, 
   nodes: NodeOption[], 
   options: ShoukakuOptions): Shoukaku
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `connector` | [`Connector`](/4.1.0/api/classes/connector/) | A Discord library connector |
| `nodes` | [`NodeOption`](/4.1.0/api/interfaces/nodeoption/)\[] | An array that conforms to the NodeOption type that specifies nodes to connect to |
| `options` | [`ShoukakuOptions`](/4.1.0/api/interfaces/shoukakuoptions/) | Options to pass to create this Shoukaku instance |

#### Returns

[`Shoukaku`](/4.1.0/api/classes/shoukaku/)

#### Overrides

`TypedEventEmitter<ShoukakuEvents>.constructor`

#### Defined in

[shoukaku/src/Shoukaku.ts:182](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Shoukaku.ts#L182)

## Properties

<a id="connections" name="connections" />

### connections

```ts
readonly connections: Map<string, Connection>;
```

Voice connections being handled

#### Defined in

[shoukaku/src/Shoukaku.ts:158](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Shoukaku.ts#L158)

***

<a id="connector" name="connector" />

### connector

```ts
readonly connector: Connector;
```

Discord library connector

#### Defined in

[shoukaku/src/Shoukaku.ts:146](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Shoukaku.ts#L146)

***

<a id="id" name="id" />

### id

```ts
id: null | string;
```

Shoukaku instance identifier

#### Defined in

[shoukaku/src/Shoukaku.ts:166](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Shoukaku.ts#L166)

***

<a id="nodes" name="nodes" />

### nodes

```ts
readonly nodes: Map<string, Node>;
```

Connected Lavalink nodes

#### Defined in

[shoukaku/src/Shoukaku.ts:154](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Shoukaku.ts#L154)

***

<a id="options" name="options" />

### options

```ts
readonly options: Required<ShoukakuOptions>;
```

Shoukaku options

#### Defined in

[shoukaku/src/Shoukaku.ts:150](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Shoukaku.ts#L150)

***

<a id="players" name="players" />

### players

```ts
readonly players: Map<string, Player>;
```

Players being handled

#### Defined in

[shoukaku/src/Shoukaku.ts:162](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Shoukaku.ts#L162)

## Methods

<a id="addnode" name="addnode" />

### addNode()

```ts
addNode(options: NodeOption): void
```

Add a Lavalink node to the pool of available nodes

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`NodeOption`](/4.1.0/api/interfaces/nodeoption/) |

#### Returns

`void`

#### Defined in

[shoukaku/src/Shoukaku.ts:210](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Shoukaku.ts#L210)

***

<a id="emit" name="emit" />

### emit()

```ts
emit<K>(eventName: K, ...args: ShoukakuEvents[Extract<K, string>]): boolean
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
| ...`args` | [`ShoukakuEvents`](/4.1.0/api/type-aliases/shoukakuevents/)\[`Extract`\<`K`, `string`>] |

#### Returns

`boolean`

#### Inherited from

[`TypedEventEmitter`](/4.1.0/api/namespaces/utils/classes/typedeventemitter/).[`emit`](/4.1.0/api/namespaces/utils/classes/typedeventemitter/#emit)

#### Since

v0.1.26

#### Defined in

[shoukaku/src/Utils.ts:21](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Utils.ts#L21)

***

<a id="getidealnode" name="getidealnode" />

### getIdealNode()

```ts
getIdealNode(connection?: Connection): undefined | Node
```

Gets an ideal node based on the nodeResolver you provided

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `connection`? | [`Connection`](/4.1.0/api/classes/connection/) | Optional connection class for ideal node selection, if you use it |

#### Returns

`undefined` | [`Node`](/4.1.0/api/classes/node/)

An ideal node for you to do things with

#### Defined in

[shoukaku/src/Shoukaku.ts:198](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Shoukaku.ts#L198)

***

<a id="joinvoicechannel" name="joinvoicechannel" />

### joinVoiceChannel()

```ts
joinVoiceChannel(options: VoiceChannelOptions): Promise<Player>
```

Joins a voice channel

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`VoiceChannelOptions`](/4.1.0/api/interfaces/voicechanneloptions/) |

#### Returns

`Promise`\<[`Player`](/4.1.0/api/classes/player/)>

The created player

#### Defined in

[shoukaku/src/Shoukaku.ts:243](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Shoukaku.ts#L243)

***

<a id="leavevoicechannel" name="leavevoicechannel" />

### leaveVoiceChannel()

```ts
leaveVoiceChannel(guildId: string): Promise<void>
```

Leaves a voice channel

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `guildId` | `string` | The id of the guild you want to delete |

#### Returns

`Promise`\<`void`>

The destroyed / disconnected player or undefined if none

#### Defined in

[shoukaku/src/Shoukaku.ts:279](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Shoukaku.ts#L279)

***

<a id="off" name="off" />

### off()

```ts
off<K>(eventName: K, listener: (...args: ShoukakuEvents[Extract<K, string>]) => void): this
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
| `listener` | (...`args`: [`ShoukakuEvents`](/4.1.0/api/type-aliases/shoukakuevents/)\[`Extract`\<`K`, `string`>]) => `void` |

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
on<K>(eventName: K, listener: (...args: ShoukakuEvents[Extract<K, string>]) => void): this
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
| `listener` | (...`args`: [`ShoukakuEvents`](/4.1.0/api/type-aliases/shoukakuevents/)\[`Extract`\<`K`, `string`>]) => `void` | The callback function |

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
once<K>(eventName: K, listener: (...args: ShoukakuEvents[Extract<K, string>]) => void): this
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
| `listener` | (...`args`: [`ShoukakuEvents`](/4.1.0/api/type-aliases/shoukakuevents/)\[`Extract`\<`K`, `string`>]) => `void` | The callback function |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](/4.1.0/api/namespaces/utils/classes/typedeventemitter/).[`once`](/4.1.0/api/namespaces/utils/classes/typedeventemitter/#once)

#### Since

v0.3.0

#### Defined in

[shoukaku/src/Utils.ts:13](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Utils.ts#L13)

***

<a id="removenode" name="removenode" />

### removeNode()

```ts
removeNode(name: string, reason: string): void
```

Remove a Lavalink node from the pool of available nodes

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `name` | `string` | `undefined` | Name of the node |
| `reason` | `string` | `'Remove node executed'` | Reason of removing the node |

#### Returns

`void`

#### Defined in

[shoukaku/src/Shoukaku.ts:228](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Shoukaku.ts#L228)
