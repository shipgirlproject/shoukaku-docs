---
editUrl: false
next: false
prev: false
title: Player
slug: 4.1.0/apiclasses/player
---

Wrapper object around Lavalink

## Extends

* [`TypedEventEmitter`](/4.1.0/api/namespaces/utils/classes/typedeventemitter/)\<[`PlayerEvents`](/4.1.0/api/type-aliases/playerevents/)>

## Constructors

<a id="constructors" name="constructors" />

### new Player()

```ts
new Player(guildId: string, node: Node): Player
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `guildId` | `string` | - |
| `node` | [`Node`](/4.1.0/api/classes/node/) | An instance of Node (Lavalink API wrapper) |

#### Returns

[`Player`](/4.1.0/api/classes/player/)

#### Overrides

`TypedEventEmitter<PlayerEvents>.constructor`

#### Defined in

[shoukaku/src/guild/Player.ts:207](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L207)

## Properties

<a id="filters" name="filters" />

### filters

```ts
filters: FilterOptions;
```

Filters on current track

#### Defined in

[shoukaku/src/guild/Player.ts:202](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L202)

***

<a id="guildid" name="guildid" />

### guildId

```ts
readonly guildId: string;
```

GuildId of this player

#### Defined in

[shoukaku/src/guild/Player.ts:174](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L174)

***

<a id="node" name="node" />

### node

```ts
node: Node;
```

Lavalink node this player is connected to

#### Defined in

[shoukaku/src/guild/Player.ts:178](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L178)

***

<a id="paused" name="paused" />

### paused

```ts
paused: boolean;
```

Pause status in current player

#### Defined in

[shoukaku/src/guild/Player.ts:190](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L190)

***

<a id="ping" name="ping" />

### ping

```ts
ping: number;
```

Ping represents the number of milliseconds between heartbeat and ack. Could be `-1` if not connected

#### Defined in

[shoukaku/src/guild/Player.ts:194](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L194)

***

<a id="position" name="position" />

### position

```ts
position: number;
```

Position in ms of current track

#### Defined in

[shoukaku/src/guild/Player.ts:198](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L198)

***

<a id="track" name="track" />

### track

```ts
track: null | string;
```

Base64 encoded data of the current track

#### Defined in

[shoukaku/src/guild/Player.ts:182](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L182)

***

<a id="volume" name="volume" />

### volume

```ts
volume: number;
```

Global volume of the player

#### Defined in

[shoukaku/src/guild/Player.ts:186](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L186)

## Accessors

<a id="data" name="data" />

### data

```ts
get data(): UpdatePlayerInfo
```

#### Returns

[`UpdatePlayerInfo`](/4.1.0/api/interfaces/updateplayerinfo/)

#### Defined in

[shoukaku/src/guild/Player.ts:219](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L219)

## Methods

<a id="clearfilters" name="clearfilters" />

### clearFilters()

```ts
clearFilters(): Promise<void>
```

Clear all filters applied to the currently playing track

#### Returns

`Promise`\<`void`>

#### Defined in

[shoukaku/src/guild/Player.ts:410](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L410)

***

<a id="destroy" name="destroy" />

### destroy()

```ts
destroy(): Promise<void>
```

Destroys the player in remote lavalink side

#### Returns

`Promise`\<`void`>

#### Defined in

[shoukaku/src/guild/Player.ts:274](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L274)

***

<a id="emit" name="emit" />

### emit()

```ts
emit<K>(eventName: K, ...args: PlayerEvents[Extract<K, string>]): boolean
```

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `symbol` | keyof PlayerEvents |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `K` |
| ...`args` | [`PlayerEvents`](/4.1.0/api/type-aliases/playerevents/)\[`Extract`\<`K`, `string`>] |

#### Returns

`boolean`

#### Inherited from

[`TypedEventEmitter`](/4.1.0/api/namespaces/utils/classes/typedeventemitter/).[`emit`](/4.1.0/api/namespaces/utils/classes/typedeventemitter/#emit)

#### Since

v0.1.26

#### Defined in

[shoukaku/src/Utils.ts:21](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Utils.ts#L21)

***

<a id="move" name="move" />

### move()

```ts
move(name?: string): Promise<boolean>
```

Move player to another node

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name`? | `string` | Name of node to move to, or the default ideal node |

