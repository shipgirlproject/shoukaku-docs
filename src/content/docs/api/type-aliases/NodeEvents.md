---
editUrl: false
next: false
prev: false
title: "NodeEvents"
---

```ts
type NodeEvents: { [K in keyof ShoukakuEvents]: ShoukakuEvents[K] extends [unknown, ...(infer R)] ? R : never };
```

## Defined in

[shoukaku/src/node/Node.ts:80](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Node.ts#L80)
