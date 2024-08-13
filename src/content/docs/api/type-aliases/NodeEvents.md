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

[shoukaku/src/node/Node.ts:80](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/node/Node.ts#L80)
