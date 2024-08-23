---
editUrl: false
next: false
prev: false
title: DiscordJS
slug: 4.1.0/apinamespacesconnectorsclasses/discordjs
---

## Extends

* [`Connector`](/4.1.0/api/classes/connector/)

## Constructors

<a id="constructors" name="constructors" />

### new DiscordJS()

```ts
new DiscordJS(client: any): DiscordJS
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | `any` |

#### Returns

[`DiscordJS`](/4.1.0/api/namespaces/connectors/classes/discordjs/)

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

[shoukaku/src/connectors/libs/DiscordJS.ts:11](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/connectors/libs/DiscordJS.ts#L11)

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

[shoukaku/src/connectors/libs/DiscordJS.ts:15](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/connectors/libs/DiscordJS.ts#L15)

***

<a id="sendpacket" name="sendpacket" />

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

[`Connector`](/4.1.0/api/classes/connector/).[`sendPacket`](/4.1.0/api/classes/connector/#sendpacket)

#### Defined in

[shoukaku/src/connectors/libs/DiscordJS.ts:7](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/connectors/libs/DiscordJS.ts#L7)

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
