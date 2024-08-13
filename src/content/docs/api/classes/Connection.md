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

[shoukaku/src/guild/Connection.ts:85](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/guild/Connection.ts#L85)

## Properties

<a id="channelid" name="channelid"></a>

### channelId

```ts
channelId: null | string;
```

VoiceChannelId of the connection that is being managed by this instance

#### Defined in

[shoukaku/src/guild/Connection.ts:39](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/guild/Connection.ts#L39)

***

<a id="deafened" name="deafened"></a>

### deafened

```ts
deafened: boolean;
```

Deafen status in connected voice channel

#### Defined in

[shoukaku/src/guild/Connection.ts:51](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/guild/Connection.ts#L51)

***

<a id="guildid" name="guildid"></a>

### guildId

```ts
guildId: string;
```

GuildId of the connection that is being managed by this instance

#### Defined in

[shoukaku/src/guild/Connection.ts:35](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/guild/Connection.ts#L35)

***

<a id="lastchannelid" name="lastchannelid"></a>

### lastChannelId

```ts
lastChannelId: null | string;
```

Id of the voice channel where this instance was connected before the current channelId

#### Defined in

[shoukaku/src/guild/Connection.ts:55](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/guild/Connection.ts#L55)

***

<a id="lastregion" name="lastregion"></a>

### lastRegion

```ts
lastRegion: null | string;
```

Last region of the connected voice channel

#### Defined in

[shoukaku/src/guild/Connection.ts:67](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/guild/Connection.ts#L67)

***

<a id="manager" name="manager"></a>

### manager

```ts
manager: Shoukaku;
```

The manager where this connection is on

#### Defined in

[shoukaku/src/guild/Connection.ts:31](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/guild/Connection.ts#L31)

***

<a id="muted" name="muted"></a>

### muted

```ts
muted: boolean;
```

Mute status in connected voice channel

#### Defined in

[shoukaku/src/guild/Connection.ts:47](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/guild/Connection.ts#L47)

***

<a id="region" name="region"></a>

### region

```ts
region: null | string;
```

Region of connected voice channel

#### Defined in

[shoukaku/src/guild/Connection.ts:63](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/guild/Connection.ts#L63)

***

<a id="serverupdate" name="serverupdate"></a>

### serverUpdate

```ts
serverUpdate: null | ServerUpdate;
```

Cached serverUpdate event from Lavalink

#### Defined in

[shoukaku/src/guild/Connection.ts:71](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/guild/Connection.ts#L71)

***

<a id="sessionid" name="sessionid"></a>

### sessionId

```ts
sessionId: null | string;
```

Id of the currently active voice channel connection

#### Defined in

[shoukaku/src/guild/Connection.ts:59](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/guild/Connection.ts#L59)

***

<a id="shardid" name="shardid"></a>

### shardId

```ts
shardId: number;
```

ShardId where this connection sends data on

#### Defined in

[shoukaku/src/guild/Connection.ts:43](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/guild/Connection.ts#L43)

***

<a id="state" name="state"></a>

### state

```ts
state: State;
```

Connection state

#### Defined in

[shoukaku/src/guild/Connection.ts:75](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/guild/Connection.ts#L75)

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

[shoukaku/src/guild/Connection.ts:106](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/guild/Connection.ts#L106)

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

[shoukaku/src/guild/Connection.ts:116](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/guild/Connection.ts#L116)
