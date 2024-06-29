---
editUrl: false
next: false
prev: false
title: "PlayerEvents"
---

## Events

<a id="closed" name="closed"></a>

### closed

```ts
closed: [WebSocketClosedEvent];
```

Emitted when the current websocket connection is closed

#### Defined in

[guild/Player.ts:140](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L140)

***

<a id="end" name="end"></a>

### end

```ts
end: [TrackEndEvent];
```

Emitted when the current playing track ends

#### Defined in

[guild/Player.ts:130](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L130)

***

<a id="exception" name="exception"></a>

### exception

```ts
exception: [TrackExceptionEvent];
```

Emitted when there is an error caused by the current playing track

#### Defined in

[guild/Player.ts:150](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L150)

***

<a id="resumed" name="resumed"></a>

### resumed

```ts
resumed: [Player];
```

Emitted when the library manages to resume the player

#### Defined in

[guild/Player.ts:155](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L155)

***

<a id="start" name="start"></a>

### start

```ts
start: [TrackStartEvent];
```

Emitted when a new track starts

#### Defined in

[guild/Player.ts:145](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L145)

***

<a id="stuck" name="stuck"></a>

### stuck

```ts
stuck: [TrackStuckEvent];
```

Emitted when the current playing track gets stuck due to an error

#### Defined in

[guild/Player.ts:135](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L135)

***

<a id="update" name="update"></a>

### update

```ts
update: [PlayerUpdate];
```

Emitted when a playerUpdate even is received from Lavalink

#### Defined in

[guild/Player.ts:160](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L160)
