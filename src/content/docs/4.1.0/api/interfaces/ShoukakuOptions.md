---
editUrl: false
next: false
prev: false
title: ShoukakuOptions
slug: 4.1.0/apiinterfaces/shoukakuoptions
---

## Properties

<a id="moveondisconnect" name="moveondisconnect" />

### moveOnDisconnect?

```ts
optional moveOnDisconnect: boolean;
```

Whether to move players to a different Lavalink node when a node disconnects

#### Defined in

[shoukaku/src/Shoukaku.ts:71](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Shoukaku.ts#L71)

***

<a id="noderesolver" name="noderesolver" />

### nodeResolver()?

```ts
optional nodeResolver: (nodes: Map<string, Node>, connection?: Connection) => undefined | Node;
```

Node Resolver to use if you want to customize it

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `nodes` | `Map`\<`string`, [`Node`](/4.1.0/api/classes/node/)> |
| `connection`? | [`Connection`](/4.1.0/api/classes/connection/) |

#### Returns

`undefined` | [`Node`](/4.1.0/api/classes/node/)

#### Defined in

[shoukaku/src/Shoukaku.ts:87](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Shoukaku.ts#L87)

***

<a id="reconnectinterval" name="reconnectinterval" />

### reconnectInterval?

```ts
optional reconnectInterval: number;
```

Timeout before trying to reconnect

#### Defined in

[shoukaku/src/Shoukaku.ts:63](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Shoukaku.ts#L63)

***

<a id="reconnecttries" name="reconnecttries" />

### reconnectTries?

```ts
optional reconnectTries: number;
```

Number of times to try and reconnect to Lavalink before giving up

#### Defined in

[shoukaku/src/Shoukaku.ts:59](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Shoukaku.ts#L59)

***

<a id="resttimeout" name="resttimeout" />

### restTimeout?

```ts
optional restTimeout: number;
```

Time to wait for a response from the Lavalink REST API before giving up

#### Defined in

[shoukaku/src/Shoukaku.ts:67](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Shoukaku.ts#L67)

***

<a id="resume" name="resume" />

### resume?

```ts
optional resume: boolean;
```

Whether to resume a connection on disconnect to Lavalink (Server Side) (Note: DOES NOT RESUME WHEN THE LAVALINK SERVER DIES)

#### Defined in

[shoukaku/src/Shoukaku.ts:47](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Shoukaku.ts#L47)

***

<a id="resumebylibrary" name="resumebylibrary" />

### resumeByLibrary?

```ts
optional resumeByLibrary: boolean;
```

Whether to resume the players by doing it in the library side (Client Side) (Note: TRIES TO RESUME REGARDLESS OF WHAT HAPPENED ON A LAVALINK SERVER)

#### Defined in

[shoukaku/src/Shoukaku.ts:55](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Shoukaku.ts#L55)

***

<a id="resumetimeout" name="resumetimeout" />

### resumeTimeout?

```ts
optional resumeTimeout: number;
```

Time to wait before lavalink starts to destroy the players of the disconnected client

#### Defined in

[shoukaku/src/Shoukaku.ts:51](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Shoukaku.ts#L51)

***

<a id="structures" name="structures" />

### structures?

```ts
optional structures: Structures;
```

Custom structures for shoukaku to use

#### Defined in

[shoukaku/src/Shoukaku.ts:79](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Shoukaku.ts#L79)

***

<a id="useragent" name="useragent" />

### userAgent?

```ts
optional userAgent: string;
```

User Agent to use when making requests to Lavalink

#### Defined in

[shoukaku/src/Shoukaku.ts:75](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Shoukaku.ts#L75)

***

<a id="voiceconnectiontimeout" name="voiceconnectiontimeout" />

### voiceConnectionTimeout?

```ts
optional voiceConnectionTimeout: number;
```

Timeout before abort connection

#### Defined in

[shoukaku/src/Shoukaku.ts:83](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Shoukaku.ts#L83)
