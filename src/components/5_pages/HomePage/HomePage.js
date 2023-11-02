import EcosystemInformation from "@/components/5_pages/HomePage/components/EcosystemInformation/EcosystemInformation";
import { Stack } from "@chakra-ui/react";
import PlatformGlobalStatistics from "./components/PlatformGlobalStatistics/PlatformGlobalStatistics";

const HomePage = () => {
  return (
    <Stack w="100%" spacing="3rem">
      <EcosystemInformation />
      <PlatformGlobalStatistics />
    </Stack>
  );
};

export default HomePage;
