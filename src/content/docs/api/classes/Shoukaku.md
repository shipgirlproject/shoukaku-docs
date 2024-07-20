---
editUrl: false
next: false
prev: false
title: "Shoukaku"
---

Main Shoukaku class

## Extends

- `EventEmitter`

## Constructors

<a id="constructors" name="constructors"></a>

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
| `connector` | [`Connector`](/api/classes/connector/) | A Discord library connector |
| `nodes` | [`NodeOption`](/api/interfaces/nodeoption/)[] | An array that conforms to the NodeOption type that specifies nodes to connect to |
| `options` | [`ShoukakuOptions`](/api/interfaces/shoukakuoptions/) | Options to pass to create this Shoukaku instance |

#### Returns

[`Shoukaku`](/api/classes/shoukaku/)

#### Defined in

[Shoukaku.ts:187](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/Shoukaku.ts#L187)

## Properties

<a id="connections" name="connections"></a>

### connections

```ts
readonly connections: Map<string, Connection>;
```

Voice connections being handled

#### Defined in

[Shoukaku.ts:163](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/Shoukaku.ts#L163)

***

<a id="connector" name="connector"></a>

### connector

```ts
readonly connector: Connector;
```

Discord library connector

#### Defined in

[Shoukaku.ts:151](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/Shoukaku.ts#L151)

***

<a id="id" name="id"></a>

### id

```ts
id: null | string;
```

Shoukaku instance identifier

#### Defined in

[Shoukaku.ts:171](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/Shoukaku.ts#L171)

***

<a id="nodes" name="nodes"></a>

### nodes

```ts
readonly nodes: Map<string, Node>;
```

Connected Lavalink nodes

#### Defined in

[Shoukaku.ts:159](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/Shoukaku.ts#L159)

***

<a id="options" name="options"></a>

### options

```ts
readonly options: Required<ShoukakuOptions>;
```

Shoukaku options

#### Defined in

[Shoukaku.ts:155](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/Shoukaku.ts#L155)

***

<a id="players" name="players"></a>

### players

```ts
readonly players: Map<string, Player>;
```

Players being handled

#### Defined in

[Shoukaku.ts:167](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/Shoukaku.ts#L167)

## Methods

<a id="addnode" name="addnode"></a>

### addNode()

```ts
addNode(options: NodeOption): void
```

Add a Lavalink node to the pool of available nodes

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`NodeOption`](/api/interfaces/nodeoption/) |

#### Returns

`void`

#### Defined in

[Shoukaku.ts:215](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/Shoukaku.ts#L215)

***

<a id="emit" name="emit"></a>

### emit()

```ts
emit(event: string | symbol, ...args: any[]): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` \| `symbol` |
| ...`args` | `any`[] |

#### Returns

`boolean`

#### Defined in

[Shoukaku.ts:141](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/Shoukaku.ts#L141)

***

<a id="getidealnode" name="getidealnode"></a>

### getIdealNode()

```ts
getIdealNode(connection?: Connection): undefined | Node
```

Gets an ideal node based on the nodeResolver you provided

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `connection`? | [`Connection`](/api/classes/connection/) | Optional connection class for ideal node selection, if you use it |

#### Returns

`undefined` \| [`Node`](/api/classes/node/)

An ideal node for you to do things with

#### Defined in

[Shoukaku.ts:203](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/Shoukaku.ts#L203)

***

<a id="joinvoicechannel" name="joinvoicechannel"></a>

### joinVoiceChannel()

```ts
joinVoiceChannel(options: VoiceChannelOptions): Promise<Player>
```

Joins a voice channel

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`VoiceChannelOptions`](/api/interfaces/voicechanneloptions/) |

#### Returns

`Promise`\<[`Player`](/api/classes/player/)\>

The created player

#### Defined in

[Shoukaku.ts:248](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/Shoukaku.ts#L248)

***

<a id="leavevoicechannel" name="leavevoicechannel"></a>

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

`Promise`\<`void`\>

The destroyed / disconnected player or undefined if none

#### Defined in

[Shoukaku.ts:284](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/Shoukaku.ts#L284)

***

<a id="off" name="off"></a>

### off()

```ts
off<K>(event: K, listener: (...args: ShoukakuEvents[K]) => void): this
```

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof [`ShoukakuEvents`](/api/interfaces/shoukakuevents/) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `K` |
| `listener` | (...`args`: [`ShoukakuEvents`](/api/interfaces/shoukakuevents/)\[`K`\]) => `void` |

#### Returns

`this`

#### Defined in

[Shoukaku.ts:140](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/Shoukaku.ts#L140)

***

<a id="on" name="on"></a>

### on()

```ts
on<K>(event: K, listener: (...args: ShoukakuEvents[K]) => void): this
```

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof [`ShoukakuEvents`](/api/interfaces/shoukakuevents/) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `K` |
| `listener` | (...`args`: [`ShoukakuEvents`](/api/interfaces/shoukakuevents/)\[`K`\]) => `void` |

#### Returns

`this`

#### Defined in

[Shoukaku.ts:138](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/Shoukaku.ts#L138)

***

<a id="once" name="once"></a>

### once()

```ts
once<K>(event: K, listener: (...args: ShoukakuEvents[K]) => void): this
```

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof [`ShoukakuEvents`](/api/interfaces/shoukakuevents/) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `K` |
| `listener` | (...`args`: [`ShoukakuEvents`](/api/interfaces/shoukakuevents/)\[`K`\]) => `void` |

#### Returns

`this`

#### Defined in

[Shoukaku.ts:139](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/Shoukaku.ts#L139)

***

<a id="removenode" name="removenode"></a>

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

[Shoukaku.ts:233](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/Shoukaku.ts#L233)
