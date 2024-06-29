---
editUrl: false
next: false
prev: false
title: Connector
slug: 4.0.1/apiclasses/connector
---

## Extended by

* [`DiscordJS`](/4.0.1/api/namespaces/connectors/classes/discordjs/)
* [`Eris`](/4.0.1/api/namespaces/connectors/classes/eris/)
* [`OceanicJS`](/4.0.1/api/namespaces/connectors/classes/oceanicjs/)

## Constructors

### new Connector()

> **new Connector**(`client`): [`Connector`](/4.0.1/api/classes/connector/)

#### Parameters

• **client**: `any`

#### Returns

[`Connector`](/4.0.1/api/classes/connector/)

#### Defined in

[src/connectors/Connector.ts:15](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/connectors/Connector.ts#L15)

## Methods

### getId()

> `abstract` **getId**(): `string`

#### Returns

`string`

#### Defined in

[src/connectors/Connector.ts:41](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/connectors/Connector.ts#L41)

***

### listen()

> `abstract` **listen**(`nodes`): `void`

#### Parameters

• **nodes**: [`NodeOption`](/4.0.1/api/interfaces/nodeoption/)\[]

#### Returns

`void`

#### Defined in

[src/connectors/Connector.ts:45](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/connectors/Connector.ts#L45)

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

[src/connectors/Connector.ts:43](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/connectors/Connector.ts#L43)

***

### set()

> **set**(`manager`): [`Connector`](/4.0.1/api/classes/connector/)

#### Parameters

• **manager**: [`Shoukaku`](/4.0.1/api/classes/shoukaku/)

#### Returns

[`Connector`](/4.0.1/api/classes/connector/)

#### Defined in

[src/connectors/Connector.ts:20](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/connectors/Connector.ts#L20)
