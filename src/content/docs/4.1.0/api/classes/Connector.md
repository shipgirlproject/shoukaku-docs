---
editUrl: false
next: false
prev: false
title: Connector
slug: 4.1.0/apiclasses/connector
---

## Extended by

* [`DiscordJS`](/4.1.0/api/namespaces/connectors/classes/discordjs/)
* [`Eris`](/4.1.0/api/namespaces/connectors/classes/eris/)
* [`OceanicJS`](/4.1.0/api/namespaces/connectors/classes/oceanicjs/)
* [`Seyfert`](/4.1.0/api/namespaces/connectors/classes/seyfert/)

## Constructors

<a id="constructors" name="constructors" />

### new Connector()

```ts
new Connector(client: any): Connector
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | `any` |

#### Returns

[`Connector`](/4.1.0/api/classes/connector/)

#### Defined in

[shoukaku/src/connectors/Connector.ts:17](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/connectors/Connector.ts#L17)

## Methods

<a id="getid" name="getid" />

### getId()

```ts
abstract getId(): string
```

#### Returns

`string`

#### Defined in

[shoukaku/src/connectors/Connector.ts:44](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/connectors/Connector.ts#L44)

***

<a id="listen" name="listen" />

### listen()

```ts
abstract listen(nodes: NodeOption[]): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `nodes` | [`NodeOption`](/4.1.0/api/interfaces/nodeoption/)\[] |

#### Returns

`void`

#### Defined in

[shoukaku/src/connectors/Connector.ts:48](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/connectors/Connector.ts#L48)

***

<a id="sendpacket" name="sendpacket" />

### sendPacket()

```ts
abstract sendPacket(
   shardId: number, 
   payload: unknown, 
   important: boolean): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `shardId` | `number` |
| `payload` | `unknown` |
| `important` | `boolean` |

#### Returns

`void`

#### Defined in

[shoukaku/src/connectors/Connector.ts:46](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/connectors/Connector.ts#L46)

***

<a id="set" name="set" />

### set()

```ts
set(manager: Shoukaku): Connector
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `manager` | [`Shoukaku`](/4.1.0/api/classes/shoukaku/) |

#### Returns

[`Connector`](/4.1.0/api/classes/connector/)

#### Defined in

[shoukaku/src/connectors/Connector.ts:23](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/connectors/Connector.ts#L23)