#### Returns

`Promise`\<`boolean`>

true if the player was moved, false if not

#### Defined in

[shoukaku/src/guild/Player.ts:245](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L245)

***

<a id="off" name="off" />

### off()

```ts
off<K>(eventName: K, listener: (...args: PlayerEvents[Extract<K, string>]) => void): this
```

Alias for `emitter.removeListener()`.

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `symbol` | keyof PlayerEvents |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `K` |
| `listener` | (...`args`: [`PlayerEvents`](/4.1.0/api/type-aliases/playerevents/)\[`Extract`\<`K`, `string`>]) => `void` |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](/4.1.0/api/namespaces/utils/classes/typedeventemitter/).[`off`](/4.1.0/api/namespaces/utils/classes/typedeventemitter/#off)

#### Since

v10.0.0

#### Defined in

[shoukaku/src/Utils.ts:17](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Utils.ts#L17)

***

<a id="on" name="on" />

### on()

```ts
on<K>(eventName: K, listener: (...args: PlayerEvents[Extract<K, string>]) => void): this
```

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `symbol` | keyof PlayerEvents |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `K` | The name of the event. |
| `listener` | (...`args`: [`PlayerEvents`](/4.1.0/api/type-aliases/playerevents/)\[`Extract`\<`K`, `string`>]) => `void` | The callback function |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](/4.1.0/api/namespaces/utils/classes/typedeventemitter/).[`on`](/4.1.0/api/namespaces/utils/classes/typedeventemitter/#on)

#### Since

v0.1.101

#### Defined in

[shoukaku/src/Utils.ts:9](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Utils.ts#L9)

***

<a id="onplayerupdate" name="onplayerupdate" />

### onPlayerUpdate()

```ts
onPlayerUpdate(json: PlayerUpdate): void
```

Handle player update data

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `json` | [`PlayerUpdate`](/4.1.0/api/interfaces/playerupdate/) |

#### Returns

`void`

#### Defined in

[shoukaku/src/guild/Player.ts:511](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L511)

***

<a id="once" name="once" />

### once()

```ts
once<K>(eventName: K, listener: (...args: PlayerEvents[Extract<K, string>]) => void): this
```

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `symbol` | keyof PlayerEvents |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `K` | The name of the event. |
| `listener` | (...`args`: [`PlayerEvents`](/4.1.0/api/type-aliases/playerevents/)\[`Extract`\<`K`, `string`>]) => `void` | The callback function |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](/4.1.0/api/namespaces/utils/classes/typedeventemitter/).[`once`](/4.1.0/api/namespaces/utils/classes/typedeventemitter/#once)

#### Since

v0.3.0

#### Defined in

[shoukaku/src/Utils.ts:13](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/Utils.ts#L13)

***

<a id="playtrack" name="playtrack" />

### playTrack()

```ts
playTrack(playerOptions: PlayOptions, noReplace: boolean): Promise<void>
```

Play a new track

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `playerOptions` | [`PlayOptions`](/4.1.0/api/type-aliases/playoptions/) | `undefined` | - |
| `noReplace` | `boolean` | `false` | Set it to true if you don't want to replace the currently playing track |

#### Returns

`Promise`\<`void`>

#### Defined in

[shoukaku/src/guild/Player.ts:283](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L283)

***

<a id="resume" name="resume" />

### resume()

```ts
resume(options: ResumeOptions, noReplace: boolean): Promise<void>
```

Resumes the current track

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `options` | [`ResumeOptions`](/4.1.0/api/type-aliases/resumeoptions/) | `{}` | An object that conforms to ResumeOptions that specify behavior on resuming |
| `noReplace` | `boolean` | `false` | Set it to true if you don't want to replace the currently playing track |

#### Returns

`Promise`\<`void`>

#### Defined in

[shoukaku/src/guild/Player.ts:430](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L430)

***

<a id="seekto" name="seekto" />

### seekTo()

```ts
seekTo(position: number): Promise<void>
```

Seek to a specific time in the currently playing track

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `position` | `number` | Position to seek to in milliseconds |

#### Returns

`Promise`\<`void`>

#### Defined in

[shoukaku/src/guild/Player.ts:306](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L306)

***

<a id="setchannelmix" name="setchannelmix" />

### setChannelMix()

```ts
setChannelMix(channelMix?: ChannelMixSettings): Promise<void>
```

Change the channel mix settings applied to the currently playing track

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `channelMix`? | [`ChannelMixSettings`](/4.1.0/api/interfaces/channelmixsettings/) | An object that conforms to ChannelMixSettings that defines how much the left and right channels affect each other (setting all factors to 0.5 causes both channels to get the same audio) |

#### Returns

`Promise`\<`void`>

#### Defined in

[shoukaku/src/guild/Player.ts:387](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L387)

***

<a id="setdistortion" name="setdistortion" />

### setDistortion()

```ts
setDistortion(distortion?: DistortionSettings): Promise<void>
```

Change the distortion settings applied to the currently playing track

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `distortion`? | [`DistortionSettings`](/4.1.0/api/interfaces/distortionsettings/) | An object that conforms to DistortionSettings that defines distortions in the audio |

#### Returns

`Promise`\<`void`>

The current player instance

#### Defined in

[shoukaku/src/guild/Player.ts:379](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L379)

***

<a id="setequalizer" name="setequalizer" />

### setEqualizer()

```ts
setEqualizer(equalizer: Band[]): Promise<void>
```

Change the equalizer settings applied to the currently playing track

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `equalizer` | [`Band`](/4.1.0/api/interfaces/band/)\[] | An array of objects that conforms to the Bands type that define volumes at different frequencies |

#### Returns

`Promise`\<`void`>

#### Defined in

[shoukaku/src/guild/Player.ts:330](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L330)

***

<a id="setfiltervolume" name="setfiltervolume" />

### setFilterVolume()

```ts
setFilterVolume(volume: number): Promise<void>
```

Sets the filter volume of the player

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `volume` | `number` | Target volume 0.0-5.0 |

#### Returns

`Promise`\<`void`>

#### Defined in

[shoukaku/src/guild/Player.ts:322](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L322)

***

<a id="setfilters" name="setfilters" />

### setFilters()

```ts
setFilters(filters: FilterOptions): Promise<void>
```

Change the all filter settings applied to the currently playing track

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `filters` | [`FilterOptions`](/4.1.0/api/interfaces/filteroptions/) | An object that conforms to FilterOptions that defines all filters to apply/modify |

#### Returns

`Promise`\<`void`>

#### Defined in

[shoukaku/src/guild/Player.ts:403](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L403)

***

<a id="setglobalvolume" name="setglobalvolume" />

### setGlobalVolume()

```ts
setGlobalVolume(volume: number): Promise<void>
```

Sets the global volume of the player

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `volume` | `number` | Target volume 0-1000 |

#### Returns

`Promise`\<`void`>

#### Defined in

[shoukaku/src/guild/Player.ts:314](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L314)

***

<a id="setkaraoke" name="setkaraoke" />

### setKaraoke()

```ts
setKaraoke(karaoke?: KaraokeSettings): Promise<void>
```

Change the karaoke settings applied to the currently playing track

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `karaoke`? | [`KaraokeSettings`](/4.1.0/api/interfaces/karaokesettings/) | An object that conforms to the KaraokeSettings type that defines a range of frequencies to mute |

#### Returns

`Promise`\<`void`>

#### Defined in

[shoukaku/src/guild/Player.ts:338](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L338)

***

<a id="setlowpass" name="setlowpass" />

### setLowPass()

```ts
setLowPass(lowPass?: LowPassSettings): Promise<void>
```

Change the low pass settings applied to the currently playing track

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `lowPass`? | [`LowPassSettings`](/4.1.0/api/interfaces/lowpasssettings/) | An object that conforms to LowPassSettings that defines the amount of suppression on higher frequencies |

#### Returns

`Promise`\<`void`>

#### Defined in

[shoukaku/src/guild/Player.ts:395](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L395)

***

<a id="setpaused" name="setpaused" />

### setPaused()

```ts
setPaused(paused: boolean): Promise<void>
```

Pause or unpause the currently playing track

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `paused` | `boolean` | `true` | Boolean value to specify whether to pause or unpause the current bot user |

#### Returns

`Promise`\<`void`>

#### Defined in

[shoukaku/src/guild/Player.ts:298](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L298)

***

<a id="setrotation" name="setrotation" />

### setRotation()

```ts
setRotation(rotation?: RotationSettings): Promise<void>
```

Change the rotation settings applied to the currently playing track

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `rotation`? | [`RotationSettings`](/4.1.0/api/interfaces/rotationsettings/) | An object that conforms to the RotationSettings type that defines the frequency of audio rotating round the listener |

#### Returns

`Promise`\<`void`>

#### Defined in

[shoukaku/src/guild/Player.ts:370](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L370)

***

<a id="settimescale" name="settimescale" />

### setTimescale()

```ts
setTimescale(timescale?: TimescaleSettings): Promise<void>
```

Change the timescale settings applied to the currently playing track

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `timescale`? | [`TimescaleSettings`](/4.1.0/api/interfaces/timescalesettings/) | An object that conforms to the TimescaleSettings type that defines the time signature to play the audio at |

#### Returns

`Promise`\<`void`>

#### Defined in

[shoukaku/src/guild/Player.ts:346](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L346)

***

<a id="settremolo" name="settremolo" />

### setTremolo()

```ts
setTremolo(tremolo?: FreqSettings): Promise<void>
```

Change the tremolo settings applied to the currently playing track

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tremolo`? | [`FreqSettings`](/4.1.0/api/interfaces/freqsettings/) | An object that conforms to the FreqSettings type that defines an oscillation in volume |

#### Returns

`Promise`\<`void`>

#### Defined in

[shoukaku/src/guild/Player.ts:354](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L354)

***

<a id="setvibrato" name="setvibrato" />

### setVibrato()

```ts
setVibrato(vibrato?: FreqSettings): Promise<void>
```

Change the vibrato settings applied to the currently playing track

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vibrato`? | [`FreqSettings`](/4.1.0/api/interfaces/freqsettings/) | An object that conforms to the FreqSettings type that defines an oscillation in pitch |

#### Returns

`Promise`\<`void`>

#### Defined in

[shoukaku/src/guild/Player.ts:362](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L362)

***

<a id="stoptrack" name="stoptrack" />

### stopTrack()

```ts
stopTrack(): Promise<void>
```

Stop the currently playing track

#### Returns

`Promise`\<`void`>

#### Defined in

[shoukaku/src/guild/Player.ts:290](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L290)

***

<a id="update" name="update" />

### update()

```ts
update(playerOptions: UpdatePlayerOptions, noReplace: boolean): Promise<void>
```

If you want to update the whole player yourself, sends raw update player info to lavalink

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `playerOptions` | [`UpdatePlayerOptions`](/4.1.0/api/interfaces/updateplayeroptions/) | `undefined` | Options to update the player data |
| `noReplace` | `boolean` | `false` | Set it to true if you don't want to replace the currently playing track |

#### Returns

`Promise`\<`void`>

#### Defined in

[shoukaku/src/guild/Player.ts:452](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/guild/Player.ts#L452)
