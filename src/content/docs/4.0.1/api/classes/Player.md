---
editUrl: false
next: false
prev: false
title: Player
slug: 4.0.1/apiclasses/player
---

Wrapper object around Lavalink

## Extends

* `EventEmitter`

## Constructors

### new Player()

> **new Player**(`guildId`, `node`): [`Player`](/4.0.1/api/classes/player/)

#### Parameters

• **guildId**: `string`

• **node**: [`Node`](/4.0.1/api/classes/node/)

An instance of Node (Lavalink API wrapper)

#### Returns

[`Player`](/4.0.1/api/classes/player/)

#### Defined in

[src/guild/Player.ts:235](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L235)

## Properties

### filters

> **filters**: [`FilterOptions`](/4.0.1/api/interfaces/filteroptions/)

Filters on current track

#### Defined in

[src/guild/Player.ts:230](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L230)

***

### guildId

> `readonly` **guildId**: `string`

GuildId of this player

#### Defined in

[src/guild/Player.ts:202](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L202)

***

### node

> **node**: [`Node`](/4.0.1/api/classes/node/)

Lavalink node this player is connected to

#### Defined in

[src/guild/Player.ts:206](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L206)

***

### paused

> **paused**: `boolean`

Pause status in current player

#### Defined in

[src/guild/Player.ts:218](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L218)

***

### ping

> **ping**: `number`

Ping represents the number of milliseconds between heartbeat and ack. Could be `-1` if not connected

#### Defined in

[src/guild/Player.ts:222](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L222)

***

### position

> **position**: `number`

Position in ms of current track

#### Defined in

[src/guild/Player.ts:226](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L226)

***

### track

> **track**: `null` | `string`

ID of current track

#### Defined in

[src/guild/Player.ts:210](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L210)

***

### volume

> **volume**: `number`

Global volume of the player

#### Defined in

[src/guild/Player.ts:214](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L214)

***

### captureRejectionSymbol

