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
