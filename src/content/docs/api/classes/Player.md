---
editUrl: false
next: false
prev: false
title: "Player"
---

Wrapper object around Lavalink

## Extends

- `EventEmitter`

## Constructors

<a id="constructors" name="constructors"></a>

### new Player()

```ts
new Player(guildId: string, node: Node): Player
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `guildId` | `string` | - |
| `node` | [`Node`](/api/classes/node/) | An instance of Node (Lavalink API wrapper) |

#### Returns

[`Player`](/api/classes/player/)

#### Defined in

[guild/Player.ts:211](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L211)

## Properties

<a id="filters" name="filters"></a>

### filters

```ts
filters: FilterOptions;
```

Filters on current track

#### Defined in

[guild/Player.ts:206](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L206)

***

<a id="guildid" name="guildid"></a>

### guildId

```ts
readonly guildId: string;
```

GuildId of this player

#### Defined in

[guild/Player.ts:178](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L178)

***

<a id="node" name="node"></a>

### node

```ts
node: Node;
```

Lavalink node this player is connected to

#### Defined in

[guild/Player.ts:182](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L182)

***

<a id="paused" name="paused"></a>

### paused

```ts
paused: boolean;
```

Pause status in current player

#### Defined in

[guild/Player.ts:194](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L194)

***

<a id="ping" name="ping"></a>

### ping

```ts
ping: number;
```

Ping represents the number of milliseconds between heartbeat and ack. Could be `-1` if not connected

#### Defined in

[guild/Player.ts:198](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L198)

***

<a id="position" name="position"></a>

### position

```ts
position: number;
```

Position in ms of current track

#### Defined in

[guild/Player.ts:202](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L202)

***

<a id="track" name="track"></a>

### track

```ts
track: null | string;
```

Base64 encoded data of the current track

#### Defined in

[guild/Player.ts:186](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L186)

***

<a id="volume" name="volume"></a>

### volume

```ts
volume: number;
```

Global volume of the player

#### Defined in

[guild/Player.ts:190](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L190)

## Accessors

<a id="data" name="data"></a>

### data

```ts
get data(): UpdatePlayerInfo
```

#### Returns

[`UpdatePlayerInfo`](/api/interfaces/updateplayerinfo/)

#### Defined in

[guild/Player.ts:223](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L223)

## Methods

<a id="clearfilters" name="clearfilters"></a>

### clearFilters()

```ts
clearFilters(): Promise<void>
```

Clear all filters applied to the currently playing track

#### Returns

`Promise`\<`void`\>

#### Defined in

[guild/Player.ts:414](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L414)

***

<a id="destroy" name="destroy"></a>

### destroy()

```ts
destroy(): Promise<void>
```

Destroys the player in remote lavalink side

#### Returns

`Promise`\<`void`\>

#### Defined in

[guild/Player.ts:278](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L278)

***

<a id="emit" name="emit"></a>

### emit()

```ts
emit(event: string | symbol, ...args: unknown[]): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` \| `symbol` |
| ...`args` | `unknown`[] |

#### Returns

`boolean`

#### Defined in

[guild/Player.ts:167](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L167)

***

<a id="move" name="move"></a>

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

`Promise`\<`boolean`\>

true if the player was moved, false if not

#### Defined in

[guild/Player.ts:249](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L249)

***

<a id="off" name="off"></a>

### off()

```ts
off<K>(event: K, listener: (...args: PlayerEvents[K]) => void): this
```

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof [`PlayerEvents`](/api/interfaces/playerevents/) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `K` |
| `listener` | (...`args`: [`PlayerEvents`](/api/interfaces/playerevents/)\[`K`\]) => `void` |

#### Returns

`this`

#### Defined in

[guild/Player.ts:166](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L166)

***

<a id="on" name="on"></a>

### on()

```ts
on<K>(event: K, listener: (...args: PlayerEvents[K]) => void): this
```

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof [`PlayerEvents`](/api/interfaces/playerevents/) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `K` |
| `listener` | (...`args`: [`PlayerEvents`](/api/interfaces/playerevents/)\[`K`\]) => `void` |

#### Returns

`this`

#### Defined in

[guild/Player.ts:164](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L164)

***

<a id="onplayerupdate" name="onplayerupdate"></a>

### onPlayerUpdate()

```ts
onPlayerUpdate(json: {
  state: {
     ping: number;
     position: number;
    };
 }): void
