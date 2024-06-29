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

### new Connector()

> **new Connector**(`client`): [`Connector`](/api/classes/connector/)

#### Parameters

• **client**: `any`

#### Returns

[`Connector`](/api/classes/connector/)

#### Defined in

[src/connectors/Connector.ts:15](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/connectors/Connector.ts#L15)

## Methods

### getId()

> `abstract` **getId**(): `string`

#### Returns

`string`

#### Defined in

[src/connectors/Connector.ts:41](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/connectors/Connector.ts#L41)

***

### listen()

> `abstract` **listen**(`nodes`): `void`

#### Parameters

• **nodes**: [`NodeOption`](/api/interfaces/nodeoption/)[]

#### Returns

`void`

#### Defined in

[src/connectors/Connector.ts:45](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/connectors/Connector.ts#L45)

***

### sendPacket()

> `abstract` **sendPacket**(`shardId`, `payload`, `important`): `void`

#### Parameters

• **shardId**: `number`

• **payload**: `any`

• **important**: `boolean`

#### Returns

`void`

#### Defined in

[src/connectors/Connector.ts:43](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/connectors/Connector.ts#L43)

***

### set()

> **set**(`manager`): [`Connector`](/api/classes/connector/)

#### Parameters

• **manager**: [`Shoukaku`](/api/classes/shoukaku/)

#### Returns

[`Connector`](/api/classes/connector/)

#### Defined in

[src/connectors/Connector.ts:20](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/connectors/Connector.ts#L20)
