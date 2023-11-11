import { ethers } from "ethers";
import { convertToEthValueType, covertCreateTimeStampType } from "./consts";

export const convertToEth = (type, value) => {
  if (value) {
    if (type == convertToEthValueType.reward) {
      return Number(ethers.utils.formatEther(value)).toFixed("3");
    } else if (type == convertToEthValueType.notReward) {
      return Number(ethers.utils.formatEther(value)).toFixed("2");
    } else if (type == convertToEthValueType.precise) {
      return Number(ethers.utils.formatEther(value)).toFixed("4");
    } else if (type == convertToEthValueType.raw) {
      return Number(ethers.utils.formatEther(value));
    } else if (type == convertToEthValueType.noDecimals) {
      return Number(ethers.utils.formatEther(value)).toFixed("0");
    }
  } else {
    return "0";
  }
};

export const convertToWei = (value) => {
  if (value) {
    return ethers.utils.parseEther(value);
  } else {
    return "0";
  }
};

export const formatNumber = (value) => {
  if (value) {
    return Number(value)?.toLocaleString("en-US");
  } else {
    return "0";
  }
};

export const formatWalletAddress = (address) => {
  if (address) {
    return address.slice(0, 6) + "..." + address.substr(address.length - 6);
  } else {
    return "";
  }
};

export const weiToBigNumber = (value) => {
  if (value) {
    return ethers.BigNumber.from(value);
  } else {
    return "";
  }
};

export const covertCreateTimeStamp = (type, date) => {
  if (date) {
    if (type === covertCreateTimeStampType.short) {
      return new Date(Number(date) * 1000).toLocaleString([], {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      });
    } else if (type === covertCreateTimeStampType.full) {
      return new Date(Number(date) * 1000).toLocaleString([], {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    }
  } else {
    return "--";
  }
};

export const convertBigCurrencyValues = (labelValue) => {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + " B"
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + " M"
    : Number(labelValue)?.toLocaleString("en-US");
};
