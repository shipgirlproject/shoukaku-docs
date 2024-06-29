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
| `buildTime` | `number` | [node/Node.ts:53](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Node.ts#L53) |
| `filters` | `string`[] | [node/Node.ts:58](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Node.ts#L58) |
| `git` | `NodeInfoGit` | [node/Node.ts:54](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Node.ts#L54) |
| `jvm` | `string` | [node/Node.ts:55](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Node.ts#L55) |
| `lavaplayer` | `string` | [node/Node.ts:56](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Node.ts#L56) |
| `plugins` | `NodeInfoPlugin`[] | [node/Node.ts:59](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Node.ts#L59) |
| `sourceManagers` | `string`[] | [node/Node.ts:57](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Node.ts#L57) |
| `version` | `NodeInfoVersion` | [node/Node.ts:52](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Node.ts#L52) |

## Defined in

[node/Node.ts:51](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/node/Node.ts#L51)
