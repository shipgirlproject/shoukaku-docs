---
editUrl: false
next: false
prev: false
title: "PlayerEvents"
---

## Events

### closed

> **closed**: [[`WebSocketClosedEvent`](/api/interfaces/websocketclosedevent/)]

Emitted when the current websocket connection is closed

#### Defined in

[src/guild/Player.ts:140](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/guild/Player.ts#L140)

***

### end

> **end**: [[`TrackEndEvent`](/api/interfaces/trackendevent/)]

Emitted when the current playing track ends

#### Defined in

[src/guild/Player.ts:130](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/guild/Player.ts#L130)

***

### exception

> **exception**: [[`TrackExceptionEvent`](/api/interfaces/trackexceptionevent/)]

Emitted when there is an error caused by the current playing track

#### Defined in

[src/guild/Player.ts:150](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/guild/Player.ts#L150)

***

### resumed

> **resumed**: [[`Player`](/api/classes/player/)]

Emitted when the library manages to resume the player

#### Defined in

[src/guild/Player.ts:155](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/guild/Player.ts#L155)

***

### start

> **start**: [[`TrackStartEvent`](/api/interfaces/trackstartevent/)]

Emitted when a new track starts

#### Defined in

[src/guild/Player.ts:145](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/guild/Player.ts#L145)

***

### stuck

> **stuck**: [[`TrackStuckEvent`](/api/interfaces/trackstuckevent/)]

Emitted when the current playing track gets stuck due to an error

#### Defined in

[src/guild/Player.ts:135](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/guild/Player.ts#L135)

***

### update

> **update**: [[`PlayerUpdate`](/api/interfaces/playerupdate/)]

Emitted when a playerUpdate even is received from Lavalink

#### Defined in

[src/guild/Player.ts:160](https://github.com/shipgirlproject/shoukaku/blob/f3e4f8953c070c0cdfec493d072e6a22e3555895/src/guild/Player.ts#L160)
