import { gql } from "@apollo/client";

export const GET_DASHBOARD_DATA = gql`
  query AssetClasses($stabolityModuleId: ID!) {
    ecosystemInfo(id: "ecosystemInfo") {
      id
      totalCollateralLocked
      totalDebt
      totalSafes
      totalAssetClasses
    }
    assetClasses {
      id
      collateralType
      collateralTypeName
      collateral
      collateralLocked
      debtTokensHeld
      activeSafes
    }
    stabilityModule(id: $stabolityModuleId) {
      id
      balance
      debt
      deposit
    }
  }
`;
