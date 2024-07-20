---
editUrl: false
next: false
prev: false
title: "NodeInfo"
---

```ts
type NodeInfo: {
  buildTime: number;
  filters: string[];
  git: NodeInfoGit;
  jvm: string;
  lavaplayer: string;
  plugins: NodeInfoPlugin[];
  sourceManagers: string[];
  version: NodeInfoVersion;
};
```

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `buildTime` | `number` | [node/Node.ts:61](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/node/Node.ts#L61) |
| `filters` | `string`[] | [node/Node.ts:66](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/node/Node.ts#L66) |
| `git` | [`NodeInfoGit`](/api/type-aliases/nodeinfogit/) | [node/Node.ts:62](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/node/Node.ts#L62) |
| `jvm` | `string` | [node/Node.ts:63](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/node/Node.ts#L63) |
| `lavaplayer` | `string` | [node/Node.ts:64](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/node/Node.ts#L64) |
| `plugins` | [`NodeInfoPlugin`](/api/type-aliases/nodeinfoplugin/)[] | [node/Node.ts:67](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/node/Node.ts#L67) |
| `sourceManagers` | `string`[] | [node/Node.ts:65](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/node/Node.ts#L65) |
| `version` | [`NodeInfoVersion`](/api/type-aliases/nodeinfoversion/) | [node/Node.ts:60](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/node/Node.ts#L60) |

## Defined in

[node/Node.ts:59](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/node/Node.ts#L59)
