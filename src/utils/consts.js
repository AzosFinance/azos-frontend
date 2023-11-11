import {
  BCT_ADDRESS,
  BCT_COLLATERAL_JOIN,
  FGB_ADDRESS,
  FGB_COLLATERAL_JOIN,
  REI_ADDRESS,
  REI_COLLATERAL_JOIN,
} from "@/web3/addresses";

export const sepoliaScanAddress = "https://sepolia.etherscan.io/address/";

export const convertToEthValueType = {
  reward: "reward",
  notReward: "notReward",
  precise: "precise",
  raw: "raw",
  noDecimals: "noDecimals",
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
    title: "Amount",
    description: "Input the amount of collateral you wish to deposit.",
  },
  {
    title: "Approve",
    description: "Approve collateral",
  },
  {
    title: "Create",
    description: "Confirm your deposit",
  },
];

export const tokenNames = {
  zai: "ZAI",
  bct: "BCT",
  fgb: "FGB",
  rei: "REI",
  usdc: "USDC",
};
