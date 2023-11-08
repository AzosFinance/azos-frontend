import { gql } from "@apollo/client";

export const GET_ASSET_CLASSES = gql`
  query AssetClasses {
    assetClasses {
      id
      collateralType
      collateralTypeName
      collateral
      collateralLocked
      debtTokensHeld
      activeVaults
    }
  }
`;

export const GET_ASSET_CLASS = gql`
  query AssetClass($id: ID!) {
    assetClass(id: $id) {
      id
      collateralType
      collateralTypeName
      collateral
      collateralLocked
      debtTokensHeld
      activeVaults
    }
  }
`;
