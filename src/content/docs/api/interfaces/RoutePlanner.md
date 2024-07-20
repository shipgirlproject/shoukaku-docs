---
editUrl: false
next: false
prev: false
title: "RoutePlanner"
---

## Properties

<a id="class" name="class"></a>

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

[node/Rest.ts:84](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/node/Rest.ts#L84)

***

<a id="details" name="details"></a>

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

[node/Rest.ts:85](https://github.com/shipgirlproject/shoukaku/blob/428f92c432a1875d1770e54c312147a1f47a448d/src/node/Rest.ts#L85)