```

Handle player update data

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `json` | `object` |
| `json.state` | `object` |
| `json.state.ping` | `number` |
| `json.state.position` | `number` |

#### Returns

`void`

#### Defined in

[guild/Player.ts:513](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L513)

***

<a id="once" name="once"></a>

### once()

```ts
once<K>(event: K, listener: (...args: PlayerEvents[K]) => void): this
```

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof [`PlayerEvents`](/api/interfaces/playerevents/) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `K` |
| `listener` | (...`args`: [`PlayerEvents`](/api/interfaces/playerevents/)\[`K`\]) => `void` |

#### Returns

`this`

#### Defined in

[guild/Player.ts:165](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L165)

***

<a id="playtrack" name="playtrack"></a>

### playTrack()

```ts
playTrack(playerOptions: PlayOptions, noReplace: boolean): Promise<void>
```

Play a new track

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `playerOptions` | [`PlayOptions`](/api/type-aliases/playoptions/) | `undefined` | - |
| `noReplace` | `boolean` | `false` | Set it to true if you don't want to replace the currently playing track |

#### Returns

`Promise`\<`void`\>

#### Defined in

[guild/Player.ts:287](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L287)

***

<a id="resume" name="resume"></a>

### resume()

```ts
resume(options: ResumeOptions, noReplace: boolean): Promise<void>
```

Resumes the current track

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `options` | [`ResumeOptions`](/api/type-aliases/resumeoptions/) | `{}` | An object that conforms to ResumeOptions that specify behavior on resuming |
| `noReplace` | `boolean` | `false` | Set it to true if you don't want to replace the currently playing track |

#### Returns

`Promise`\<`void`\>

#### Defined in

[guild/Player.ts:434](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L434)

***

<a id="seekto" name="seekto"></a>

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

`Promise`\<`void`\>

#### Defined in

[guild/Player.ts:310](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L310)

***

<a id="setchannelmix" name="setchannelmix"></a>

### setChannelMix()

```ts
setChannelMix(channelMix?: ChannelMixSettings): Promise<void>
```

Change the channel mix settings applied to the currently playing track

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `channelMix`? | [`ChannelMixSettings`](/api/interfaces/channelmixsettings/) | An object that conforms to ChannelMixSettings that defines how much the left and right channels affect each other (setting all factors to 0.5 causes both channels to get the same audio) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[guild/Player.ts:391](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L391)

***

<a id="setdistortion" name="setdistortion"></a>

### setDistortion()

```ts
setDistortion(distortion?: DistortionSettings): Promise<void>
```

Change the distortion settings applied to the currently playing track

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `distortion`? | [`DistortionSettings`](/api/interfaces/distortionsettings/) | An object that conforms to DistortionSettings that defines distortions in the audio |

#### Returns

`Promise`\<`void`\>

The current player instance

#### Defined in

[guild/Player.ts:383](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L383)

***

<a id="setequalizer" name="setequalizer"></a>

### setEqualizer()

```ts
setEqualizer(equalizer: Band[]): Promise<void>
```

Change the equalizer settings applied to the currently playing track

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `equalizer` | [`Band`](/api/interfaces/band/)[] | An array of objects that conforms to the Bands type that define volumes at different frequencies |

#### Returns

`Promise`\<`void`\>

#### Defined in

[guild/Player.ts:334](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L334)

***

<a id="setfiltervolume" name="setfiltervolume"></a>

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

`Promise`\<`void`\>

#### Defined in

[guild/Player.ts:326](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L326)

***

<a id="setfilters" name="setfilters"></a>

### setFilters()

```ts
setFilters(filters: FilterOptions): Promise<void>
```

Change the all filter settings applied to the currently playing track

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `filters` | [`FilterOptions`](/api/interfaces/filteroptions/) | An object that conforms to FilterOptions that defines all filters to apply/modify |

#### Returns

`Promise`\<`void`\>

#### Defined in

[guild/Player.ts:407](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L407)

***

<a id="setglobalvolume" name="setglobalvolume"></a>

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

`Promise`\<`void`\>

#### Defined in

[guild/Player.ts:318](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L318)

***

<a id="setkaraoke" name="setkaraoke"></a>

### setKaraoke()

```ts
setKaraoke(karaoke?: KaraokeSettings): Promise<void>
```

Change the karaoke settings applied to the currently playing track

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `karaoke`? | [`KaraokeSettings`](/api/interfaces/karaokesettings/) | An object that conforms to the KaraokeSettings type that defines a range of frequencies to mute |

#### Returns

`Promise`\<`void`\>

#### Defined in

[guild/Player.ts:342](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L342)

***

<a id="setlowpass" name="setlowpass"></a>

### setLowPass()

```ts
setLowPass(lowPass?: LowPassSettings): Promise<void>
```

Change the low pass settings applied to the currently playing track

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `lowPass`? | [`LowPassSettings`](/api/interfaces/lowpasssettings/) | An object that conforms to LowPassSettings that defines the amount of suppression on higher frequencies |

#### Returns

`Promise`\<`void`\>

#### Defined in

[guild/Player.ts:399](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L399)

***

<a id="setpaused" name="setpaused"></a>

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

`Promise`\<`void`\>

#### Defined in

[guild/Player.ts:302](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L302)

***

<a id="setrotation" name="setrotation"></a>

### setRotation()

```ts
setRotation(rotation?: RotationSettings): Promise<void>
```

Change the rotation settings applied to the currently playing track

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `rotation`? | [`RotationSettings`](/api/interfaces/rotationsettings/) | An object that conforms to the RotationSettings type that defines the frequency of audio rotating round the listener |

#### Returns

`Promise`\<`void`\>

#### Defined in

[guild/Player.ts:374](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L374)

***

<a id="settimescale" name="settimescale"></a>

### setTimescale()

```ts
setTimescale(timescale?: TimescaleSettings): Promise<void>
```

Change the timescale settings applied to the currently playing track

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `timescale`? | [`TimescaleSettings`](/api/interfaces/timescalesettings/) | An object that conforms to the TimescaleSettings type that defines the time signature to play the audio at |

#### Returns

`Promise`\<`void`\>

#### Defined in

[guild/Player.ts:350](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L350)

***

<a id="settremolo" name="settremolo"></a>

### setTremolo()

```ts
setTremolo(tremolo?: FreqSettings): Promise<void>
```

Change the tremolo settings applied to the currently playing track

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tremolo`? | [`FreqSettings`](/api/interfaces/freqsettings/) | An object that conforms to the FreqSettings type that defines an oscillation in volume |

