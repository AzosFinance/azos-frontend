export const oraclePriceFeedAbi = [
  {
    inputs: [
      { internalType: "address", name: "_aggregator", type: "address" },
      { internalType: "uint256", name: "_staleThreshold", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  { inputs: [], name: "CallerNotFactory", type: "error" },
  { inputs: [], name: "ChainlinkRelayer_NullAggregator", type: "error" },
  { inputs: [], name: "ChainlinkRelayer_NullStaleThreshold", type: "error" },
  { inputs: [], name: "InvalidPriceFeed", type: "error" },
  { inputs: [], name: "NotFactoryDeployment", type: "error" },
  {
    inputs: [],
    name: "chainlinkFeed",
    outputs: [
      { internalType: "contract IChainlinkOracle", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getResultWithValidity",
    outputs: [
      { internalType: "uint256", name: "_result", type: "uint256" },
      { internalType: "bool", name: "_validity", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "multiplier",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "read",
    outputs: [{ internalType: "uint256", name: "_result", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "staleThreshold",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
];
