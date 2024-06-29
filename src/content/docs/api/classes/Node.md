---
editUrl: false
next: false
prev: false
title: "Node"
---

Represents a Lavalink node

## Extends

- `EventEmitter`

## Constructors

<a id="constructors" name="constructors"></a>

### new Node()

```ts
new Node(manager: Shoukaku, options: NodeOption): Node
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `manager` | [`Shoukaku`](/api/classes/shoukaku/) | Shoukaku instance |
| `options` | [`NodeOption`](/api/interfaces/nodeoption/) | Options on creating this node |

#### Returns

[`Node`](/api/classes/node/)

#### Overrides

`EventEmitter.constructor`

#### Defined in

[node/Node.ts:146](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Node.ts#L146)

## Properties

<a id="group" name="group"></a>

### group?

```ts
readonly optional group: string;
```

Group in which this node is contained

#### Defined in

[node/Node.ts:92](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Node.ts#L92)

***

<a id="info" name="info"></a>

### info

```ts
info: null | NodeInfo;
```

Information about lavalink node

#### Defined in

[node/Node.ts:120](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Node.ts#L120)

***

<a id="manager" name="manager"></a>

### manager

```ts
readonly manager: Shoukaku;
```

Shoukaku class

#### Defined in

[node/Node.ts:80](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Node.ts#L80)

***

<a id="name" name="name"></a>

### name

```ts
readonly name: string;
```

Name of this node

#### Defined in

[node/Node.ts:88](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Node.ts#L88)

***

<a id="reconnects" name="reconnects"></a>

### reconnects

```ts
reconnects: number;
```

The number of reconnects to Lavalink

#### Defined in

[node/Node.ts:108](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Node.ts#L108)

***

<a id="rest" name="rest"></a>

### rest

```ts
readonly rest: Rest;
```

Lavalink rest API

#### Defined in

[node/Node.ts:84](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Node.ts#L84)

***

<a id="sessionid" name="sessionid"></a>

### sessionId

```ts
sessionId: null | string;
```

SessionId of this Lavalink connection (not to be confused with Discord SessionId)

#### Defined in

[node/Node.ts:128](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Node.ts#L128)

***

<a id="state" name="state"></a>

### state

```ts
state: State;
```

The state of this connection

#### Defined in

[node/Node.ts:112](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Node.ts#L112)

***

<a id="stats" name="stats"></a>

### stats

```ts
stats: null | NodeStats;
```

Statistics from Lavalink

#### Defined in

[node/Node.ts:116](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Node.ts#L116)

***

<a id="version" name="version"></a>

### version

```ts
readonly version: string;
```

Websocket version this node will use

#### Defined in

[node/Node.ts:96](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Node.ts#L96)

***

<a id="ws" name="ws"></a>

### ws

```ts
ws: null | WebSocket;
```

Websocket instance

#### Defined in

[node/Node.ts:124](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Node.ts#L124)

## Methods

<a id="connect" name="connect"></a>

### connect()

```ts
connect(): void
```

Connect to Lavalink

#### Returns

`void`

#### Defined in

[node/Node.ts:196](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Node.ts#L196)

***

<a id="disconnect" name="disconnect"></a>

### disconnect()

```ts
disconnect(code: number, reason?: string): void
```

Disconnect from lavalink

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `code` | `number` | Status code |
| `reason`? | `string` | Reason for disconnect |

#### Returns

`void`

#### Defined in

[node/Node.ts:226](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Node.ts#L226)

***

<a id="error" name="error"></a>

### error()

```ts
error(error: unknown): void
```

To emit error events easily

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `error` | `unknown` | error message |

#### Returns

`void`

#### Defined in

[node/Node.ts:318](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Node.ts#L318)
