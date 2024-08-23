---
editUrl: false
next: false
prev: false
title: "ShoukakuEvents"
---

```ts
type ShoukakuEvents: {
  close: [string, number, string];
  debug: [string, string];
  disconnect: [string, number];
  error: [string, Error];
  raw: [string, unknown];
  ready: [string, boolean, boolean];
  reconnecting: [string, number, number];
};
```

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `close` | [`string`, `number`, `string`] | Emitted when a websocket connection to Lavalink closes | [shoukaku/src/Shoukaku.ts:126](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Shoukaku.ts#L126) |
| `debug` | [`string`, `string`] | Emitted when data useful for debugging is produced | [shoukaku/src/Shoukaku.ts:111](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Shoukaku.ts#L111) |
| `disconnect` | [`string`, `number`] | Emitted when a websocket connection to Lavalink disconnects | [shoukaku/src/Shoukaku.ts:131](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Shoukaku.ts#L131) |
| `error` | [`string`, `Error`] | Emitted when an error occurs | [shoukaku/src/Shoukaku.ts:116](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Shoukaku.ts#L116) |
| `raw` | [`string`, `unknown`] | Emitted when a raw message is received from Lavalink | [shoukaku/src/Shoukaku.ts:136](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Shoukaku.ts#L136) |
| `ready` | [`string`, `boolean`, `boolean`] | Emitted when Shoukaku is ready to receive operations | [shoukaku/src/Shoukaku.ts:121](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Shoukaku.ts#L121) |
| `reconnecting` | [`string`, `number`, `number`] | Emitted when reconnect tries are occurring and how many tries are left | [shoukaku/src/Shoukaku.ts:106](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Shoukaku.ts#L106) |

## Defined in

[shoukaku/src/Shoukaku.ts:101](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Shoukaku.ts#L101)
