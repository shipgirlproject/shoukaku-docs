---
editUrl: false
next: false
prev: false
title: Connector
slug: 3.4.2/apiclasses/connector
---

## Extended by

* [`DiscordJS`](/3.4.2/api/namespaces/connectors/classes/discordjs/)
* [`Eris`](/3.4.2/api/namespaces/connectors/classes/eris/)
* [`OceanicJS`](/3.4.2/api/namespaces/connectors/classes/oceanicjs/)

## Constructors

### new Connector()

> **new Connector**(`client`): [`Connector`](/3.4.2/api/classes/connector/)

#### Parameters

• **client**: `any`

#### Returns

[`Connector`](/3.4.2/api/classes/connector/)

#### Defined in

[src/connectors/Connector.ts:13](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/connectors/Connector.ts#L13)

## Methods

### getId()

> `abstract` **getId**(): `string`

#### Returns

`string`

#### Defined in

[src/connectors/Connector.ts:34](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/connectors/Connector.ts#L34)

***

### listen()

> `abstract` **listen**(`nodes`): `void`

#### Parameters

• **nodes**: [`NodeOption`](/3.4.2/api/interfaces/nodeoption/)\[]

#### Returns

`void`

#### Defined in

[src/connectors/Connector.ts:38](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/connectors/Connector.ts#L38)

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

[src/connectors/Connector.ts:36](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/connectors/Connector.ts#L36)

***

### set()

> **set**(`manager`): [`Connector`](/3.4.2/api/classes/connector/)

#### Parameters

• **manager**: [`Shoukaku`](/3.4.2/api/classes/shoukaku/)

#### Returns

[`Connector`](/3.4.2/api/classes/connector/)

#### Defined in

[src/connectors/Connector.ts:18](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/connectors/Connector.ts#L18)
