import EcosystemInformation from "@/components/5_pages/HomePage/components/EcosystemInformation/EcosystemInformation";
import { Divider, Stack } from "@chakra-ui/react";
import PlatformGlobalStatistics from "./components/PlatformGlobalStatistics/PlatformGlobalStatistics";
import { GET_ASSET_CLASSES } from "@/graphQL/queries";
import LoadingPage from "@/components/1_atoms/LoadingPage/LoadingPage";
import { useQuery } from "@apollo/client";
import useGetEthPrice from "@/hooks/web3Hooks/useGetEthPrice";

const HomePage = () => {
  const { data: dataAssetClasses, loading: loadingAssetClasses } =
    useQuery(GET_ASSET_CLASSES);

  const { ethPrice, loadingEthPrice } = useGetEthPrice();

  return loadingAssetClasses || loadingEthPrice ? (
    <LoadingPage />
  ) : (
    <Stack w="100%" spacing="3rem" mt="1rem">
      <EcosystemInformation data={dataAssetClasses} ethPrice={ethPrice} />
      <Divider />
      <PlatformGlobalStatistics
        assetClasses={dataAssetClasses?.assetClasses}
        ethPrice={ethPrice}
      />
    </Stack>
  );
};

export default HomePage;
