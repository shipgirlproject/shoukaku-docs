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

[shoukaku/src/node/Rest.ts:84](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/node/Rest.ts#L84)

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

[shoukaku/src/node/Rest.ts:85](https://github.com/shipgirlproject/shoukaku/blob/049b5dc536f3b28e41c5423a707d8a02ac9377a7/src/node/Rest.ts#L85)
