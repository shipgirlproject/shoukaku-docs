---
editUrl: false
next: false
prev: false
title: "ShoukakuOptions"
---

## Properties

<a id="moveondisconnect" name="moveondisconnect"></a>

### moveOnDisconnect?

```ts
optional moveOnDisconnect: boolean;
```

Whether to move players to a different Lavalink node when a node disconnects

#### Defined in

[Shoukaku.ts:72](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/Shoukaku.ts#L72)

***

<a id="noderesolver" name="noderesolver"></a>

### nodeResolver()?

```ts
optional nodeResolver: (nodes: Map<string, Node>, connection?: Connection) => undefined | Node;
```

Node Resolver to use if you want to customize it

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `nodes` | `Map`\<`string`, [`Node`](/api/classes/node/)\> |
| `connection`? | [`Connection`](/api/classes/connection/) |

#### Returns

`undefined` \| [`Node`](/api/classes/node/)

#### Defined in

[Shoukaku.ts:88](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/Shoukaku.ts#L88)

***

<a id="reconnectinterval" name="reconnectinterval"></a>

### reconnectInterval?

```ts
optional reconnectInterval: number;
```

Timeout before trying to reconnect

#### Defined in

[Shoukaku.ts:64](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/Shoukaku.ts#L64)

***

<a id="reconnecttries" name="reconnecttries"></a>

### reconnectTries?

```ts
optional reconnectTries: number;
```

Number of times to try and reconnect to Lavalink before giving up

#### Defined in

[Shoukaku.ts:60](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/Shoukaku.ts#L60)

***

<a id="resttimeout" name="resttimeout"></a>

### restTimeout?

```ts
optional restTimeout: number;
```

Time to wait for a response from the Lavalink REST API before giving up

#### Defined in

[Shoukaku.ts:68](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/Shoukaku.ts#L68)

***

<a id="resume" name="resume"></a>

### resume?

```ts
optional resume: boolean;
```

Whether to resume a connection on disconnect to Lavalink (Server Side) (Note: DOES NOT RESUME WHEN THE LAVALINK SERVER DIES)

#### Defined in

[Shoukaku.ts:48](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/Shoukaku.ts#L48)

***

<a id="resumebylibrary" name="resumebylibrary"></a>

### resumeByLibrary?

```ts
optional resumeByLibrary: boolean;
```

Whether to resume the players by doing it in the library side (Client Side) (Note: TRIES TO RESUME REGARDLESS OF WHAT HAPPENED ON A LAVALINK SERVER)

#### Defined in

[Shoukaku.ts:56](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/Shoukaku.ts#L56)

***

<a id="resumetimeout" name="resumetimeout"></a>

### resumeTimeout?

```ts
optional resumeTimeout: number;
```

Time to wait before lavalink starts to destroy the players of the disconnected client

#### Defined in

[Shoukaku.ts:52](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/Shoukaku.ts#L52)

***

<a id="structures" name="structures"></a>

### structures?

```ts
optional structures: Structures;
```

Custom structures for shoukaku to use

#### Defined in

[Shoukaku.ts:80](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/Shoukaku.ts#L80)

***

<a id="useragent" name="useragent"></a>

### userAgent?

```ts
optional userAgent: string;
```

User Agent to use when making requests to Lavalink

#### Defined in

[Shoukaku.ts:76](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/Shoukaku.ts#L76)

***

<a id="voiceconnectiontimeout" name="voiceconnectiontimeout"></a>

### voiceConnectionTimeout?

```ts
optional voiceConnectionTimeout: number;
```

Timeout before abort connection

#### Defined in

[Shoukaku.ts:84](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/Shoukaku.ts#L84)
