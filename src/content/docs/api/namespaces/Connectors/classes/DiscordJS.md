---
editUrl: false
next: false
prev: false
title: "DiscordJS"
---

## Extends

- [`Connector`](/api/classes/connector/)

## Constructors

<a id="constructors" name="constructors"></a>

### new DiscordJS()

```ts
new DiscordJS(client: any): DiscordJS
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | `any` |

#### Returns

[`DiscordJS`](/api/namespaces/connectors/classes/discordjs/)

#### Inherited from

[`Connector`](/api/classes/connector/).[`constructor`](/api/classes/connector/#constructors)

#### Defined in

[connectors/Connector.ts:15](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/connectors/Connector.ts#L15)

## Methods

<a id="getid" name="getid"></a>

### getId()

```ts
getId(): string
```

#### Returns

`string`

#### Overrides

[`Connector`](/api/classes/connector/).[`getId`](/api/classes/connector/#getid)

#### Defined in

[connectors/libs/DiscordJS.ts:10](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/connectors/libs/DiscordJS.ts#L10)

***

<a id="listen" name="listen"></a>

### listen()

```ts
listen(nodes: NodeOption[]): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `nodes` | [`NodeOption`](/api/interfaces/nodeoption/)[] |

#### Returns

`void`

#### Overrides

[`Connector`](/api/classes/connector/).[`listen`](/api/classes/connector/#listen)

#### Defined in

[connectors/libs/DiscordJS.ts:14](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/connectors/libs/DiscordJS.ts#L14)

***

<a id="sendpacket" name="sendpacket"></a>

### sendPacket()

```ts
sendPacket(
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

#### Overrides

[`Connector`](/api/classes/connector/).[`sendPacket`](/api/classes/connector/#sendpacket)

#### Defined in

[connectors/libs/DiscordJS.ts:6](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/connectors/libs/DiscordJS.ts#L6)

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

#### Inherited from

[`Connector`](/api/classes/connector/).[`set`](/api/classes/connector/#set)

#### Defined in

[connectors/Connector.ts:20](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/connectors/Connector.ts#L20)
