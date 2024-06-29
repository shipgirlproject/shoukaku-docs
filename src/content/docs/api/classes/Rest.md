---
editUrl: false
next: false
prev: false
title: "Rest"
---

Wrapper around Lavalink REST API

## Constructors

<a id="constructors" name="constructors"></a>

### new Rest()

```ts
new Rest(node: Node, options: NodeOption): Rest
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `node` | [`Node`](/api/classes/node/) | An instance of Node |
| `options` | [`NodeOption`](/api/interfaces/nodeoption/) | The options to initialize this rest class |

#### Returns

[`Rest`](/api/classes/rest/)

#### Defined in

[node/Rest.ts:192](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Rest.ts#L192)

## Methods

<a id="decode" name="decode"></a>

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

`Promise`\<`undefined` \| [`Track`](/api/interfaces/track/)\>

Promise that resolves to a track

#### Defined in

[node/Rest.ts:221](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Rest.ts#L221)

***

<a id="destroyplayer" name="destroyplayer"></a>

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

`Promise`\<`void`\>

#### Defined in

[node/Rest.ts:275](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Rest.ts#L275)

***

<a id="getlavalinkinfo" name="getlavalinkinfo"></a>

### getLavalinkInfo()

```ts
getLavalinkInfo(): Promise<undefined | NodeInfo>
```

Get Lavalink info

#### Returns

`Promise`\<`undefined` \| [`NodeInfo`](/api/type-aliases/nodeinfo/)\>

#### Defined in

[node/Rest.ts:344](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Rest.ts#L344)

***

<a id="getplayer" name="getplayer"></a>

### getPlayer()

```ts
getPlayer(guildId: string): Promise<undefined | LavalinkPlayer>
```

Gets all the player with the specified sessionId

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `guildId` | `string` |

#### Returns

`Promise`\<`undefined` \| [`LavalinkPlayer`](/api/interfaces/lavalinkplayer/)\>

Promise that resolves to an array of Lavalink players

#### Defined in

[node/Rest.ts:245](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Rest.ts#L245)

***

<a id="getplayers" name="getplayers"></a>

### getPlayers()

```ts
getPlayers(): Promise<LavalinkPlayer[]>
```

Gets all the player with the specified sessionId

#### Returns

`Promise`\<[`LavalinkPlayer`](/api/interfaces/lavalinkplayer/)[]\>

Promise that resolves to an array of Lavalink players

#### Defined in

[node/Rest.ts:233](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Rest.ts#L233)

***

<a id="getrouteplannerstatus" name="getrouteplannerstatus"></a>

### getRoutePlannerStatus()

```ts
getRoutePlannerStatus(): Promise<undefined | RoutePlanner>
```

Get routeplanner status from Lavalink

#### Returns

`Promise`\<`undefined` \| [`RoutePlanner`](/api/interfaces/routeplanner/)\>

Promise that resolves to a routeplanner response

#### Defined in

[node/Rest.ts:317](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Rest.ts#L317)

***

<a id="resolve" name="resolve"></a>

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

`Promise`\<`undefined` \| [`LavalinkResponse`](/api/type-aliases/lavalinkresponse/)\>

A promise that resolves to a Lavalink response

#### Defined in

[node/Rest.ts:208](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Rest.ts#L208)

***

<a id="stats" name="stats"></a>

### stats()

```ts
stats(): Promise<undefined | NodeStats>
```

Gets the status of this node

#### Returns

`Promise`\<`undefined` \| [`NodeStats`](/api/interfaces/nodestats/)\>

Promise that resolves to a node stats response

#### Defined in

[node/Rest.ts:305](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Rest.ts#L305)

***

<a id="unmarkfailedaddress" name="unmarkfailedaddress"></a>

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

`Promise`\<`void`\>

#### Defined in

[node/Rest.ts:329](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Rest.ts#L329)

***

<a id="updateplayer" name="updateplayer"></a>

### updatePlayer()

```ts
updatePlayer(data: UpdatePlayerInfo): Promise<undefined | LavalinkPlayer>
```

Updates a Lavalink player

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | [`UpdatePlayerInfo`](/api/interfaces/updateplayerinfo/) | SessionId from Discord |

#### Returns

`Promise`\<`undefined` \| [`LavalinkPlayer`](/api/interfaces/lavalinkplayer/)\>

Promise that resolves to a Lavalink player

#### Defined in

[node/Rest.ts:258](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Rest.ts#L258)

***

<a id="updatesession" name="updatesession"></a>

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

`Promise`\<`undefined` \| [`SessionInfo`](/api/interfaces/sessioninfo/)\>

Promise that resolves to a Lavalink player

#### Defined in

[node/Rest.ts:289](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Rest.ts#L289)