> `readonly` `static` **captureRejectionSymbol**: *typeof* [`captureRejectionSymbol`](/4.0.1/api/classes/connection/#capturerejectionsymbol)

Value: `Symbol.for('nodejs.rejection')`

See how to write a custom `rejection handler`.

#### Since

v13.4.0, v12.16.0

#### Defined in

node\_modules/@types/node/events.d.ts:452

***

### captureRejections

> `static` **captureRejections**: `boolean`

Value: [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Change the default `captureRejections` option on all new `EventEmitter` objects.

#### Since

v13.4.0, v12.16.0

#### Defined in

node\_modules/@types/node/events.d.ts:459

***

### defaultMaxListeners

> `static` **defaultMaxListeners**: `number`

By default, a maximum of `10` listeners can be registered for any single
event. This limit can be changed for individual `EventEmitter` instances
using the `emitter.setMaxListeners(n)` method. To change the default
for *all*`EventEmitter` instances, the `events.defaultMaxListeners` property
can be used. If this value is not a positive number, a `RangeError` is thrown.

Take caution when setting the `events.defaultMaxListeners` because the
change affects *all* `EventEmitter` instances, including those created before
the change is made. However, calling `emitter.setMaxListeners(n)` still has
precedence over `events.defaultMaxListeners`.

This is not a hard limit. The `EventEmitter` instance will allow
more listeners to be added but will output a trace warning to stderr indicating
that a "possible EventEmitter memory leak" has been detected. For any single
`EventEmitter`, the `emitter.getMaxListeners()` and `emitter.setMaxListeners()` methods can be used to
temporarily avoid this warning:

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.setMaxListeners(emitter.getMaxListeners() + 1);
emitter.once('event', () => {
  // do stuff
  emitter.setMaxListeners(Math.max(emitter.getMaxListeners() - 1, 0));
});
```

The `--trace-warnings` command-line flag can be used to display the
stack trace for such warnings.

The emitted warning can be inspected with `process.on('warning')` and will
have the additional `emitter`, `type`, and `count` properties, referring to
the event emitter instance, the event's name and the number of attached
listeners, respectively.
Its `name` property is set to `'MaxListenersExceededWarning'`.

#### Since

v0.11.2

#### Defined in

node\_modules/@types/node/events.d.ts:498

***

### errorMonitor

> `readonly` `static` **errorMonitor**: *typeof* [`errorMonitor`](/4.0.1/api/classes/connection/#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'` events. Listeners installed using this symbol are called before the regular `'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an `'error'` event is emitted. Therefore, the process will still crash if no
regular `'error'` listener is installed.

#### Since

v13.6.0, v12.17.0

#### Defined in

node\_modules/@types/node/events.d.ts:445

## Accessors

### data

> `get` **data**(): [`UpdatePlayerInfo`](/4.0.1/api/interfaces/updateplayerinfo/)

#### Returns

[`UpdatePlayerInfo`](/4.0.1/api/interfaces/updateplayerinfo/)

#### Defined in

[src/guild/Player.ts:247](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L247)

## Methods

### \[captureRejectionSymbol]\()?

> `optional` **\[captureRejectionSymbol]**\<`K`>(`error`, `event`, ...`args`): `void`

#### Type Parameters

• **K**

#### Parameters

• **error**: `Error`

• **event**: `string` | `symbol`

• ...**args**: `AnyRest`

#### Returns

`void`

#### Defined in

node\_modules/@types/node/events.d.ts:136

***

### addListener()

> **addListener**\<`K`>(`eventName`, `listener`): `this`

Alias for `emitter.on(eventName, listener)`.

#### Type Parameters

• **K**

#### Parameters

• **eventName**: `string` | `symbol`

• **listener**

#### Returns

`this`

#### Since

v0.1.26

#### Defined in

node\_modules/@types/node/events.d.ts:597

***

### clearFilters()

> **clearFilters**(): `Promise`\<`void`>

Clear all filters applied to the currently playing track

#### Returns

`Promise`\<`void`>

#### Defined in

[src/guild/Player.ts:479](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L479)

***

### destroy()

> **destroy**(): `Promise`\<`void`>

Destroys the player in remote lavalink side

#### Returns

`Promise`\<`void`>

#### Defined in

[src/guild/Player.ts:295](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L295)

***

### emit()

> **emit**\<`K`>(`eventName`, ...`args`): `boolean`

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

• **K**

#### Parameters

• **eventName**: `string` | `symbol`

• ...**args**: `AnyRest`

#### Returns

`boolean`

#### Since

v0.1.26

#### Defined in

node\_modules/@types/node/events.d.ts:859

***

### eventNames()

> **eventNames**(): (`string` | `symbol`)\[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

#### Returns

(`string` | `symbol`)\[]

#### Since

v6.0.0

#### Defined in

node\_modules/@types/node/events.d.ts:922

***

### getMaxListeners()

> **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](../../../../../../api/classes/player/#defaultmaxlisteners).

#### Returns

`number`

#### Since

v1.0.0

#### Defined in

node\_modules/@types/node/events.d.ts:774

***

### listenerCount()

> **listenerCount**\<`K`>(`eventName`, `listener`?): `number`

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

#### Type Parameters

• **K**

#### Parameters

• **eventName**: `string` | `symbol`

The name of the event being listened for

• **listener?**: `Function`

The event handler function

#### Returns

`number`

#### Since

v3.2.0

#### Defined in

node\_modules/@types/node/events.d.ts:868

***

### listeners()

> **listeners**\<`K`>(`eventName`): `Function`\[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

#### Type Parameters

• **K**

#### Parameters

• **eventName**: `string` | `symbol`

#### Returns

`Function`\[]

#### Since

v0.1.26

#### Defined in

node\_modules/@types/node/events.d.ts:787

***

### move()

> **move**(`name`?): `Promise`\<`boolean`>

Move player to another node

#### Parameters

• **name?**: `string`

#### Returns

`Promise`\<`boolean`>

true if the player was moved, false if not

#### Defined in

[src/guild/Player.ts:271](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L271)

***

### off()

#### off(event, listener)

> **off**(`event`, `listener`): `this`

##### Parameters

• **event**: `"end"`

• **listener**

##### Returns

`this`

##### Defined in

[src/guild/Player.ts:186](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L186)

#### off(event, listener)

> **off**(`event`, `listener`): `this`

##### Parameters

• **event**: `"stuck"`

• **listener**

##### Returns

`this`

##### Defined in

[src/guild/Player.ts:187](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L187)

#### off(event, listener)

> **off**(`event`, `listener`): `this`

##### Parameters

• **event**: `"closed"`

• **listener**

##### Returns

`this`

##### Defined in

[src/guild/Player.ts:188](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L188)

#### off(event, listener)

> **off**(`event`, `listener`): `this`

##### Parameters

• **event**: `"start"`

• **listener**

##### Returns

`this`

##### Defined in

[src/guild/Player.ts:189](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L189)

#### off(event, listener)

> **off**(`event`, `listener`): `this`

##### Parameters

• **event**: `"exception"`

• **listener**

##### Returns

`this`

##### Defined in

[src/guild/Player.ts:190](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L190)

#### off(event, listener)

> **off**(`event`, `listener`): `this`

##### Parameters

• **event**: `"resumed"`

• **listener**

##### Returns

`this`

##### Defined in

[src/guild/Player.ts:191](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L191)

#### off(event, listener)

> **off**(`event`, `listener`): `this`

##### Parameters

• **event**: `"update"`

• **listener**

##### Returns

`this`

##### Defined in

[src/guild/Player.ts:192](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L192)

***

### onPlayerUpdate()

> **onPlayerUpdate**(`json`): `void`

Handle player update data

#### Parameters

• **json**

• **json.state**

• **json.state.ping**: `number`

• **json.state.position**: `number`

#### Returns

`void`

#### Defined in

[src/guild/Player.ts:557](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L557)

***

### once()

#### once(event, listener)

> **once**(`event`, `listener`): `this`

##### Parameters

• **event**: `"end"`

• **listener**

##### Returns

`this`

##### Defined in

[src/guild/Player.ts:179](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L179)

#### once(event, listener)

> **once**(`event`, `listener`): `this`

##### Parameters

• **event**: `"stuck"`

• **listener**

##### Returns

`this`

##### Defined in

[src/guild/Player.ts:180](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L180)

#### once(event, listener)

> **once**(`event`, `listener`): `this`

##### Parameters

• **event**: `"closed"`

• **listener**

##### Returns

`this`

##### Defined in

[src/guild/Player.ts:181](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L181)

#### once(event, listener)

> **once**(`event`, `listener`): `this`

##### Parameters

• **event**: `"start"`

• **listener**

##### Returns

`this`

##### Defined in

[src/guild/Player.ts:182](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L182)

#### once(event, listener)

> **once**(`event`, `listener`): `this`

##### Parameters

• **event**: `"exception"`

• **listener**

##### Returns

`this`

##### Defined in

[src/guild/Player.ts:183](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L183)

#### once(event, listener)

> **once**(`event`, `listener`): `this`

##### Parameters

• **event**: `"resumed"`

• **listener**

##### Returns

`this`

##### Defined in

[src/guild/Player.ts:184](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L184)

#### once(event, listener)

> **once**(`event`, `listener`): `this`

##### Parameters

• **event**: `"update"`

• **listener**

##### Returns

`this`

##### Defined in

[src/guild/Player.ts:185](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L185)

***

### playTrack()

> **playTrack**(`playable`): `Promise`\<`void`>

Play a new track

#### Parameters

• **playable**: [`PlayOptions`](/4.0.1/api/interfaces/playoptions/)

Options for playing this track

#### Returns

`Promise`\<`void`>

#### Defined in

[src/guild/Player.ts:303](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L303)

***

### prependListener()

> **prependListener**\<`K`>(`eventName`, `listener`): `this`

Adds the `listener` function to the *beginning* of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Type Parameters

• **K**

#### Parameters

• **eventName**: `string` | `symbol`

The name of the event.

• **listener**

The callback function

#### Returns

`this`

#### Since

v6.0.0

#### Defined in

node\_modules/@types/node/events.d.ts:886

***

### prependOnceListener()

> **prependOnceListener**\<`K`>(`eventName`, `listener`): `this`

Adds a **one-time**`listener` function for the event named `eventName` to the *beginning* of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Type Parameters

• **K**

#### Parameters

• **eventName**: `string` | `symbol`

The name of the event.

• **listener**

The callback function

#### Returns

`this`

#### Since

v6.0.0

#### Defined in

node\_modules/@types/node/events.d.ts:902

***

### rawListeners()

> **rawListeners**\<`K`>(`eventName`): `Function`\[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

#### Type Parameters

• **K**

#### Parameters

• **eventName**: `string` | `symbol`

#### Returns

`Function`\[]

#### Since

v9.4.0

#### Defined in

node\_modules/@types/node/events.d.ts:818

***

### removeAllListeners()

> **removeAllListeners**(`eventName`?): `this`

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

• **eventName?**: `string` | `symbol`

#### Returns

`this`

#### Since

v0.1.26

#### Defined in

node\_modules/@types/node/events.d.ts:758

***

### removeListener()

> **removeListener**\<`K`>(`eventName`, `listener`): `this`

Removes the specified `listener` from the listener array for the event named `eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any `removeListener()` or `removeAllListeners()` calls *after* emitting and *before* the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered *after* the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')` listener is removed:

```js
import { EventEmitter } from 'node:events';
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Type Parameters

• **K**

#### Parameters

• **eventName**: `string` | `symbol`

• **listener**

#### Returns

`this`

#### Since

v0.1.26

#### Defined in

node\_modules/@types/node/events.d.ts:742

***

### resume()

> **resume**(`options`): `Promise`\<`void`>

Resumes the current track

#### Parameters

• **options**: [`ResumeOptions`](/4.0.1/api/interfaces/resumeoptions/) = `{}`

An object that conforms to ResumeOptions that specify behavior on resuming

#### Returns

`Promise`\<`void`>

#### Defined in

[src/guild/Player.ts:498](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L498)

***

### seekTo()

> **seekTo**(`position`): `Promise`\<`void`>

Seek to a specific time in the currently playing track

#### Parameters

• **position**: `number`

Position to seek to in milliseconds

#### Returns

`Promise`\<`void`>

#### Defined in

[src/guild/Player.ts:353](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L353)

***

### setChannelMix()

> **setChannelMix**(`channelMix`): `Promise`\<`void`>

Change the channel mix settings applied to the currently playing track

#### Parameters

• **channelMix**: [`ChannelMixSettings`](/4.0.1/api/interfaces/channelmixsettings/)

An object that conforms to ChannelMixSettings that defines how much the left and right channels affect each other (setting all factors to 0.5 causes both channels to get the same audio)

#### Returns

`Promise`\<`void`>

#### Defined in

[src/guild/Player.ts:450](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L450)

***

### setDistortion()

> **setDistortion**(`distortion`): `Promise`\<`void`>

Change the distortion settings applied to the currently playing track

#### Parameters

• **distortion**: [`DistortionSettings`](/4.0.1/api/interfaces/distortionsettings/)

An object that conforms to DistortionSettings that defines distortions in the audio

#### Returns

`Promise`\<`void`>

The current player instance

#### Defined in

[src/guild/Player.ts:441](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L441)

***

### setEqualizer()

> **setEqualizer**(`equalizer`): `Promise`\<`void`>

Change the equalizer settings applied to the currently playing track

#### Parameters

• **equalizer**: [`Band`](/4.0.1/api/interfaces/band/)\[]

An array of objects that conforms to the Bands type that define volumes at different frequencies

#### Returns

`Promise`\<`void`>

#### Defined in

[src/guild/Player.ts:385](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L385)

***

### setFilterVolume()

> **setFilterVolume**(`volume`): `Promise`\<`void`>

Sets the filter volume of the player

#### Parameters

• **volume**: `number`

Target volume 0.0-5.0

#### Returns

`Promise`\<`void`>

#### Defined in

[src/guild/Player.ts:377](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L377)

***

### setFilters()

> **setFilters**(`filters`): `Promise`\<`void`>

Change the all filter settings applied to the currently playing track

#### Parameters

• **filters**: [`FilterOptions`](/4.0.1/api/interfaces/filteroptions/)

An object that conforms to FilterOptions that defines all filters to apply/modify

#### Returns

`Promise`\<`void`>

#### Defined in

[src/guild/Player.ts:468](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L468)

***

### setGlobalVolume()

> **setGlobalVolume**(`volume`): `Promise`\<`void`>

Sets the global volume of the player

#### Parameters

• **volume**: `number`

Target volume 0-1000

#### Returns

`Promise`\<`void`>

#### Defined in

[src/guild/Player.ts:365](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L365)

***

### setKaraoke()

> **setKaraoke**(`karaoke`?): `Promise`\<`void`>

Change the karaoke settings applied to the currently playing track

#### Parameters

• **karaoke?**: [`KaraokeSettings`](/4.0.1/api/interfaces/karaokesettings/)

An object that conforms to the KaraokeSettings type that defines a range of frequencies to mute

#### Returns

`Promise`\<`void`>

#### Defined in

[src/guild/Player.ts:395](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L395)

***

### setLowPass()

> **setLowPass**(`lowPass`): `Promise`\<`void`>

Change the low pass settings applied to the currently playing track

#### Parameters

• **lowPass**: [`LowPassSettings`](/4.0.1/api/interfaces/lowpasssettings/)

An object that conforms to LowPassSettings that defines the amount of suppression on higher frequencies

#### Returns

`Promise`\<`void`>

#### Defined in

[src/guild/Player.ts:459](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L459)

***

### setMaxListeners()

> **setMaxListeners**(`n`): `this`

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to `Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

• **n**: `number`

#### Returns

`this`

#### Since

v0.3.5

#### Defined in

node\_modules/@types/node/events.d.ts:768

***

### setPaused()

> **setPaused**(`paused`): `Promise`\<`void`>

Pause or unpause the currently playing track

#### Parameters

• **paused**: `boolean` = `true`

Boolean value to specify whether to pause or unpause the current bot user

#### Returns

`Promise`\<`void`>

#### Defined in

[src/guild/Player.ts:341](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L341)

***

### setRotation()

> **setRotation**(`rotation`?): `Promise`\<`void`>

Change the rotation settings applied to the currently playing track

#### Parameters

• **rotation?**: [`RotationSettings`](/4.0.1/api/interfaces/rotationsettings/)

An object that conforms to the RotationSettings type that defines the frequency of audio rotating round the listener

#### Returns

`Promise`\<`void`>

#### Defined in

[src/guild/Player.ts:431](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L431)

***

### setTimescale()

> **setTimescale**(`timescale`?): `Promise`\<`void`>

Change the timescale settings applied to the currently playing track

#### Parameters

• **timescale?**: [`TimescaleSettings`](/4.0.1/api/interfaces/timescalesettings/)

An object that conforms to the TimescaleSettings type that defines the time signature to play the audio at

#### Returns

`Promise`\<`void`>

#### Defined in

[src/guild/Player.ts:404](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L404)

***

### setTremolo()

> **setTremolo**(`tremolo`?): `Promise`\<`void`>

Change the tremolo settings applied to the currently playing track

#### Parameters

• **tremolo?**: [`FreqSettings`](/4.0.1/api/interfaces/freqsettings/)

An object that conforms to the FreqSettings type that defines an oscillation in volume

#### Returns

`Promise`\<`void`>

#### Defined in

[src/guild/Player.ts:413](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L413)

***

### setVibrato()

> **setVibrato**(`vibrato`?): `Promise`\<`void`>

Change the vibrato settings applied to the currently playing track

#### Parameters

• **vibrato?**: [`FreqSettings`](/4.0.1/api/interfaces/freqsettings/)

An object that conforms to the FreqSettings type that defines an oscillation in pitch

#### Returns

`Promise`\<`void`>

#### Defined in

[src/guild/Player.ts:422](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L422)

***

### stopTrack()

> **stopTrack**(): `Promise`\<`void`>

Stop the currently playing track

#### Returns

`Promise`\<`void`>

#### Defined in

[src/guild/Player.ts:328](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L328)

***

### update()

> **update**(`updatePlayer`): `Promise`\<`void`>

If you want to update the whole player yourself, sends raw update player info to lavalink

#### Parameters

• **updatePlayer**: [`UpdatePlayerInfo`](/4.0.1/api/interfaces/updateplayerinfo/)

#### Returns

`Promise`\<`void`>

#### Defined in

[src/guild/Player.ts:511](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L511)

***

### addAbortListener()

> `static` **addAbortListener**(`signal`, `resource`): `Disposable`

Listens once to the `abort` event on the provided `signal`.

Listening to the `abort` event on abort signals is unsafe and may
lead to resource leaks since another third party with the signal can
call `e.stopImmediatePropagation()`. Unfortunately Node.js cannot change
this since it would violate the web standard. Additionally, the original
API makes it easy to forget to remove listeners.

This API allows safely using `AbortSignal`s in Node.js APIs by solving these
two issues by listening to the event such that `stopImmediatePropagation` does
not prevent the listener from running.

Returns a disposable so that it may be unsubscribed from more easily.

```js
import { addAbortListener } from 'node:events';

function example(signal) {
  let disposable;
  try {
    signal.addEventListener('abort', (e) => e.stopImmediatePropagation());
    disposable = addAbortListener(signal, (e) => {
      // Do something when signal is aborted.
    });
  } finally {
    disposable?.[Symbol.dispose]();
  }
}
```

:::caution\[Experimental]
This API should not be used in production and may be trimmed from a public release.
:::

#### Parameters

• **signal**: `AbortSignal`

• **resource**

#### Returns

`Disposable`

Disposable that removes the `abort` listener.

#### Since

v20.5.0

#### Defined in

node\_modules/@types/node/events.d.ts:437

***

### getEventListeners()

> `static` **getEventListeners**(`emitter`, `name`): `Function`\[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
import { getEventListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  console.log(getEventListeners(ee, 'foo')); // [ [Function: listener] ]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  console.log(getEventListeners(et, 'foo')); // [ [Function: listener] ]
}
```

#### Parameters

• **emitter**: `EventEmitter`\<`DefaultEventMap`> | `EventTarget`

• **name**: `string` | `symbol`

#### Returns

`Function`\[]

#### Since

v15.2.0, v14.17.0

#### Defined in

node\_modules/@types/node/events.d.ts:358

***

### getMaxListeners()

> `static` **getMaxListeners**(`emitter`): `number`

Returns the currently set max amount of listeners.

For `EventEmitter`s this behaves exactly the same as calling `.getMaxListeners` on
the emitter.

For `EventTarget`s this is the only way to get the max event listeners for the
event target. If the number of event handlers on a single EventTarget exceeds
the max set, the EventTarget will print a warning.

```js
import { getMaxListeners, setMaxListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  console.log(getMaxListeners(ee)); // 10
  setMaxListeners(11, ee);
  console.log(getMaxListeners(ee)); // 11
}
{
  const et = new EventTarget();
  console.log(getMaxListeners(et)); // 10
  setMaxListeners(11, et);
  console.log(getMaxListeners(et)); // 11
}
```

#### Parameters

• **emitter**: `EventEmitter`\<`DefaultEventMap`> | `EventTarget`

#### Returns

`number`

#### Since

v19.9.0

#### Defined in

node\_modules/@types/node/events.d.ts:387

***

### ~~listenerCount()~~

> `static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName` registered on the given `emitter`.

```js
import { EventEmitter, listenerCount } from 'node:events';

const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

:::caution\[Deprecated]
Since v3.2.0 - Use `listenerCount` instead.
:::

#### Parameters

• **emitter**: `EventEmitter`\<`DefaultEventMap`>

The emitter to query

• **eventName**: `string` | `symbol`

The event name

#### Returns

`number`

#### Since

v0.9.12

#### Defined in

node\_modules/@types/node/events.d.ts:330

***

### on()

#### on(emitter, eventName, options)

> `static` **on**(`emitter`, `eventName`, `options`?): `AsyncIterableIterator`\<`any`\[]>

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

// Emit later on
process.nextTick(() => {
  ee.emit('foo', 'bar');
  ee.emit('foo', 42);
});

for await (const event of on(ee, 'foo')) {
  // The execution of this inner block is synchronous and it
  // processes one event at a time (even with await). Do not use
  // if concurrent execution is required.
  console.log(event); // prints ['bar'] [42]
}
// Unreachable here
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

Use the `close` option to specify an array of event names that will end the iteration:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

// Emit later on
process.nextTick(() => {
  ee.emit('foo', 'bar');
  ee.emit('foo', 42);
  ee.emit('close');
});

for await (const event of on(ee, 'foo', { close: ['close'] })) {
  console.log(event); // prints ['bar'] [42]
}
// the loop will exit after 'close' is emitted
console.log('done'); // prints 'done'
```

##### Parameters

• **emitter**: `EventEmitter`\<`DefaultEventMap`>

• **eventName**: `string` | `symbol`

• **options?**: `StaticEventEmitterIteratorOptions`

##### Returns

`AsyncIterableIterator`\<`any`\[]>

An `AsyncIterator` that iterates `eventName` events emitted by the `emitter`

##### Since

v13.6.0, v12.16.0

##### Defined in

node\_modules/@types/node/events.d.ts:303

#### on(emitter, eventName, options)

> `static` **on**(`emitter`, `eventName`, `options`?): `AsyncIterableIterator`\<`any`\[]>

##### Parameters

• **emitter**: `EventTarget`

• **eventName**: `string`

• **options?**: `StaticEventEmitterIteratorOptions`

##### Returns

`AsyncIterableIterator`\<`any`\[]>

##### Defined in

node\_modules/@types/node/events.d.ts:308

***

### once()

#### once(emitter, eventName, options)

> `static` **once**(`emitter`, `eventName`, `options`?): `Promise`\<`any`\[]>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
import { once, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

process.nextTick(() => {
  ee.emit('myevent', 42);
});

const [value] = await once(ee, 'myevent');
console.log(value);

const err = new Error('kaboom');
process.nextTick(() => {
  ee.emit('error', err);
});

try {
  await once(ee, 'myevent');
} catch (err) {
  console.error('error happened', err);
}
```

The special handling of the `'error'` event is only used when `events.once()` is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.error('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

##### Parameters

• **emitter**: `EventEmitter`\<`DefaultEventMap`>

• **eventName**: `string` | `symbol`

• **options?**: `StaticEventEmitterOptions`

##### Returns

`Promise`\<`any`\[]>

##### Since

v11.13.0, v10.16.0

##### Defined in

node\_modules/@types/node/events.d.ts:217

#### once(emitter, eventName, options)

> `static` **once**(`emitter`, `eventName`, `options`?): `Promise`\<`any`\[]>

##### Parameters

• **emitter**: `EventTarget`

• **eventName**: `string`

• **options?**: `StaticEventEmitterOptions`

##### Returns

`Promise`\<`any`\[]>

##### Defined in

node\_modules/@types/node/events.d.ts:222

***

### setMaxListeners()

> `static` **setMaxListeners**(`n`?, ...`eventTargets`?): `void`

```js
import { setMaxListeners, EventEmitter } from 'node:events';

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

#### Parameters

• **n?**: `number`

A non-negative number. The maximum number of listeners per `EventTarget` event.

• ...**eventTargets?**: (`EventEmitter`\<`DefaultEventMap`> | `EventTarget`)\[]

#### Returns

`void`

#### Since

v15.4.0

#### Defined in

node\_modules/@types/node/events.d.ts:402

## Events

### on()

#### on(event, listener)

> **on**(`event`, `listener`): `this`

Emitted when the current playing track ends

##### Parameters

• **event**: `"end"`

• **listener**

##### Returns

`this`

##### Defined in

[src/guild/Player.ts:148](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L148)

#### on(event, listener)

> **on**(`event`, `listener`): `this`

Emitted when the current playing track gets stuck due to an error

##### Parameters

• **event**: `"stuck"`

• **listener**

##### Returns

`this`

##### Defined in

[src/guild/Player.ts:153](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L153)

#### on(event, listener)

> **on**(`event`, `listener`): `this`

Emitted when the current websocket connection is closed

##### Parameters

• **event**: `"closed"`

• **listener**

##### Returns

`this`

##### Defined in

[src/guild/Player.ts:158](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L158)

#### on(event, listener)

> **on**(`event`, `listener`): `this`

Emitted when a new track starts

##### Parameters

• **event**: `"start"`

• **listener**

##### Returns

`this`

##### Defined in

[src/guild/Player.ts:163](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L163)

#### on(event, listener)

> **on**(`event`, `listener`): `this`

Emitted when there is an error caused by the current playing track

##### Parameters

• **event**: `"exception"`

• **listener**

##### Returns

`this`

##### Defined in

[src/guild/Player.ts:168](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L168)

#### on(event, listener)

> **on**(`event`, `listener`): `this`

Emitted when the library manages to resume the player

##### Parameters

• **event**: `"resumed"`

• **listener**

##### Returns

`this`

##### Defined in

[src/guild/Player.ts:173](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L173)

#### on(event, listener)

> **on**(`event`, `listener`): `this`

Emitted when a playerUpdate even is received from Lavalink

##### Parameters

• **event**: `"update"`

• **listener**

##### Returns

`this`

##### Defined in

[src/guild/Player.ts:178](https://github.com/shipgirlproject/shoukaku/blob/396aa531096eda327ade0f473f9807576e9ae9df/src/guild/Player.ts#L178)
