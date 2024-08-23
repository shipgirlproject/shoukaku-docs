---
editUrl: false
next: false
prev: false
title: "RestError"
---

## Extends

- `Error`

## Constructors

<a id="constructors" name="constructors"></a>

### new RestError()

```ts
new RestError(__namedParameters: LavalinkRestError): RestError
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `LavalinkRestError` |

#### Returns

[`RestError`](/api/classes/resterror/)

#### Overrides

`Error.constructor`

#### Defined in

[shoukaku/src/node/Rest.ts:427](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/node/Rest.ts#L427)

## Properties

<a id="error" name="error"></a>

### error

```ts
error: string;
```

#### Defined in

[shoukaku/src/node/Rest.ts:423](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/node/Rest.ts#L423)

***

<a id="message" name="message"></a>

### message

```ts
message: string;
```

#### Inherited from

`Error.message`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1077

***

<a id="name" name="name"></a>

### name

```ts
name: string;
```

#### Inherited from

`Error.name`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1076

***

<a id="path" name="path"></a>

### path

```ts
path: string;
```

#### Defined in

[shoukaku/src/node/Rest.ts:425](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/node/Rest.ts#L425)

***

<a id="stack" name="stack"></a>

### stack?

```ts
optional stack: string;
```

#### Inherited from

`Error.stack`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1078

***

<a id="status" name="status"></a>

### status

```ts
status: number;
```

#### Defined in

[shoukaku/src/node/Rest.ts:422](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/node/Rest.ts#L422)

***

<a id="timestamp" name="timestamp"></a>

### timestamp

```ts
timestamp: number;
```

#### Defined in

[shoukaku/src/node/Rest.ts:421](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/node/Rest.ts#L421)

***

<a id="trace" name="trace"></a>

### trace?

```ts
optional trace: string;
```

#### Defined in

[shoukaku/src/node/Rest.ts:424](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/node/Rest.ts#L424)