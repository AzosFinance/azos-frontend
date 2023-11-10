import { Heading, Stack, Text } from "@chakra-ui/react";
import CardAssetClass from "../../../../2_molecules/CardAssetClass/CardAssetClass";

const PlatformGlobalStatistics = ({ assetClasses, ethPrice }) => {
  return (
    <Stack w="100%" spacing="2rem">
      <Text
        textAlign={["center", "center", "left"]}
        fontSize="xl"
        fontWeight="semibold"
      >
        Platform Global Statistics
      </Text>
      {assetClasses?.map((safe, id) => {
        return (
          <CardAssetClass
            key={id}
            safe={safe}
            ethPrice={ethPrice}
            activeSafes={safe?.activeSafes}
            collateralLocked={safe?.collateralLocked}
            debtTokensHeld={safe?.debtTokensHeld}
          />
        );
      })}
    </Stack>
  );
};

export default PlatformGlobalStatistics;
