---
editUrl: false
next: false
prev: false
title: OceanicJS
slug: 3.4.2/apinamespacesconnectorsclasses/oceanicjs
---

## Extends

* [`Connector`](/3.4.2/api/classes/connector/)

## Constructors

### new OceanicJS()

> **new OceanicJS**(`client`): [`OceanicJS`](/3.4.2/api/namespaces/connectors/classes/oceanicjs/)

#### Parameters

• **client**: `any`

#### Returns

[`OceanicJS`](/3.4.2/api/namespaces/connectors/classes/oceanicjs/)

#### Inherited from

[`Connector`](/3.4.2/api/classes/connector/).[`constructor`](/3.4.2/api/classes/connector/#constructors)

#### Defined in

[src/connectors/Connector.ts:13](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/connectors/Connector.ts#L13)

## Methods

### getId()

> **getId**(): `string`

#### Returns

`string`

#### Overrides

[`Connector`](/3.4.2/api/classes/connector/).[`getId`](/3.4.2/api/classes/connector/#getid)

#### Defined in

[src/connectors/libs/OceanicJS.ts:10](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/connectors/libs/OceanicJS.ts#L10)

***

### listen()

> **listen**(`nodes`): `void`

#### Parameters

• **nodes**: [`NodeOption`](/3.4.2/api/interfaces/nodeoption/)\[]

#### Returns

`void`

#### Overrides

[`Connector`](/3.4.2/api/classes/connector/).[`listen`](/3.4.2/api/classes/connector/#listen)

#### Defined in

[src/connectors/libs/OceanicJS.ts:14](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/connectors/libs/OceanicJS.ts#L14)

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

[`Connector`](/3.4.2/api/classes/connector/).[`sendPacket`](/3.4.2/api/classes/connector/#sendpacket)

#### Defined in

[src/connectors/libs/OceanicJS.ts:6](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/connectors/libs/OceanicJS.ts#L6)

***

### set()

> **set**(`manager`): [`Connector`](/3.4.2/api/classes/connector/)

#### Parameters

• **manager**: [`Shoukaku`](/3.4.2/api/classes/shoukaku/)

#### Returns

[`Connector`](/3.4.2/api/classes/connector/)

#### Inherited from

[`Connector`](/3.4.2/api/classes/connector/).[`set`](/3.4.2/api/classes/connector/#set)

#### Defined in

[src/connectors/Connector.ts:18](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/connectors/Connector.ts#L18)
