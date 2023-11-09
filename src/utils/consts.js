export const dummyVaults = [
  {
    vaultName: "ETH",
    vaultSymbol: "ETH",
    vaultsRoute: "/vaults/eth",
    activeSafes: "3,543",
    totalVaults: "2,354",
    currentPrice: 1700,
    collateralMovementPercentage: "+2.2%",
    tokenCollateralLocked: 2543856,
    debtTokensHeld: 1119394.1,
    debtTokensHeldUsd: 1542753,
    vaultSurcharge: "2%",
  },
  {
    vaultName: "Green",
    vaultSymbol: "KLIMA",
    vaultsRoute: "/vaults/green",
    activeSafes: "4,623",
    totalVaults: "4,213",
    currentPrice: 1.56,
    collateralMovementPercentage: "-5%",
    tokenCollateralLocked: 5236912,
    debtTokensHeld: 32634235.34,
    debtTokensHeldUsd: 2654234,
    vaultSurcharge: "2%",
  },
  {
    vaultName: "Stable",
    vaultSymbol: "USDC",
    vaultsRoute: "/vaults/stable",
    activeSafes: "5,643",
    totalVaults: "2,532",
    currentPrice: 1.13,
    collateralMovementPercentage: "+0.04%",
    tokenCollateralLocked: 381254,
    debtTokensHeld: 20342856.65,
    debtTokensHeldUsd: 5346124,
    vaultSurcharge: "2%",
  },
];

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
  "0x1d1faae1e739d772566f8fb17a824c10a4868aa0": 0.0432, // BCT
  "0xe6f85fbeda18eb49072e3b4bb1aaaefcc8255397": 0.0054, // FGB
  "0x0879be43d76d2cb4aded433a177a6a78bfe8e85c": 0.0189, // REI
};
