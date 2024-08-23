---
editUrl: false
next: false
prev: false
title: Rest
slug: 4.1.0/apiclasses/rest
---

Wrapper around Lavalink REST API

## Constructors

<a id="constructors" name="constructors" />

### new Rest()

```ts
new Rest(node: Node, options: NodeOption): Rest
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `node` | [`Node`](/4.1.0/api/classes/node/) | An instance of Node |
| `options` | [`NodeOption`](/4.1.0/api/interfaces/nodeoption/) | The options to initialize this rest class |

#### Returns

[`Rest`](/4.1.0/api/classes/rest/)

#### Defined in

[shoukaku/src/node/Rest.ts:188](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Rest.ts#L188)

## Methods

<a id="decode" name="decode" />

### decode()

```ts
decode(track: string): Promise<undefined | Track>
```

Decode a track

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `track` | `string` | Encoded track |

#### Returns

`Promise`\<`undefined` | [`Track`](/4.1.0/api/interfaces/track/)>

Promise that resolves to a track

#### Defined in

[shoukaku/src/node/Rest.ts:216](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Rest.ts#L216)

***

<a id="destroyplayer" name="destroyplayer" />

### destroyPlayer()

```ts
destroyPlayer(guildId: string): Promise<void>
```

Deletes a Lavalink player

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `guildId` | `string` | guildId where this player is |

#### Returns

`Promise`\<`void`>

#### Defined in

[shoukaku/src/node/Rest.ts:270](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Rest.ts#L270)

***

<a id="getlavalinkinfo" name="getlavalinkinfo" />

### getLavalinkInfo()

```ts
getLavalinkInfo(): Promise<undefined | NodeInfo>
```

Get Lavalink info

#### Returns

`Promise`\<`undefined` | [`NodeInfo`](/4.1.0/api/interfaces/nodeinfo/)>

#### Defined in

[shoukaku/src/node/Rest.ts:339](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Rest.ts#L339)

***

<a id="getplayer" name="getplayer" />

### getPlayer()

```ts
getPlayer(guildId: string): Promise<undefined | LavalinkPlayer>
```

Gets the player with the specified guildId

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `guildId` | `string` |

#### Returns

`Promise`\<`undefined` | [`LavalinkPlayer`](/4.1.0/api/interfaces/lavalinkplayer/)>

Promise that resolves to a Lavalink player

#### Defined in

[shoukaku/src/node/Rest.ts:240](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Rest.ts#L240)

***

<a id="getplayers" name="getplayers" />

### getPlayers()

```ts
getPlayers(): Promise<LavalinkPlayer[]>
```

Gets all the player with the specified sessionId

#### Returns

`Promise`\<[`LavalinkPlayer`](/4.1.0/api/interfaces/lavalinkplayer/)\[]>

Promise that resolves to an array of Lavalink players

#### Defined in

[shoukaku/src/node/Rest.ts:228](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Rest.ts#L228)

***

<a id="getrouteplannerstatus" name="getrouteplannerstatus" />

### getRoutePlannerStatus()

```ts
getRoutePlannerStatus(): Promise<undefined | RoutePlanner>
```

Get routeplanner status from Lavalink

#### Returns

`Promise`\<`undefined` | [`RoutePlanner`](/4.1.0/api/interfaces/routeplanner/)>

Promise that resolves to a routeplanner response

#### Defined in

[shoukaku/src/node/Rest.ts:312](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Rest.ts#L312)

***

<a id="resolve" name="resolve" />

### resolve()

```ts
resolve(identifier: string): Promise<undefined | LavalinkResponse>
```

Resolve a track

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `identifier` | `string` | Track ID |

#### Returns

`Promise`\<`undefined` | [`LavalinkResponse`](/4.1.0/api/type-aliases/lavalinkresponse/)>

A promise that resolves to a Lavalink response

#### Defined in

[shoukaku/src/node/Rest.ts:203](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Rest.ts#L203)

***

<a id="stats" name="stats" />

### stats()

```ts
stats(): Promise<undefined | Stats>
```

Gets the status of this node

#### Returns

`Promise`\<`undefined` | [`Stats`](/4.1.0/api/interfaces/stats/)>

Promise that resolves to a node stats response

#### Defined in

[shoukaku/src/node/Rest.ts:300](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Rest.ts#L300)

***

<a id="unmarkfailedaddress" name="unmarkfailedaddress" />

### unmarkFailedAddress()

```ts
unmarkFailedAddress(address: string): Promise<void>
```

Release blacklisted IP address into pool of IPs

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `address` | `string` | IP address |

#### Returns

`Promise`\<`void`>

#### Defined in

[shoukaku/src/node/Rest.ts:324](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Rest.ts#L324)

***

<a id="updateplayer" name="updateplayer" />

### updatePlayer()

```ts
updatePlayer(data: UpdatePlayerInfo): Promise<undefined | LavalinkPlayer>
```

Updates a Lavalink player

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | [`UpdatePlayerInfo`](/4.1.0/api/interfaces/updateplayerinfo/) | SessionId from Discord |

#### Returns

`Promise`\<`undefined` | [`LavalinkPlayer`](/4.1.0/api/interfaces/lavalinkplayer/)>

Promise that resolves to a Lavalink player

#### Defined in

[shoukaku/src/node/Rest.ts:253](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Rest.ts#L253)

***

<a id="updatesession" name="updatesession" />

### updateSession()

```ts
updateSession(resuming?: boolean, timeout?: number): Promise<undefined | SessionInfo>
```

Updates the session with a resume boolean and timeout

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `resuming`? | `boolean` | Whether resuming is enabled for this session or not |
| `timeout`? | `number` | Timeout to wait for resuming |

#### Returns

`Promise`\<`undefined` | [`SessionInfo`](/4.1.0/api/interfaces/sessioninfo/)>

Promise that resolves to a Lavalink player

#### Defined in

[shoukaku/src/node/Rest.ts:284](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Rest.ts#L284)
