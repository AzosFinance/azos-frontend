import EcosystemInformation from "@/components/5_pages/AnaticisPage/components/EcosystemInformation/EcosystemInformation";
import { Divider, Stack } from "@chakra-ui/react";
import PlatformGlobalStatistics from "./components/PlatformGlobalStatistics/PlatformGlobalStatistics";
import LoadingPage from "@/components/1_atoms/LoadingPage/LoadingPage";
import { useQuery } from "@apollo/client";
import useGetEthPrice from "@/hooks/web3Hooks/useGetEthPrice";
import { STABILITY_MODULE } from "@/web3/addresses";
import useZaiPrice from "@/hooks/web3Hooks/useZaiPrice";
import { GET_DASHBOARD_DATA } from "@/graphQL/dashboardQueries/dashboardQueries";

const AnaticisPage = () => {
  const { data: dataAssetClasses, loading: loadingAssetClasses } = useQuery(
    GET_DASHBOARD_DATA,
    { variables: { stabolityModuleId: STABILITY_MODULE } }
  );

  const { ethPrice, loadingEthPrice } = useGetEthPrice();

  const { zaiPrice, isLoadingUniswapGetReserves } = useZaiPrice();

  return loadingAssetClasses ||
    loadingEthPrice ||
    isLoadingUniswapGetReserves ? (
    <LoadingPage />
  ) : (
    <Stack w="100%" spacing="1.5rem" mt="2rem">
      <EcosystemInformation
        data={dataAssetClasses}
        ethPrice={ethPrice}
        zaiPrice={zaiPrice}
      />
      <Divider />
      <PlatformGlobalStatistics
        assetClasses={dataAssetClasses?.assetClasses}
        ethPrice={ethPrice}
        zaiPrice={zaiPrice}
      />
    </Stack>
  );
};

export default AnaticisPage;
