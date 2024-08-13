---
editUrl: false
next: false
prev: false
title: "Connector"
---

## Extended by

- [`DiscordJS`](/api/namespaces/connectors/classes/discordjs/)
- [`Eris`](/api/namespaces/connectors/classes/eris/)
- [`OceanicJS`](/api/namespaces/connectors/classes/oceanicjs/)
- [`Seyfert`](/api/namespaces/connectors/classes/seyfert/)

## Constructors

<a id="constructors" name="constructors"></a>

### new Connector()

```ts
new Connector(client: any): Connector
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | `any` |

#### Returns

[`Connector`](/api/classes/connector/)

#### Defined in

[shoukaku/src/connectors/Connector.ts:17](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/connectors/Connector.ts#L17)

## Methods

<a id="getid" name="getid"></a>

### getId()

```ts
abstract getId(): string
```

#### Returns

`string`

#### Defined in

[shoukaku/src/connectors/Connector.ts:44](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/connectors/Connector.ts#L44)

***

<a id="listen" name="listen"></a>

### listen()

```ts
abstract listen(nodes: NodeOption[]): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `nodes` | [`NodeOption`](/api/interfaces/nodeoption/)[] |

#### Returns

`void`

#### Defined in

[shoukaku/src/connectors/Connector.ts:48](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/connectors/Connector.ts#L48)

***

<a id="sendpacket" name="sendpacket"></a>

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

[shoukaku/src/connectors/Connector.ts:46](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/connectors/Connector.ts#L46)

***

<a id="set" name="set"></a>

### set()

```ts
set(manager: Shoukaku): Connector
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `manager` | [`Shoukaku`](/api/classes/shoukaku/) |

#### Returns

[`Connector`](/api/classes/connector/)

#### Defined in

[shoukaku/src/connectors/Connector.ts:23](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/connectors/Connector.ts#L23)
