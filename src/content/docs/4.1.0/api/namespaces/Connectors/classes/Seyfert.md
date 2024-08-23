---
editUrl: false
next: false
prev: false
title: Seyfert
slug: 4.1.0/apinamespacesconnectorsclasses/seyfert
---

## Extends

* [`Connector`](/4.1.0/api/classes/connector/)

## Constructors

<a id="constructors" name="constructors" />

### new Seyfert()

```ts
new Seyfert(client: any): Seyfert
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | `any` |

#### Returns

[`Seyfert`](/4.1.0/api/namespaces/connectors/classes/seyfert/)

#### Inherited from

[`Connector`](/4.1.0/api/classes/connector/).[`constructor`](/4.1.0/api/classes/connector/#constructors)

#### Defined in

[shoukaku/src/connectors/Connector.ts:17](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/connectors/Connector.ts#L17)

## Methods

<a id="getid" name="getid" />

### getId()

```ts
getId(): string
```

#### Returns

`string`

#### Overrides

[`Connector`](/4.1.0/api/classes/connector/).[`getId`](/4.1.0/api/classes/connector/#getid)

#### Defined in

[shoukaku/src/connectors/libs/Seyfert.ts:11](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/connectors/libs/Seyfert.ts#L11)

***

<a id="listen" name="listen" />

### listen()

```ts
listen(nodes: NodeOption[]): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `nodes` | [`NodeOption`](/4.1.0/api/interfaces/nodeoption/)\[] |

#### Returns

`void`

#### Overrides

[`Connector`](/4.1.0/api/classes/connector/).[`listen`](/4.1.0/api/classes/connector/#listen)

#### Defined in

[shoukaku/src/connectors/libs/Seyfert.ts:15](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/connectors/libs/Seyfert.ts#L15)

***

<a id="sendpacket" name="sendpacket" />

### sendPacket()

```ts
sendPacket(
   shardId: number, 
   payload: unknown, 
   important: boolean): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `shardId` | `number` |
| `payload` | `unknown` |
| `important` | `boolean` |

#### Returns

`void`

#### Overrides

[`Connector`](/4.1.0/api/classes/connector/).[`sendPacket`](/4.1.0/api/classes/connector/#sendpacket)

#### Defined in

[shoukaku/src/connectors/libs/Seyfert.ts:7](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/connectors/libs/Seyfert.ts#L7)

***

<a id="set" name="set" />

### set()

```ts
set(manager: Shoukaku): Connector
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `manager` | [`Shoukaku`](/4.1.0/api/classes/shoukaku/) |

#### Returns

[`Connector`](/4.1.0/api/classes/connector/)

#### Inherited from

[`Connector`](/4.1.0/api/classes/connector/).[`set`](/4.1.0/api/classes/connector/#set)

#### Defined in

[shoukaku/src/connectors/Connector.ts:23](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/connectors/Connector.ts#L23)
