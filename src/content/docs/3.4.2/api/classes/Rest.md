---
editUrl: false
next: false
prev: false
title: Rest
slug: 3.4.2/apiclasses/rest
---

Wrapper around Lavalink REST API

## Constructors

### new Rest()

> **new Rest**(`node`, `options`): [`Rest`](/3.4.2/api/classes/rest/)

#### Parameters

• **node**: [`Node`](/3.4.2/api/classes/node/)

An instance of Node

• **options**: [`NodeOption`](/3.4.2/api/interfaces/nodeoption/)

#### Returns

[`Rest`](/3.4.2/api/classes/rest/)

#### Defined in

[src/node/Rest.ts:88](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/node/Rest.ts#L88)

## Methods

### decode()

> **decode**(`track`): `Promise`\<`null` | [`Track`](/3.4.2/api/interfaces/track/)>

Decode a track

#### Parameters

• **track**: `string`

Encoded track

#### Returns

`Promise`\<`null` | [`Track`](/3.4.2/api/interfaces/track/)>

Promise that resolves to a track or void

#### Defined in

[src/node/Rest.ts:113](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/node/Rest.ts#L113)

***

### resolve()

> **resolve**(`identifier`): `Promise`\<`null` | [`LavalinkResponse`](/3.4.2/api/interfaces/lavalinkresponse/)>

Resolve a track

#### Parameters

• **identifier**: `string`

Track ID

#### Returns

`Promise`\<`null` | [`LavalinkResponse`](/3.4.2/api/interfaces/lavalinkresponse/)>

A promise that resolves to a Lavalink response or void

#### Defined in

[src/node/Rest.ts:99](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/node/Rest.ts#L99)
