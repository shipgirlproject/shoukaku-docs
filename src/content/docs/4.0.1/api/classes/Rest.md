---
editUrl: false
next: false
prev: false
title: Rest
slug: 4.0.1/apiclasses/rest
---

Wrapper around Lavalink REST API

## Constructors

### new Rest()

> **new Rest**(`node`, `options`): [`Rest`](/4.0.1/api/classes/rest/)

#### Parameters

• **node**: [`Node`](/4.0.1/api/classes/node/)

An instance of Node

• **options**: [`NodeOption`](/4.0.1/api/interfaces/nodeoption/)

The options to initialize this rest class

#### Returns

[`Rest`](/4.0.1/api/classes/rest/)

#### Defined in

[src/node/Rest.ts:187](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/node/Rest.ts#L187)

## Methods

### decode()

> **decode**(`track`): `Promise`\<`undefined` | [`Track`](/4.0.1/api/interfaces/track/)>

Decode a track

#### Parameters

• **track**: `string`

Encoded track

#### Returns

`Promise`\<`undefined` | [`Track`](/4.0.1/api/interfaces/track/)>

Promise that resolves to a track

#### Defined in

[src/node/Rest.ts:216](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/node/Rest.ts#L216)

***

### destroyPlayer()

> **destroyPlayer**(`guildId`): `Promise`\<`void`>

Deletes a Lavalink player

#### Parameters

• **guildId**: `string`

guildId where this player is

#### Returns

`Promise`\<`void`>

#### Defined in

[src/node/Rest.ts:270](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/node/Rest.ts#L270)

***

### getLavalinkInfo()

> **getLavalinkInfo**(): `Promise`\<`undefined` | [`NodeInfo`](/4.0.1/api/type-aliases/nodeinfo/)>

Get Lavalink info

#### Returns

`Promise`\<`undefined` | [`NodeInfo`](/4.0.1/api/type-aliases/nodeinfo/)>

#### Defined in

[src/node/Rest.ts:339](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/node/Rest.ts#L339)

***

### getPlayer()

> **getPlayer**(`guildId`): `Promise`\<`undefined` | [`LavalinkPlayer`](/4.0.1/api/interfaces/lavalinkplayer/)>

Gets all the player with the specified sessionId

#### Parameters

• **guildId**: `string`

#### Returns

`Promise`\<`undefined` | [`LavalinkPlayer`](/4.0.1/api/interfaces/lavalinkplayer/)>

Promise that resolves to an array of Lavalink players

#### Defined in

[src/node/Rest.ts:240](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/node/Rest.ts#L240)

***

### getPlayers()

> **getPlayers**(): `Promise`\<[`LavalinkPlayer`](/4.0.1/api/interfaces/lavalinkplayer/)\[]>

Gets all the player with the specified sessionId

#### Returns

`Promise`\<[`LavalinkPlayer`](/4.0.1/api/interfaces/lavalinkplayer/)\[]>

Promise that resolves to an array of Lavalink players

#### Defined in

[src/node/Rest.ts:228](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/node/Rest.ts#L228)

***

### getRoutePlannerStatus()

> **getRoutePlannerStatus**(): `Promise`\<`undefined` | [`RoutePlanner`](/4.0.1/api/interfaces/routeplanner/)>

Get routeplanner status from Lavalink

#### Returns

`Promise`\<`undefined` | [`RoutePlanner`](/4.0.1/api/interfaces/routeplanner/)>

Promise that resolves to a routeplanner response

#### Defined in

[src/node/Rest.ts:312](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/node/Rest.ts#L312)

***

### resolve()

> **resolve**(`identifier`): `Promise`\<`undefined` | [`LavalinkResponse`](/4.0.1/api/type-aliases/lavalinkresponse/)>

Resolve a track

#### Parameters

• **identifier**: `string`

Track ID

#### Returns

`Promise`\<`undefined` | [`LavalinkResponse`](/4.0.1/api/type-aliases/lavalinkresponse/)>

A promise that resolves to a Lavalink response

#### Defined in

[src/node/Rest.ts:203](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/node/Rest.ts#L203)

***

### stats()

> **stats**(): `Promise`\<`undefined` | [`NodeStats`](/4.0.1/api/interfaces/nodestats/)>

Gets the status of this node

#### Returns

`Promise`\<`undefined` | [`NodeStats`](/4.0.1/api/interfaces/nodestats/)>

Promise that resolves to a node stats response

#### Defined in

[src/node/Rest.ts:300](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/node/Rest.ts#L300)

***

### unmarkFailedAddress()

> **unmarkFailedAddress**(`address`): `Promise`\<`void`>

Release blacklisted IP address into pool of IPs

#### Parameters

• **address**: `string`

IP address

#### Returns

`Promise`\<`void`>

#### Defined in

[src/node/Rest.ts:324](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/node/Rest.ts#L324)

***

### updatePlayer()

> **updatePlayer**(`data`): `Promise`\<`undefined` | [`LavalinkPlayer`](/4.0.1/api/interfaces/lavalinkplayer/)>

Updates a Lavalink player

#### Parameters

• **data**: [`UpdatePlayerInfo`](/4.0.1/api/interfaces/updateplayerinfo/)

SessionId from Discord

#### Returns

`Promise`\<`undefined` | [`LavalinkPlayer`](/4.0.1/api/interfaces/lavalinkplayer/)>

Promise that resolves to a Lavalink player

#### Defined in

[src/node/Rest.ts:253](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/node/Rest.ts#L253)

***

### updateSession()

> **updateSession**(`resuming`?, `timeout`?): `Promise`\<`undefined` | [`SessionInfo`](/4.0.1/api/interfaces/sessioninfo/)>

Updates the session with a resume boolean and timeout

#### Parameters

• **resuming?**: `boolean`

Whether resuming is enabled for this session or not

• **timeout?**: `number`

Timeout to wait for resuming

#### Returns

`Promise`\<`undefined` | [`SessionInfo`](/4.0.1/api/interfaces/sessioninfo/)>

Promise that resolves to a Lavalink player

#### Defined in

[src/node/Rest.ts:284](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/node/Rest.ts#L284)
