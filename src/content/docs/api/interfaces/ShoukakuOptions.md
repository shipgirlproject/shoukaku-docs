---
editUrl: false
next: false
prev: false
title: "ShoukakuOptions"
---

## Properties

### moveOnDisconnect?

> `optional` **moveOnDisconnect**: `boolean`

Whether to move players to a different Lavalink node when a node disconnects

#### Defined in

[src/Shoukaku.ts:72](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/Shoukaku.ts#L72)

***

### nodeResolver()?

> `optional` **nodeResolver**: (`nodes`, `connection`?) => `undefined` \| [`Node`](/api/classes/node/)

Node Resolver to use if you want to customize it

#### Parameters

• **nodes**: `Map`\<`string`, [`Node`](/api/classes/node/)\>

• **connection?**: [`Connection`](/api/classes/connection/)

#### Returns

`undefined` \| [`Node`](/api/classes/node/)

#### Defined in

[src/Shoukaku.ts:88](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/Shoukaku.ts#L88)

***

### reconnectInterval?

> `optional` **reconnectInterval**: `number`

Timeout before trying to reconnect

#### Defined in

[src/Shoukaku.ts:64](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/Shoukaku.ts#L64)

***

### reconnectTries?

> `optional` **reconnectTries**: `number`

Number of times to try and reconnect to Lavalink before giving up

#### Defined in

[src/Shoukaku.ts:60](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/Shoukaku.ts#L60)

***

### restTimeout?

> `optional` **restTimeout**: `number`

Time to wait for a response from the Lavalink REST API before giving up

#### Defined in

[src/Shoukaku.ts:68](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/Shoukaku.ts#L68)

***

### resume?

> `optional` **resume**: `boolean`

Whether to resume a connection on disconnect to Lavalink (Server Side) (Note: DOES NOT RESUME WHEN THE LAVALINK SERVER DIES)

#### Defined in

[src/Shoukaku.ts:48](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/Shoukaku.ts#L48)

***

### resumeByLibrary?

> `optional` **resumeByLibrary**: `boolean`

Whether to resume the players by doing it in the library side (Client Side) (Note: TRIES TO RESUME REGARDLESS OF WHAT HAPPENED ON A LAVALINK SERVER)

#### Defined in

[src/Shoukaku.ts:56](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/Shoukaku.ts#L56)

***

### resumeTimeout?

> `optional` **resumeTimeout**: `number`

Time to wait before lavalink starts to destroy the players of the disconnected client

#### Defined in

[src/Shoukaku.ts:52](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/Shoukaku.ts#L52)

***

### structures?

> `optional` **structures**: [`Structures`](/api/interfaces/structures/)

Custom structures for shoukaku to use

#### Defined in

[src/Shoukaku.ts:80](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/Shoukaku.ts#L80)

***

### userAgent?

> `optional` **userAgent**: `string`

User Agent to use when making requests to Lavalink

#### Defined in

[src/Shoukaku.ts:76](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/Shoukaku.ts#L76)

***

### voiceConnectionTimeout?

> `optional` **voiceConnectionTimeout**: `number`

Timeout before abort connection

#### Defined in

[src/Shoukaku.ts:84](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/Shoukaku.ts#L84)
