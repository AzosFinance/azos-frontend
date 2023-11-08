import { Heading, Stack } from "@chakra-ui/react";
import PlatformGlobalStatisticsVault from "../../../../2_molecules/CardAssetClass/CardAssetClass";

const PlatformGlobalStatistics = ({ assetClasses }) => {
  return (
    <Stack w="100%" spacing="2rem">
      <Heading textAlign="center">Platform Global Statistics</Heading>
      {assetClasses?.map((vault, id) => {
        return <PlatformGlobalStatisticsVault key={id} vault={vault} />;
      })}
    </Stack>
  );
};

export default PlatformGlobalStatistics;
