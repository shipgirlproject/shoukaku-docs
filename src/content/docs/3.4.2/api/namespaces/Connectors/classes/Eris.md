---
editUrl: false
next: false
prev: false
title: Eris
slug: 3.4.2/apinamespacesconnectorsclasses/eris
---

## Extends

* [`Connector`](/3.4.2/api/classes/connector/)

## Constructors

### new Eris()

> **new Eris**(`client`): [`Eris`](/3.4.2/api/namespaces/connectors/classes/eris/)

#### Parameters

• **client**: `any`

#### Returns

[`Eris`](/3.4.2/api/namespaces/connectors/classes/eris/)

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

[src/connectors/libs/Eris.ts:10](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/connectors/libs/Eris.ts#L10)

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

[src/connectors/libs/Eris.ts:14](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/connectors/libs/Eris.ts#L14)

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

[src/connectors/libs/Eris.ts:6](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/connectors/libs/Eris.ts#L6)

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
