---
editUrl: false
next: false
prev: false
title: ShoukakuOptions
slug: 3.4.2/apiinterfaces/shoukakuoptions
---

## Properties

### alwaysSendResumeKey?

> `optional` **alwaysSendResumeKey**: `boolean`

Disables the first time initialization tracking of nodes, and just sends the resume key always (Note: Useful for people who save their players to redis and wants to resume sessions even at first boot)

#### Defined in

[src/Shoukaku.ts:63](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/Shoukaku.ts#L63)

***

### moveOnDisconnect?

> `optional` **moveOnDisconnect**: `boolean`

Whether to move players to a different Lavalink node when a node disconnects

#### Defined in

[src/Shoukaku.ts:79](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/Shoukaku.ts#L79)

***

### reconnectInterval?

> `optional` **reconnectInterval**: `number`

Timeout before trying to reconnect

#### Defined in

[src/Shoukaku.ts:71](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/Shoukaku.ts#L71)

***

### reconnectTries?

> `optional` **reconnectTries**: `number`

Number of times to try and reconnect to Lavalink before giving up

#### Defined in

[src/Shoukaku.ts:67](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/Shoukaku.ts#L67)

***

### restTimeout?

> `optional` **restTimeout**: `number`

Time to wait for a response from the Lavalink REST API before giving up

#### Defined in

[src/Shoukaku.ts:75](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/Shoukaku.ts#L75)

***

### resume?

> `optional` **resume**: `boolean`

Whether to resume a connection on disconnect to Lavalink (Server Side) (Note: DOES NOT RESUME WHEN THE LAVALINK SERVER DIES)

#### Defined in

[src/Shoukaku.ts:47](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/Shoukaku.ts#L47)

***

### resumeByLibrary?

> `optional` **resumeByLibrary**: `boolean`

Whether to resume the players by doing it in the library side (Client Side) (Note: TRIES TO RESUME REGARDLESS OF WHAT HAPPENED ON A LAVALINK SERVER)

#### Defined in

[src/Shoukaku.ts:59](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/Shoukaku.ts#L59)

***

### resumeKey?

> `optional` **resumeKey**: `string`

Resume key for Lavalink

#### Defined in

[src/Shoukaku.ts:51](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/Shoukaku.ts#L51)

***

### resumeTimeout?

> `optional` **resumeTimeout**: `number`

Time to wait before lavalink starts to destroy the players of the disconnected client

#### Defined in

[src/Shoukaku.ts:55](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/Shoukaku.ts#L55)

***

### structures?

> `optional` **structures**: [`Structures`](/3.4.2/api/interfaces/structures/)

Custom structures for shoukaku to use

#### Defined in

[src/Shoukaku.ts:87](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/Shoukaku.ts#L87)

***

### userAgent?

> `optional` **userAgent**: `string`

User Agent to use when making requests to Lavalink

#### Defined in

[src/Shoukaku.ts:83](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/Shoukaku.ts#L83)
