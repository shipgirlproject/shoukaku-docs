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

[shoukaku/src/node/Node.ts:86](https://github.com/shipgirlproject/shoukaku/blob/9d5588e950f8b8cbe3cdd5386a275943ff6fdba1/src/node/Node.ts#L86)
