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
      safes {
        safe {
          id
          safeId
          amountCollateral
          amountCoin
          collateralType
          user
        }
      }
    }
  }
`;

export const GET_USER_PROXY = gql`
  query UserProxy($id: ID!) {
    userProxy(id: $id) {
      id
      safes {
        safe {
          assetClass {
            id
            collateralType
            collateralTypeName
            collateral
            collateralLocked
            debtTokensHeld
            activeVaults
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
                }
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
    }
  }
`;