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

[shoukaku/src/node/Rest.ts:84](https://github.com/shipgirlproject/shoukaku/blob/9d5588e950f8b8cbe3cdd5386a275943ff6fdba1/src/node/Rest.ts#L84)

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

[shoukaku/src/node/Rest.ts:85](https://github.com/shipgirlproject/shoukaku/blob/9d5588e950f8b8cbe3cdd5386a275943ff6fdba1/src/node/Rest.ts#L85)
