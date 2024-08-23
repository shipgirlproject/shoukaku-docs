---
editUrl: false
next: false
prev: false
title: PlayerEvents
slug: 4.1.0/apitype-aliases/playerevents
---

```ts
type PlayerEvents: {
  closed: [WebSocketClosedEvent];
  end: [TrackEndEvent];
  exception: [TrackExceptionEvent];
  resumed: [Player];
  start: [TrackStartEvent];
  stuck: [TrackStuckEvent];
  update: [PlayerUpdate];
};
```

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `closed` | \[[`WebSocketClosedEvent`](/4.1.0/api/interfaces/websocketclosedevent/)] | Emitted when the current websocket connection is closed | [shoukaku/src/guild/Player.ts:144](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L144) |
| `end` | \[[`TrackEndEvent`](/4.1.0/api/interfaces/trackendevent/)] | Emitted when the current playing track ends | [shoukaku/src/guild/Player.ts:134](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L134) |
| `exception` | \[[`TrackExceptionEvent`](/4.1.0/api/interfaces/trackexceptionevent/)] | Emitted when there is an error caused by the current playing track | [shoukaku/src/guild/Player.ts:154](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L154) |
| `resumed` | \[[`Player`](/4.1.0/api/classes/player/)] | Emitted when the library manages to resume the player | [shoukaku/src/guild/Player.ts:159](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L159) |
| `start` | \[[`TrackStartEvent`](/4.1.0/api/interfaces/trackstartevent/)] | Emitted when a new track starts | [shoukaku/src/guild/Player.ts:149](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L149) |
| `stuck` | \[[`TrackStuckEvent`](/4.1.0/api/interfaces/trackstuckevent/)] | Emitted when the current playing track gets stuck due to an error | [shoukaku/src/guild/Player.ts:139](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L139) |
| `update` | \[[`PlayerUpdate`](/4.1.0/api/interfaces/playerupdate/)] | Emitted when a playerUpdate even is received from Lavalink | [shoukaku/src/guild/Player.ts:164](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L164) |

## Defined in

[shoukaku/src/guild/Player.ts:129](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L129)
