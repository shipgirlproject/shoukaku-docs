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

[connectors/Connector.ts:15](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/connectors/Connector.ts#L15)

## Methods

<a id="getid" name="getid"></a>

### getId()

```ts
abstract getId(): string
```

#### Returns

`string`

#### Defined in

[connectors/Connector.ts:41](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/connectors/Connector.ts#L41)

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

[connectors/Connector.ts:45](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/connectors/Connector.ts#L45)

***

<a id="sendpacket" name="sendpacket"></a>

### sendPacket()

```ts
abstract sendPacket(
   shardId: number, 
   payload: any, 
   important: boolean): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `shardId` | `number` |
| `payload` | `any` |
| `important` | `boolean` |

#### Returns

`void`

#### Defined in

[connectors/Connector.ts:43](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/connectors/Connector.ts#L43)

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

[connectors/Connector.ts:20](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/connectors/Connector.ts#L20)
