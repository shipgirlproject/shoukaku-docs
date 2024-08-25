---
editUrl: false
next: false
prev: false
title: "PlayerEvents"
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
| `closed` | [[`WebSocketClosedEvent`](/api/interfaces/websocketclosedevent/)] | Emitted when the current websocket connection is closed | [shoukaku/src/guild/Player.ts:144](https://github.com/shipgirlproject/shoukaku/blob/9d5588e950f8b8cbe3cdd5386a275943ff6fdba1/src/guild/Player.ts#L144) |
| `end` | [[`TrackEndEvent`](/api/interfaces/trackendevent/)] | Emitted when the current playing track ends | [shoukaku/src/guild/Player.ts:134](https://github.com/shipgirlproject/shoukaku/blob/9d5588e950f8b8cbe3cdd5386a275943ff6fdba1/src/guild/Player.ts#L134) |
| `exception` | [[`TrackExceptionEvent`](/api/interfaces/trackexceptionevent/)] | Emitted when there is an error caused by the current playing track | [shoukaku/src/guild/Player.ts:154](https://github.com/shipgirlproject/shoukaku/blob/9d5588e950f8b8cbe3cdd5386a275943ff6fdba1/src/guild/Player.ts#L154) |
| `resumed` | [[`Player`](/api/classes/player/)] | Emitted when the library manages to resume the player | [shoukaku/src/guild/Player.ts:159](https://github.com/shipgirlproject/shoukaku/blob/9d5588e950f8b8cbe3cdd5386a275943ff6fdba1/src/guild/Player.ts#L159) |
| `start` | [[`TrackStartEvent`](/api/interfaces/trackstartevent/)] | Emitted when a new track starts | [shoukaku/src/guild/Player.ts:149](https://github.com/shipgirlproject/shoukaku/blob/9d5588e950f8b8cbe3cdd5386a275943ff6fdba1/src/guild/Player.ts#L149) |
| `stuck` | [[`TrackStuckEvent`](/api/interfaces/trackstuckevent/)] | Emitted when the current playing track gets stuck due to an error | [shoukaku/src/guild/Player.ts:139](https://github.com/shipgirlproject/shoukaku/blob/9d5588e950f8b8cbe3cdd5386a275943ff6fdba1/src/guild/Player.ts#L139) |
| `update` | [[`PlayerUpdate`](/api/interfaces/playerupdate/)] | Emitted when a playerUpdate even is received from Lavalink | [shoukaku/src/guild/Player.ts:164](https://github.com/shipgirlproject/shoukaku/blob/9d5588e950f8b8cbe3cdd5386a275943ff6fdba1/src/guild/Player.ts#L164) |

## Defined in

[shoukaku/src/guild/Player.ts:129](https://github.com/shipgirlproject/shoukaku/blob/9d5588e950f8b8cbe3cdd5386a275943ff6fdba1/src/guild/Player.ts#L129)
