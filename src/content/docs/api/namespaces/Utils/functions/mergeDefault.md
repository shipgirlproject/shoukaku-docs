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
| `T` *extends* `Record`\<`string`, `any`\> |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `def` | `T` | Default options |
| `given` | `T` | User input |

## Returns

`Required`\<`T`\>

Merged options

## Defined in

[shoukaku/src/Utils.ts:35](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/Utils.ts#L35)
