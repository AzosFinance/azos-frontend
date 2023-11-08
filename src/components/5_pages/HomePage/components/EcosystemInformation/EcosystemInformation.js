import StatInfo from "@/components/2_molecules/StatInfo/StatInfo";
import { Heading, Stack } from "@chakra-ui/react";
import EcosystemInfoCard from "./components/EcosystemInfoCard/EcosystemInfoCard";
import { convertToEth, formatNumber } from "@/utils/funcs";
import { convertToEthValueType } from "@/utils/consts";

const EcosystemInformation = ({ data }) => {
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
          <Stack direction="row" spacing="1rem">
            <Stack spacing="1rem">
              <EcosystemInfoCard>
                <StatInfo
                  label="Total Safes"
                  value={formatNumber(data?.ecosystemInfo?.totalSafes)}
                  helper="Created"
                />
                <StatInfo
                  label="TVL"
                  value={formatNumber(
                    convertToEth(
                      convertToEthValueType.notReward,
                      data?.ecosystemInfo?.totalCollateralLocked
                    )
                  )}
                  helper="Collateral"
                />
              </EcosystemInfoCard>
              <EcosystemInfoCard>
                <StatInfo label="Klima DAO" value="$ 1,815.21 USD" />
              </EcosystemInfoCard>
            </Stack>
            <Stack spacing="1rem">
              <EcosystemInfoCard>
                <StatInfo
                  label="Active Safes"
                  value={formatNumber(data?.ecosystemInfo?.totalSafes)}
                  helper="With Balance"
                />
                <StatInfo
                  label="Collateral"
                  value={formatNumber(
                    convertToEth(
                      convertToEthValueType.notReward,
                      data?.ecosystemInfo?.totalDebt
                    )
                  )}
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
