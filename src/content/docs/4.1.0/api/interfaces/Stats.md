---
editUrl: false
next: false
prev: false
title: Stats
slug: 4.1.0/apiinterfaces/stats
---

## Properties

<a id="cpu" name="cpu" />

### cpu

```ts
cpu: {
  cores: number;
  lavalinkLoad: number;
  systemLoad: number;
};
```

<a id="cores" name="cores" />

#### cores

```ts
cores: number;
```

<a id="lavalinkload" name="lavalinkload" />

#### lavalinkLoad

```ts
lavalinkLoad: number;
```

<a id="systemload" name="systemload" />

#### systemLoad

```ts
systemLoad: number;
```

#### Defined in

[shoukaku/src/node/Node.ts:30](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Node.ts#L30)

***

<a id="framestats" name="framestats" />

### frameStats?

```ts
optional frameStats: {
  deficit: number;
  nulled: number;
  sent: number;
};
```

<a id="deficit" name="deficit" />

#### deficit

```ts
deficit: number;
```

<a id="nulled" name="nulled" />

#### nulled

```ts
nulled: number;
```

<a id="sent" name="sent" />

#### sent

```ts
sent: number;
```

#### Defined in

[shoukaku/src/node/Node.ts:25](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Node.ts#L25)

***

<a id="memory" name="memory" />

### memory

```ts
memory: {
  allocated: number;
  free: number;
  reservable: number;
  used: number;
};
```

<a id="allocated" name="allocated" />

#### allocated

```ts
allocated: number;
```

<a id="free" name="free" />

#### free

```ts
free: number;
```

<a id="reservable" name="reservable" />

#### reservable

```ts
reservable: number;
```

<a id="used" name="used" />

#### used

```ts
used: number;
```

#### Defined in

[shoukaku/src/node/Node.ts:19](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Node.ts#L19)

***

<a id="op" name="op" />

### op

```ts
op: STATS;
```

#### Defined in

[shoukaku/src/node/Node.ts:16](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Node.ts#L16)

***

<a id="players" name="players" />

### players

```ts
players: number;
```

#### Defined in

[shoukaku/src/node/Node.ts:17](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Node.ts#L17)

***

<a id="playingplayers" name="playingplayers" />

### playingPlayers

```ts
playingPlayers: number;
```

#### Defined in

[shoukaku/src/node/Node.ts:18](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Node.ts#L18)

***

<a id="uptime" name="uptime" />

### uptime

```ts
uptime: number;
```

#### Defined in

[shoukaku/src/node/Node.ts:35](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Node.ts#L35)
