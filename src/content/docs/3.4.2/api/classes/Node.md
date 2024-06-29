---
editUrl: false
next: false
prev: false
title: Node
slug: 3.4.2/apiclasses/node
---

Represents a Lavalink node

## Extends

* `EventEmitter`

## Constructors

### new Node()

> **new Node**(`manager`, `options`): [`Node`](/3.4.2/api/classes/node/)

#### Parameters

• **manager**: [`Shoukaku`](/3.4.2/api/classes/shoukaku/)

Shoukaku instance

• **options**: [`NodeOption`](/3.4.2/api/interfaces/nodeoption/)

#### Returns

[`Node`](/3.4.2/api/classes/node/)

#### Overrides

`EventEmitter.constructor`

#### Defined in

[src/node/Node.ts:125](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/node/Node.ts#L125)

## Properties

### group?

> `readonly` `optional` **group**: `string`

Group in which this node is contained

#### Defined in

[src/node/Node.ts:84](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/node/Node.ts#L84)

***

### manager

> `readonly` **manager**: [`Shoukaku`](/3.4.2/api/classes/shoukaku/)

Shoukaku class

#### Defined in

[src/node/Node.ts:64](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/node/Node.ts#L64)

***

### name

> `readonly` **name**: `string`

Name of this node

#### Defined in

[src/node/Node.ts:80](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/node/Node.ts#L80)

***

### players

> `readonly` **players**: `Map`\<`string`, [`Player`](/3.4.2/api/classes/player/)>

A map of guild ID to players

#### Defined in

[src/node/Node.ts:68](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/node/Node.ts#L68)

***

### queue

> `readonly` **queue**: `Queue`

Lavalink API message queue

#### Defined in

[src/node/Node.ts:76](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/node/Node.ts#L76)

***

### reconnects

> **reconnects**: `number`

The number of reconnects to Lavalink

#### Defined in

[src/node/Node.ts:96](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/node/Node.ts#L96)

***

### rest

> `readonly` **rest**: [`Rest`](/3.4.2/api/classes/rest/)

Lavalink rest API

#### Defined in

[src/node/Node.ts:72](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/node/Node.ts#L72)

***

### state

> **state**: [`State`](/3.4.2/api/namespaces/constants/enumerations/state/)

The state of this connection

#### Defined in

[src/node/Node.ts:100](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/node/Node.ts#L100)

***

### stats

> **stats**: `null` | [`NodeStats`](/3.4.2/api/interfaces/nodestats/)

Statistics from Lavalink

#### Defined in

[src/node/Node.ts:104](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/node/Node.ts#L104)

***

### ws

> **ws**: `null` | `WebSocket`

Websocket instance

#### Defined in

[src/node/Node.ts:108](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/node/Node.ts#L108)

***

### captureRejectionSymbol

> `readonly` `static` **captureRejectionSymbol**: *typeof* [`captureRejectionSymbol`](/3.4.2/api/classes/connection/#capturerejectionsymbol)

Value: `Symbol.for('nodejs.rejection')`

See how to write a custom `rejection handler`.

#### Since

v13.4.0, v12.16.0

#### Inherited from

`EventEmitter.captureRejectionSymbol`

#### Defined in

node\_modules/@types/node/events.d.ts:452

***

### captureRejections

> `static` **captureRejections**: `boolean`

Value: [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Change the default `captureRejections` option on all new `EventEmitter` objects.

#### Since

v13.4.0, v12.16.0

#### Inherited from

`EventEmitter.captureRejections`

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

#### Inherited from

`EventEmitter.defaultMaxListeners`

#### Defined in

node\_modules/@types/node/events.d.ts:498

***

### errorMonitor

> `readonly` `static` **errorMonitor**: *typeof* [`errorMonitor`](/3.4.2/api/classes/connection/#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'` events. Listeners installed using this symbol are called before the regular `'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an `'error'` event is emitted. Therefore, the process will still crash if no
regular `'error'` listener is installed.

#### Since

v13.6.0, v12.17.0

#### Inherited from

`EventEmitter.errorMonitor`

#### Defined in

node\_modules/@types/node/events.d.ts:445

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

#### Inherited from

`EventEmitter.[captureRejectionSymbol]`

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

#### Inherited from

`EventEmitter.addListener`

#### Since

v0.1.26

#### Defined in

node\_modules/@types/node/events.d.ts:597

***

### connect()

> **connect**(): `void`

Connect to Lavalink

#### Returns

`void`

#### Defined in

[src/node/Node.ts:166](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/node/Node.ts#L166)

***

### disconnect()

> **disconnect**(`code`, `reason`?): `void`

Disconnect from lavalink

#### Parameters

• **code**: `number`

Status code

• **reason?**: `string`

Reason for disconnect

#### Returns

`void`

#### Defined in

[src/node/Node.ts:207](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/node/Node.ts#L207)

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

#### Inherited from

`EventEmitter.emit`

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

#### Inherited from

`EventEmitter.eventNames`

#### Since

v6.0.0

#### Defined in

node\_modules/@types/node/events.d.ts:922

***

### getMaxListeners()

> **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](../../../../../../api/classes/node/#defaultmaxlisteners).

#### Returns

`number`

#### Inherited from

`EventEmitter.getMaxListeners`

#### Since

v1.0.0

#### Defined in

node\_modules/@types/node/events.d.ts:774

***

### joinChannel()

> **joinChannel**(`options`): `Promise`\<[`Player`](/3.4.2/api/classes/player/)>

Join a voice channel in a guild

#### Parameters

• **options**: [`VoiceChannelOptions`](/3.4.2/api/interfaces/voicechanneloptions/)

#### Returns

`Promise`\<[`Player`](/3.4.2/api/classes/player/)>

A promise that resolves to a player class

#### Defined in

[src/node/Node.ts:225](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/node/Node.ts#L225)

***

### leaveChannel()

> **leaveChannel**(`guildId`): `void`

Disconnect from connected voice channel

#### Parameters

• **guildId**: `string`

ID of guild that contains voice channel

#### Returns

`void`

#### Defined in

[src/node/Node.ts:256](https://github.com/shipgirlproject/shoukaku/blob/e7d94081cabbda7327dc04e467a45fcda49c24f2/src/node/Node.ts#L256)

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

#### Inherited from

`EventEmitter.listenerCount`

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

#### Inherited from

`EventEmitter.listeners`

#### Since

v0.1.26

#### Defined in

node\_modules/@types/node/events.d.ts:787

***

### off()

> **off**\<`K`>(`eventName`, `listener`): `this`

Alias for `emitter.removeListener()`.

#### Type Parameters

• **K**

#### Parameters

• **eventName**: `string` | `symbol`

• **listener**

#### Returns

`this`

#### Inherited from

`EventEmitter.off`

#### Since

v10.0.0

#### Defined in

node\_modules/@types/node/events.d.ts:747

***

### on()

> **on**\<`K`>(`eventName`, `listener`): `this`

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

• **K**

#### Parameters

• **eventName**: `string` | `symbol`

The name of the event.

• **listener**

The callback function

#### Returns

`this`

#### Inherited from

`EventEmitter.on`

#### Since

v0.1.101

#### Defined in

node\_modules/@types/node/events.d.ts:629

***

### once()

> **once**\<`K`>(`eventName`, `listener`): `this`

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

• **K**

#### Parameters

• **eventName**: `string` | `symbol`

The name of the event.

• **listener**

The callback function

#### Returns

`this`

#### Inherited from

`EventEmitter.once`

#### Since

v0.3.0

#### Defined in

node\_modules/@types/node/events.d.ts:659

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

#### Inherited from

`EventEmitter.prependListener`

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

#### Inherited from

`EventEmitter.prependOnceListener`

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

#### Inherited from

`EventEmitter.rawListeners`

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

#### Inherited from

`EventEmitter.removeAllListeners`

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

#### Inherited from

`EventEmitter.removeListener`

#### Since

v0.1.26

#### Defined in

node\_modules/@types/node/events.d.ts:742

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

#### Inherited from

`EventEmitter.setMaxListeners`

#### Since

v0.3.5

#### Defined in

node\_modules/@types/node/events.d.ts:768

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

#### Inherited from

`EventEmitter.addAbortListener`

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

#### Inherited from

`EventEmitter.getEventListeners`

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

#### Inherited from

`EventEmitter.getMaxListeners`

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

#### Inherited from

`EventEmitter.listenerCount`

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

##### Inherited from

`EventEmitter.on`

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

##### Inherited from

`EventEmitter.on`

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

##### Inherited from

`EventEmitter.once`

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

##### Inherited from

`EventEmitter.once`

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

#### Inherited from

`EventEmitter.setMaxListeners`

#### Since

v15.4.0

#### Defined in

node\_modules/@types/node/events.d.ts:402
