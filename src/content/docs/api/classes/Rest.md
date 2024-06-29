---
editUrl: false
next: false
prev: false
title: "Rest"
---

Wrapper around Lavalink REST API

## Constructors

### new Rest()

> **new Rest**(`node`, `options`): [`Rest`](/api/classes/rest/)

#### Parameters

• **node**: [`Node`](/api/classes/node/)

An instance of Node

• **options**: [`NodeOption`](/api/interfaces/nodeoption/)

The options to initialize this rest class

#### Returns

[`Rest`](/api/classes/rest/)

#### Defined in

[src/node/Rest.ts:192](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/node/Rest.ts#L192)

## Methods

### decode()

> **decode**(`track`): `Promise`\<`undefined` \| [`Track`](/api/interfaces/track/)\>

Decode a track

#### Parameters

• **track**: `string`

Encoded track

#### Returns

`Promise`\<`undefined` \| [`Track`](/api/interfaces/track/)\>

Promise that resolves to a track

#### Defined in

[src/node/Rest.ts:221](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/node/Rest.ts#L221)

***

### destroyPlayer()

> **destroyPlayer**(`guildId`): `Promise`\<`void`\>

Deletes a Lavalink player

#### Parameters

• **guildId**: `string`

guildId where this player is

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/node/Rest.ts:275](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/node/Rest.ts#L275)

***

### getLavalinkInfo()

> **getLavalinkInfo**(): `Promise`\<`undefined` \| [`NodeInfo`](/api/type-aliases/nodeinfo/)\>

Get Lavalink info

#### Returns

`Promise`\<`undefined` \| [`NodeInfo`](/api/type-aliases/nodeinfo/)\>

#### Defined in

[src/node/Rest.ts:344](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/node/Rest.ts#L344)

***

### getPlayer()

> **getPlayer**(`guildId`): `Promise`\<`undefined` \| [`LavalinkPlayer`](/api/interfaces/lavalinkplayer/)\>

Gets all the player with the specified sessionId

#### Parameters

• **guildId**: `string`

#### Returns

`Promise`\<`undefined` \| [`LavalinkPlayer`](/api/interfaces/lavalinkplayer/)\>

Promise that resolves to an array of Lavalink players

#### Defined in

[src/node/Rest.ts:245](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/node/Rest.ts#L245)

***

### getPlayers()

> **getPlayers**(): `Promise`\<[`LavalinkPlayer`](/api/interfaces/lavalinkplayer/)[]\>

Gets all the player with the specified sessionId

#### Returns

`Promise`\<[`LavalinkPlayer`](/api/interfaces/lavalinkplayer/)[]\>

Promise that resolves to an array of Lavalink players

#### Defined in

[src/node/Rest.ts:233](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/node/Rest.ts#L233)

***

### getRoutePlannerStatus()

> **getRoutePlannerStatus**(): `Promise`\<`undefined` \| [`RoutePlanner`](/api/interfaces/routeplanner/)\>

Get routeplanner status from Lavalink

#### Returns

`Promise`\<`undefined` \| [`RoutePlanner`](/api/interfaces/routeplanner/)\>

Promise that resolves to a routeplanner response

#### Defined in

[src/node/Rest.ts:317](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/node/Rest.ts#L317)

***

### resolve()

> **resolve**(`identifier`): `Promise`\<`undefined` \| [`LavalinkResponse`](/api/type-aliases/lavalinkresponse/)\>

Resolve a track

#### Parameters

• **identifier**: `string`

Track ID

#### Returns

`Promise`\<`undefined` \| [`LavalinkResponse`](/api/type-aliases/lavalinkresponse/)\>

A promise that resolves to a Lavalink response

#### Defined in

[src/node/Rest.ts:208](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/node/Rest.ts#L208)

***

### stats()

> **stats**(): `Promise`\<`undefined` \| [`NodeStats`](/api/interfaces/nodestats/)\>

Gets the status of this node

#### Returns

`Promise`\<`undefined` \| [`NodeStats`](/api/interfaces/nodestats/)\>

Promise that resolves to a node stats response

#### Defined in

[src/node/Rest.ts:305](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/node/Rest.ts#L305)

***

### unmarkFailedAddress()

> **unmarkFailedAddress**(`address`): `Promise`\<`void`\>

Release blacklisted IP address into pool of IPs

#### Parameters

• **address**: `string`

IP address

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/node/Rest.ts:329](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/node/Rest.ts#L329)

***

### updatePlayer()

> **updatePlayer**(`data`): `Promise`\<`undefined` \| [`LavalinkPlayer`](/api/interfaces/lavalinkplayer/)\>

Updates a Lavalink player

#### Parameters

• **data**: [`UpdatePlayerInfo`](/api/interfaces/updateplayerinfo/)

SessionId from Discord

#### Returns

`Promise`\<`undefined` \| [`LavalinkPlayer`](/api/interfaces/lavalinkplayer/)\>

Promise that resolves to a Lavalink player

#### Defined in

[src/node/Rest.ts:258](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/node/Rest.ts#L258)

***

### updateSession()

> **updateSession**(`resuming`?, `timeout`?): `Promise`\<`undefined` \| [`SessionInfo`](/api/interfaces/sessioninfo/)\>

Updates the session with a resume boolean and timeout

#### Parameters

• **resuming?**: `boolean`

Whether resuming is enabled for this session or not

• **timeout?**: `number`

Timeout to wait for resuming

#### Returns

`Promise`\<`undefined` \| [`SessionInfo`](/api/interfaces/sessioninfo/)\>

Promise that resolves to a Lavalink player

#### Defined in

[src/node/Rest.ts:289](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/node/Rest.ts#L289)
