---
editUrl: false
next: false
prev: false
title: "OceanicJS"
---

## Extends

- [`Connector`](/api/classes/connector/)

## Constructors

### new OceanicJS()

> **new OceanicJS**(`client`): [`OceanicJS`](/api/namespaces/connectors/classes/oceanicjs/)

#### Parameters

• **client**: `any`

#### Returns

[`OceanicJS`](/api/namespaces/connectors/classes/oceanicjs/)

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

[src/connectors/libs/OceanicJS.ts:10](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/connectors/libs/OceanicJS.ts#L10)

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

[src/connectors/libs/OceanicJS.ts:14](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/connectors/libs/OceanicJS.ts#L14)

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

[src/connectors/libs/OceanicJS.ts:6](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/connectors/libs/OceanicJS.ts#L6)

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
