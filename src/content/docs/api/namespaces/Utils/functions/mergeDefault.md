---
editUrl: false
next: false
prev: false
title: "mergeDefault"
---

```ts
function mergeDefault<T>(def: T, given: T): Required<T>
```

Merge the default options to user input

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* \{\} |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `def` | `T` | Default options |
| `given` | `T` | User input |

## Returns

`Required`\<`T`\>

Merged options

## Defined in

[Utils.ts:9](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/Utils.ts#L9)
