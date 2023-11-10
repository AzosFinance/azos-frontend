import {
  BCT_ADDRESS,
  BCT_COLLATERAL_JOIN,
  FGB_ADDRESS,
  FGB_COLLATERAL_JOIN,
  REI_ADDRESS,
  REI_COLLATERAL_JOIN,
} from "@/web3/addresses";

export const convertToEthValueType = {
  reward: "reward",
  notReward: "notReward",
  precise: "precise",
  raw: "raw",
};

export const covertCreateTimeStampType = {
  short: "short",
  full: "full",
};

export const collateralPrices = {
  [BCT_ADDRESS]: 0.0432, // BCT
  [FGB_ADDRESS]: 0.0054, // FGB
  [REI_ADDRESS]: 0.0189, // REI
};

export const collateralJoinAddresses = {
  [BCT_ADDRESS]: BCT_COLLATERAL_JOIN, // BCT
  [FGB_ADDRESS]: FGB_COLLATERAL_JOIN, // FGB
  [REI_ADDRESS]: REI_COLLATERAL_JOIN, // REI
};

export const createSafeSteps = [
  {
    title: "First",
    description: "Input the amount of collateral you wish to deposit.",
  },
  {
    title: "Second",
    description: "Approve collateral",
  },
  {
    title: "Third",
    description: "Confirm your deposit",
  },
];
