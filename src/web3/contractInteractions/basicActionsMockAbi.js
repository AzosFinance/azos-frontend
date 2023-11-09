export const basicActionsMockAbi = [
  {
    inputs: [],
    name: "IntOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyDelegateCalls",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amountCollateral",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amountCoin",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "collateralType",
        type: "bytes32",
      },
    ],
    name: "CreateSafe",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_coinJoin",
        type: "address",
      },
    ],
    name: "exitAllSystemCoins",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_collateralJoin",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_wad",
        type: "uint256",
      },
    ],
    name: "exitCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_coinJoin",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_coinsToExit",
        type: "uint256",
      },
    ],
    name: "exitSystemCoins",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_manager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_collateralJoin",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_safeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deltaWad",
        type: "uint256",
      },
    ],
    name: "freeTokenCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_manager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_taxCollector",
        type: "address",
      },
      {
        internalType: "address",
        name: "_coinJoin",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_safeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deltaWad",
        type: "uint256",
      },
    ],
    name: "generateDebt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_coinJoin",
        type: "address",
      },
      {
        internalType: "address",
        name: "_dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_wad",
        type: "uint256",
      },
    ],
    name: "joinSystemCoins",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_manager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_collateralJoin",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_safeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deltaWad",
        type: "uint256",
      },
    ],
    name: "lockTokenCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_manager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_taxCollector",
        type: "address",
      },
      {
        internalType: "address",
        name: "_collateralJoin",
        type: "address",
      },
      {
        internalType: "address",
        name: "_coinJoin",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_safe",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_collateralAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deltaWad",
        type: "uint256",
      },
    ],
    name: "lockTokenCollateralAndGenerateDebt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_manager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_taxCollector",
        type: "address",
      },
      {
        internalType: "address",
        name: "_collateralJoin",
        type: "address",
      },
      {
        internalType: "address",
        name: "_coinJoin",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_cType",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_collateralAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deltaWad",
        type: "uint256",
      },
    ],
    name: "openLockTokenCollateralAndGenerateDebt",
    outputs: [
      {
        internalType: "uint256",
        name: "_safe",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_manager",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_cType",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_usr",
        type: "address",
      },
    ],
    name: "openSAFE",
    outputs: [
      {
        internalType: "uint256",
        name: "_safeId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_manager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_taxCollector",
        type: "address",
      },
      {
        internalType: "address",
        name: "_coinJoin",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_safeId",
        type: "uint256",
      },
    ],
    name: "repayAllDebt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_manager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_taxCollector",
        type: "address",
      },
      {
        internalType: "address",
        name: "_collateralJoin",
        type: "address",
      },
      {
        internalType: "address",
        name: "_coinJoin",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_safeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_collateralWad",
        type: "uint256",
      },
    ],
    name: "repayAllDebtAndFreeTokenCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_manager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_taxCollector",
        type: "address",
      },
      {
        internalType: "address",
        name: "_coinJoin",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_safeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deltaWad",
        type: "uint256",
      },
    ],
    name: "repayDebt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_manager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_taxCollector",
        type: "address",
      },
      {
        internalType: "address",
        name: "_collateralJoin",
        type: "address",
      },
      {
        internalType: "address",
        name: "_coinJoin",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_safeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_collateralWad",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_debtWad",
        type: "uint256",
      },
    ],
    name: "repayDebtAndFreeTokenCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
