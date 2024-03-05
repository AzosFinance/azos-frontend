import LoadingPage from "@/components/1_atoms/LoadingPage/LoadingPage";
import StatInfo from "@/components/2_molecules/StatInfo/StatInfo";
import { GET_SAFE } from "@/graphQL/safeQueries/safeQueries";
import { convertToEthValueType, tokenNames } from "@/utils/consts";
import { convertToEth, formatNumber, formatWalletAddress } from "@/utils/funcs";
import { useQuery } from "@apollo/client";
import {
  Link,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useColorMode,
} from "@chakra-ui/react";

import { useRouter } from "next/router";

const Safe = () => {
  const router = useRouter();
  const { colorMode } = useColorMode();

  const { data, loading } = useQuery(GET_SAFE, {
    variables: { id: router.query.id },
  });

  return loading ? (
    <LoadingPage />
  ) : (
    <Stack
      w="100%"
      h="30rem"
      spacing="2rem"
      mt="2rem"
      justifyContent="center"
      alignItems="center"
    >
      <Stack w={["100%", "100%", "50%"]} spacing="1rem">
        <Text
          textAlign={["center", "center", "left"]}
          fontWeight="semibold"
          fontSize="xl"
        >
          Safe #{data?.safe?.safeId}
        </Text>
        <Stack
          p="1rem"
          rounded="md"
          border="1px"
          spacing="1rem"
          borderColor={colorMode === "light" ? "blue.200" : "gray.500"}
          shadow="lg"
        >
          <Stack spacing="1rem">
            <Stack direction="row" alignItems="center">
              <StatInfo
                valueSize="md"
                label="Collateral Type"
                value={data?.safe?.assetClass?.collateralTypeName}
              />
              <Stat textAlign="center">
                <StatLabel>Owner</StatLabel>
                <StatNumber mt="0.3rem" fontSize="md">
                  <Link
                    onClick={() => router.push("/user/" + data?.safe?.user)}
                  >
                    {formatWalletAddress(data?.safe?.user)}
                  </Link>
                </StatNumber>
              </Stat>
            </Stack>
            <Stack direction="row" alignItems="center">
              <StatInfo
                valueSize="md"
                label="Collateral Amount"
                value={
                  formatNumber(
                    convertToEth(
                      convertToEthValueType.notReward,
                      data?.safe?.amountCollateral
                    )
                  ) +
                  " " +
                  data?.safe?.assetClass?.collateralTypeName
                }
              />
              <StatInfo
                valueSize="md"
                label="Debt"
                value={
                  formatNumber(
                    convertToEth(
                      convertToEthValueType.notReward,
                      data?.safe?.amountCoin
                    )
                  ) +
                  " " +
                  tokenNames.zai
                }
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Safe;
