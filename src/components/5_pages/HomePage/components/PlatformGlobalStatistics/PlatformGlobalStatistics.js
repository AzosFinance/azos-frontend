import { dummyVaults } from "@/utils/consts";
import { Heading, Stack } from "@chakra-ui/react";
import PlatformGlobalStatisticsVault from "../../../../2_molecules/CardAssetClass/CardAssetClass";

const PlatformGlobalStatistics = () => {
  return (
    <Stack w="100%" spacing="2rem">
      <Heading textAlign="center">Platform Global Statistics</Heading>
      {dummyVaults.map((vault, id) => {
        return <PlatformGlobalStatisticsVault key={id} vault={vault} />;
      })}
    </Stack>
  );
};

export default PlatformGlobalStatistics;
