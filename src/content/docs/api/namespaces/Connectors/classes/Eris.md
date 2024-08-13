---
editUrl: false
next: false
prev: false
title: "Eris"
---

## Extends

- [`Connector`](/api/classes/connector/)

## Constructors

<a id="constructors" name="constructors"></a>

### new Eris()

```ts
new Eris(client: any): Eris
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | `any` |

#### Returns

[`Eris`](/api/namespaces/connectors/classes/eris/)

#### Inherited from

[`Connector`](/api/classes/connector/).[`constructor`](/api/classes/connector/#constructors)

#### Defined in

[shoukaku/src/connectors/Connector.ts:17](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/connectors/Connector.ts#L17)

## Methods

<a id="getid" name="getid"></a>

### getId()

```ts
getId(): string
```

#### Returns

`string`

#### Overrides

[`Connector`](/api/classes/connector/).[`getId`](/api/classes/connector/#getid)

#### Defined in

[shoukaku/src/connectors/libs/Eris.ts:11](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/connectors/libs/Eris.ts#L11)

***

<a id="listen" name="listen"></a>

### listen()

```ts
listen(nodes: NodeOption[]): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `nodes` | [`NodeOption`](/api/interfaces/nodeoption/)[] |

#### Returns

`void`

#### Overrides

[`Connector`](/api/classes/connector/).[`listen`](/api/classes/connector/#listen)

#### Defined in

[shoukaku/src/connectors/libs/Eris.ts:15](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/connectors/libs/Eris.ts#L15)

***

<a id="sendpacket" name="sendpacket"></a>

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

[`Connector`](/api/classes/connector/).[`sendPacket`](/api/classes/connector/#sendpacket)

#### Defined in

[shoukaku/src/connectors/libs/Eris.ts:7](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/connectors/libs/Eris.ts#L7)

***

<a id="set" name="set"></a>

### set()

```ts
set(manager: Shoukaku): Connector
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `manager` | [`Shoukaku`](/api/classes/shoukaku/) |

#### Returns

[`Connector`](/api/classes/connector/)

#### Inherited from

[`Connector`](/api/classes/connector/).[`set`](/api/classes/connector/#set)

#### Defined in

[shoukaku/src/connectors/Connector.ts:23](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/connectors/Connector.ts#L23)
