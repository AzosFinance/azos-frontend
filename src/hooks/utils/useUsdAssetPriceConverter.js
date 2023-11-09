import { convertToEthValueType } from "@/utils/consts";
import { convertToEth, weiToBigNumber } from "@/utils/funcs";

const useUsdAssetPriceConverter = () => {
  const getUsdAssetPrice = (ethPrice, value) => {
    if (ethPrice && value) {
      const collateralUsdValue =
        Number(value) * convertToEth(convertToEthValueType.notReward, ethPrice);

      return collateralUsdValue;
    }
  };

  return { getUsdAssetPrice };
};

export default useUsdAssetPriceConverter;
