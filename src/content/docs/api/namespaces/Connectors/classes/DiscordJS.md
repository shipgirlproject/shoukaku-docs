---
editUrl: false
next: false
prev: false
title: "DiscordJS"
---

## Extends

- [`Connector`](/api/classes/connector/)

## Constructors

### new DiscordJS()

> **new DiscordJS**(`client`): [`DiscordJS`](/api/namespaces/connectors/classes/discordjs/)

#### Parameters

• **client**: `any`

#### Returns

[`DiscordJS`](/api/namespaces/connectors/classes/discordjs/)

#### Inherited from

[`Connector`](/api/classes/connector/).[`constructor`](/api/classes/connector/#constructors)

#### Defined in

[src/connectors/Connector.ts:15](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/connectors/Connector.ts#L15)

## Methods

### getId()

> **getId**(): `string`

#### Returns

`string`

#### Overrides

[`Connector`](/api/classes/connector/).[`getId`](/api/classes/connector/#getid)

#### Defined in

[src/connectors/libs/DiscordJS.ts:10](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/connectors/libs/DiscordJS.ts#L10)

***

### listen()

> **listen**(`nodes`): `void`

#### Parameters

• **nodes**: [`NodeOption`](/api/interfaces/nodeoption/)[]

#### Returns

`void`

#### Overrides

[`Connector`](/api/classes/connector/).[`listen`](/api/classes/connector/#listen)

#### Defined in

[src/connectors/libs/DiscordJS.ts:14](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/connectors/libs/DiscordJS.ts#L14)

***

### sendPacket()

> **sendPacket**(`shardId`, `payload`, `important`): `void`

#### Parameters

• **shardId**: `number`

• **payload**: `any`

• **important**: `boolean`

#### Returns

`void`

#### Overrides

[`Connector`](/api/classes/connector/).[`sendPacket`](/api/classes/connector/#sendpacket)

#### Defined in

[src/connectors/libs/DiscordJS.ts:6](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/connectors/libs/DiscordJS.ts#L6)

***

### set()

> **set**(`manager`): [`Connector`](/api/classes/connector/)

#### Parameters

• **manager**: [`Shoukaku`](/api/classes/shoukaku/)

#### Returns

[`Connector`](/api/classes/connector/)

#### Inherited from

[`Connector`](/api/classes/connector/).[`set`](/api/classes/connector/#set)

#### Defined in

[src/connectors/Connector.ts:20](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/connectors/Connector.ts#L20)
