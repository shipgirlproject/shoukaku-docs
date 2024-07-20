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

[guild/Player.ts:141](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/guild/Player.ts#L141)

***

<a id="end" name="end"></a>

### end

```ts
end: [TrackEndEvent];
```

Emitted when the current playing track ends

#### Defined in

[guild/Player.ts:131](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/guild/Player.ts#L131)

***

<a id="exception" name="exception"></a>

### exception

```ts
exception: [TrackExceptionEvent];
```

Emitted when there is an error caused by the current playing track

#### Defined in

[guild/Player.ts:151](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/guild/Player.ts#L151)

***

<a id="resumed" name="resumed"></a>

### resumed

```ts
resumed: [Player];
```

Emitted when the library manages to resume the player

#### Defined in

[guild/Player.ts:156](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/guild/Player.ts#L156)

***

<a id="start" name="start"></a>

### start

```ts
start: [TrackStartEvent];
```

Emitted when a new track starts

#### Defined in

[guild/Player.ts:146](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/guild/Player.ts#L146)

***

<a id="stuck" name="stuck"></a>

### stuck

```ts
stuck: [TrackStuckEvent];
```

Emitted when the current playing track gets stuck due to an error

#### Defined in

[guild/Player.ts:136](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/guild/Player.ts#L136)

***

<a id="update" name="update"></a>

### update

```ts
update: [PlayerUpdate];
```

Emitted when a playerUpdate even is received from Lavalink

#### Defined in

[guild/Player.ts:161](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/guild/Player.ts#L161)
