import { gql } from "@apollo/client";

export const GET_USER_PROXY = gql`
  query UserProxy($id: ID!) {
    userProxy(id: $id) {
      id
      userProxyAssetClassStatDeposits {
        id
        collateralLocked
        debtTokensHeld
        activeSafes
        assetClass {
          id
          collateralType
          collateralTypeName
          collateral
          safes(where: { safe_: { user: $id } }) {
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
    }
  }
`;

export const GET_USER_CREATE_SAFE = gql`
  query UserProxy($id: ID!) {
    userProxy(id: $id) {
      id
      proxy
    }
    assetClasses {
      id
      collateral
      collateralTypeName
      collateralLocked
      debtTokensHeld
      collateralType
    }
  }
`;
