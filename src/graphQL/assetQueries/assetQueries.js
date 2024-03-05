import { gql } from "@apollo/client";

export const GET_ASSET_CLASS = gql`
  query AssetClass($id: ID!) {
    assetClass(id: $id) {
      id
      collateralType
      collateralTypeName
      collateral
      collateralLocked
      debtTokensHeld
      activeSafes
      safes {
        safe {
          id
          safeId
          amountCollateral
          amountCoin
          collateralType
          user
          assetClass {
            collateralTypeName
            collateral
          }
        }
      }
    }
  }
`;
