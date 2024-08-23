---
editUrl: false
next: false
prev: false
title: RoutePlanner
slug: 4.1.0/apiinterfaces/routeplanner
---

## Properties

<a id="class" name="class" />

### class

```ts
class: 
  | null
  | "RotatingIpRoutePlanner"
  | "NanoIpRoutePlanner"
  | "RotatingNanoIpRoutePlanner"
  | "BalancingIpRoutePlanner";
```

#### Defined in

[shoukaku/src/node/Rest.ts:84](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Rest.ts#L84)

***

<a id="details" name="details" />

### details

```ts
details: null | {
  blockIndex: string;
  currentAddress: string;
  currentAddressIndex: string;
  failingAddresses: Address[];
  ipBlock: {
     size: string;
     type: string;
    };
  ipIndex: string;
  rotateIndex: string;
};
```

#### Defined in

[shoukaku/src/node/Rest.ts:85](https://github.com/shipgirlproject/shoukaku/blob/30762f5af6c7b4176e69ee96fa39bc204a7cff21/src/node/Rest.ts#L85)
