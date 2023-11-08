import EcosystemInformation from "@/components/5_pages/HomePage/components/EcosystemInformation/EcosystemInformation";
import { Stack } from "@chakra-ui/react";
import PlatformGlobalStatistics from "./components/PlatformGlobalStatistics/PlatformGlobalStatistics";
import { GET_ASSET_CLASSES } from "@/graphQL/queries";
import LoadingPage from "@/components/1_atoms/LoadingPage/LoadingPage";
import { useQuery } from "@apollo/client";

const HomePage = () => {
  const { data, loading } = useQuery(GET_ASSET_CLASSES);

  return loading ? (
    <LoadingPage />
  ) : (
    <Stack w="100%" spacing="3rem">
      <EcosystemInformation data={data} />
      <PlatformGlobalStatistics assetClasses={data?.assetClasses} />
    </Stack>
  );
};

export default HomePage;
