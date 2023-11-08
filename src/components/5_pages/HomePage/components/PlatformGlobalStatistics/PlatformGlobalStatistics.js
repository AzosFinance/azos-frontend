import { Heading, Stack } from "@chakra-ui/react";
import CardAssetClass from "../../../../2_molecules/CardAssetClass/CardAssetClass";

const PlatformGlobalStatistics = ({ assetClasses }) => {
  return (
    <Stack w="100%" spacing="2rem">
      <Heading textAlign="center">Platform Global Statistics</Heading>
      {assetClasses?.map((safe, id) => {
        return <CardAssetClass key={id} safe={safe} />;
      })}
    </Stack>
  );
};

export default PlatformGlobalStatistics;
