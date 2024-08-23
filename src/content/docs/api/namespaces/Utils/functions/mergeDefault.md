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

[shoukaku/src/Utils.ts:35](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Utils.ts#L35)
