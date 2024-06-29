---
editUrl: false
next: false
prev: false
title: OceanicJS
slug: 4.0.1/apinamespacesconnectorsclasses/oceanicjs
---

## Extends

* [`Connector`](/4.0.1/api/classes/connector/)

## Constructors

### new OceanicJS()

> **new OceanicJS**(`client`): [`OceanicJS`](/4.0.1/api/namespaces/connectors/classes/oceanicjs/)

#### Parameters

• **client**: `any`

#### Returns

[`OceanicJS`](/4.0.1/api/namespaces/connectors/classes/oceanicjs/)

#### Inherited from

[`Connector`](/4.0.1/api/classes/connector/).[`constructor`](/4.0.1/api/classes/connector/#constructors)

#### Defined in

[src/connectors/Connector.ts:15](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/connectors/Connector.ts#L15)

## Methods

### getId()

> **getId**(): `string`

#### Returns

`string`

#### Overrides

[`Connector`](/4.0.1/api/classes/connector/).[`getId`](/4.0.1/api/classes/connector/#getid)

#### Defined in

[src/connectors/libs/OceanicJS.ts:10](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/connectors/libs/OceanicJS.ts#L10)

***

### listen()

> **listen**(`nodes`): `void`

#### Parameters

• **nodes**: [`NodeOption`](/4.0.1/api/interfaces/nodeoption/)\[]

#### Returns

`void`

#### Overrides

[`Connector`](/4.0.1/api/classes/connector/).[`listen`](/4.0.1/api/classes/connector/#listen)

#### Defined in

[src/connectors/libs/OceanicJS.ts:14](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/connectors/libs/OceanicJS.ts#L14)

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

[`Connector`](/4.0.1/api/classes/connector/).[`sendPacket`](/4.0.1/api/classes/connector/#sendpacket)

#### Defined in

[src/connectors/libs/OceanicJS.ts:6](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/connectors/libs/OceanicJS.ts#L6)

***

### set()

> **set**(`manager`): [`Connector`](/4.0.1/api/classes/connector/)

#### Parameters

• **manager**: [`Shoukaku`](/4.0.1/api/classes/shoukaku/)

#### Returns

[`Connector`](/4.0.1/api/classes/connector/)

#### Inherited from

[`Connector`](/4.0.1/api/classes/connector/).[`set`](/4.0.1/api/classes/connector/#set)

#### Defined in

[src/connectors/Connector.ts:20](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/connectors/Connector.ts#L20)
