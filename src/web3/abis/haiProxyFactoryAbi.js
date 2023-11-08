export const haiProxyFactoryAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_proxy",
        type: "address",
      },
    ],
    name: "Created",
    type: "event",
  },
  {
    inputs: [],
    name: "build",
    outputs: [
      { internalType: "address payable", name: "_proxy", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_owner", type: "address" }],
    name: "build",
    outputs: [
      { internalType: "address payable", name: "_proxy", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_proxyAddress", type: "address" },
    ],
    name: "isProxy",
    outputs: [{ internalType: "bool", name: "_exists", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
];