#### Returns

`Promise`\<`void`\>

#### Defined in

[guild/Player.ts:358](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L358)

***

<a id="setvibrato" name="setvibrato"></a>

### setVibrato()

```ts
setVibrato(vibrato?: FreqSettings): Promise<void>
```

Change the vibrato settings applied to the currently playing track

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vibrato`? | [`FreqSettings`](/api/interfaces/freqsettings/) | An object that conforms to the FreqSettings type that defines an oscillation in pitch |

#### Returns

`Promise`\<`void`\>

#### Defined in

[guild/Player.ts:366](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L366)

***

<a id="stoptrack" name="stoptrack"></a>

### stopTrack()

```ts
stopTrack(): Promise<void>
```

Stop the currently playing track

#### Returns

`Promise`\<`void`\>

#### Defined in

[guild/Player.ts:294](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L294)

***

<a id="update" name="update"></a>

### update()

```ts
update(playerOptions: UpdatePlayerOptions, noReplace: boolean): Promise<void>
```

If you want to update the whole player yourself, sends raw update player info to lavalink

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `playerOptions` | [`UpdatePlayerOptions`](/api/interfaces/updateplayeroptions/) | `undefined` | Options to update the player data |
| `noReplace` | `boolean` | `false` | Set it to true if you don't want to replace the currently playing track |

#### Returns

`Promise`\<`void`\>

#### Defined in

[guild/Player.ts:456](https://github.com/shipgirlproject/shoukaku/blob/761f40f7c0b54473070fa1c40602d1504a8bf167/src/guild/Player.ts#L456)
