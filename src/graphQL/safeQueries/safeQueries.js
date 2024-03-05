import { gql } from "@apollo/client";

export const GET_SAFE = gql`
  query Safe($id: ID!) {
    safe(id: $id) {
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
`;
