---
editUrl: false
next: false
prev: false
title: "Connection"
---

Represents a connection to a Discord voice channel

## Extends

- `EventEmitter`

## Constructors

<a id="constructors" name="constructors"></a>

### new Connection()

```ts
new Connection(manager: Shoukaku, options: VoiceChannelOptions): Connection
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `manager` | [`Shoukaku`](/api/classes/shoukaku/) | The manager of this connection |
| `options` | [`VoiceChannelOptions`](/api/interfaces/voicechanneloptions/) | The options to pass in connection creation |

#### Returns

[`Connection`](/api/classes/connection/)

#### Overrides

`EventEmitter.constructor`

#### Defined in

[guild/Connection.ts:86](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/guild/Connection.ts#L86)

## Properties

<a id="channelid" name="channelid"></a>

### channelId

```ts
channelId: null | string;
```

VoiceChannelId of the connection that is being managed by this instance

#### Defined in

[guild/Connection.ts:39](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/guild/Connection.ts#L39)

***

<a id="deafened" name="deafened"></a>

### deafened

```ts
deafened: boolean;
```

Deafen status in connected voice channel

#### Defined in

[guild/Connection.ts:52](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/guild/Connection.ts#L52)

***

<a id="guildid" name="guildid"></a>

### guildId

```ts
guildId: string;
```

GuildId of the connection that is being managed by this instance

#### Defined in

[guild/Connection.ts:35](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/guild/Connection.ts#L35)

***

<a id="lastchannelid" name="lastchannelid"></a>

### lastChannelId

```ts
lastChannelId: null | string;
```

Id of the voice channel where this instance was connected before the current channelId

#### Defined in

[guild/Connection.ts:56](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/guild/Connection.ts#L56)

***

<a id="lastregion" name="lastregion"></a>

### lastRegion

```ts
lastRegion: null | string;
```

Last region of the connected voice channel

#### Defined in

[guild/Connection.ts:68](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/guild/Connection.ts#L68)

***

<a id="manager" name="manager"></a>

### manager

```ts
manager: Shoukaku;
```

The manager where this connection is on

#### Defined in

[guild/Connection.ts:31](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/guild/Connection.ts#L31)

***

<a id="muted" name="muted"></a>

### muted

```ts
muted: boolean;
```

Mute status in connected voice channel

#### Defined in

[guild/Connection.ts:48](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/guild/Connection.ts#L48)

***

<a id="region" name="region"></a>

### region

```ts
region: null | string;
```

Region of connected voice channel

#### Defined in

[guild/Connection.ts:64](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/guild/Connection.ts#L64)

***

<a id="serverupdate" name="serverupdate"></a>

### serverUpdate

```ts
serverUpdate: null | ServerUpdate;
```

Cached serverUpdate event from Lavalink

#### Defined in

[guild/Connection.ts:72](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/guild/Connection.ts#L72)

***

<a id="sessionid" name="sessionid"></a>

### sessionId

```ts
sessionId: null | string;
```

Id of the currently active voice channel connection

#### Defined in

[guild/Connection.ts:60](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/guild/Connection.ts#L60)

***

<a id="shardid" name="shardid"></a>

### shardId

```ts
shardId: number;
```

ShardId where this connection sends data on

#### Defined in

[guild/Connection.ts:44](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/guild/Connection.ts#L44)

***

<a id="state" name="state"></a>

### state

```ts
state: State;
```

Connection state

#### Defined in

[guild/Connection.ts:76](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/guild/Connection.ts#L76)

## Methods

<a id="setdeaf" name="setdeaf"></a>

### setDeaf()

```ts
setDeaf(deaf: boolean): void
```

Set the deafen status for the current bot user

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `deaf` | `boolean` | `false` | Boolean value to indicate whether to deafen or undeafen |

#### Returns

`void`

#### Default Value

```ts
false
```

#### Defined in

[guild/Connection.ts:107](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/guild/Connection.ts#L107)

***

<a id="setmute" name="setmute"></a>

### setMute()

```ts
setMute(mute: boolean): void
```

Set the mute status for the current bot user

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `mute` | `boolean` | `false` | Boolean value to indicate whether to mute or unmute |

#### Returns

`void`

#### Default Value

```ts
false
```

#### Defined in

[guild/Connection.ts:117](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/guild/Connection.ts#L117)
