import StatInfo from "@/components/2_molecules/StatInfo/StatInfo";
import { Heading, Stack } from "@chakra-ui/react";
import EcosystemInfoCard from "./components/EcosystemInfoCard/EcosystemInfoCard";

const EcosystemInformation = () => {
  return (
    <Stack w="100%" alignItems="center">
      <Stack spacing="1.5rem">
        <Heading textAlign="center">Ecosystem Information</Heading>
        <Stack
          alignItems="center"
          spacing="1rem"
          border="1px"
          rounded="md"
          p="2rem"
          shadow="lg"
        >
          <Stack direction="row">
            <Stack spacing="1rem">
              <EcosystemInfoCard>
                <StatInfo label="Total Safes" value="2,437" helper="Created" />
                <StatInfo label="TVL" value="13,087.22" helper="Collateral" />
              </EcosystemInfoCard>
              <EcosystemInfoCard>
                <StatInfo label="Klima DAO" value="$ 1,815.21 USD" />
              </EcosystemInfoCard>
            </Stack>
            <Stack spacing="1rem">
              <EcosystemInfoCard>
                <StatInfo
                  label="Active Safes"
                  value="130"
                  helper="With Balance"
                />
                <StatInfo
                  label="Collateral Ratio"
                  value="338.66%"
                  helper="Overall"
                />
              </EcosystemInfoCard>
              <EcosystemInfoCard>
                <StatInfo label="Annual Redemption Rate" value="10.505 %" />
              </EcosystemInfoCard>
            </Stack>
            <Stack spacing="1rem">
              <EcosystemInfoCard>
                <StatInfo
                  label="Market Price"
                  value="$ 2.789 USD"
                  helper="SOZA"
                />
                <StatInfo
                  label="Redemption Price"
                  value="2,515,081"
                  helper="SOZA"
                />
              </EcosystemInfoCard>
              <EcosystemInfoCard>
                <StatInfo label="Outstanding SOZA" value="1,300,000" />
              </EcosystemInfoCard>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default EcosystemInformation;
