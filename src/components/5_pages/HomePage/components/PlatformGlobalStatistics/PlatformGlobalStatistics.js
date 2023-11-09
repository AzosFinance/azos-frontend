import { Heading, Stack, Text } from "@chakra-ui/react";
import CardAssetClass from "../../../../2_molecules/CardAssetClass/CardAssetClass";

const PlatformGlobalStatistics = ({ assetClasses, ethPrice }) => {
  return (
    <Stack w="100%" spacing="2rem">
      <Text fontSize="xl" fontWeight="semibold">
        Platform Global Statistics
      </Text>
      {assetClasses?.map((safe, id) => {
        return <CardAssetClass key={id} safe={safe} ethPrice={ethPrice} />;
      })}
    </Stack>
  );
};

export default PlatformGlobalStatistics;
