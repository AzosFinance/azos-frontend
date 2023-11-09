import useUsdAssetPriceConverter from "@/hooks/utils/useUsdAssetPriceConverter";
import { convertToEthValueType } from "@/utils/consts";
import { convertToEth, formatNumber, formatWalletAddress } from "@/utils/funcs";
import { Tr, Td, Link, Text, Stack, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

const SafeTableRow = ({ safe, collateralTypeName, ethPrice }) => {
  const router = useRouter();

  const { getUsdAssetPrice } = useUsdAssetPriceConverter();

  return (
    <>
      <Tr>
        <Td>
          <Button w="5rem" colorScheme="teal" variant="outline" size="xs">
            #{safe?.safe?.safeId}
          </Button>
        </Td>
        <Td>
          <Link
            fontSize="sm"
            onClick={() => router.push("/user/" + safe?.safe?.user)}
          >
            {formatWalletAddress(safe?.safe?.user)}
          </Link>
        </Td>
        <Td>
          <Stack justifyContent="center">
            <Stack direction="row" alignItems="center" fontSize="sm">
              <Text>
                {formatNumber(
                  convertToEth(
                    convertToEthValueType.notReward,
                    safe?.safe?.amountCollateral
                  )
                )}
              </Text>
              <Text color="gray.500">{collateralTypeName}</Text>
            </Stack>
            <Text color="gray.500" fontSize="xs">
              ${" "}
              {formatNumber(
                getUsdAssetPrice(
                  ethPrice,
                  convertToEth(
                    convertToEthValueType.notReward,
                    safe?.safe?.amountCollateral
                  )
                )?.toFixed("0")
              )}
            </Text>
          </Stack>
        </Td>
        <Td>
          <Stack justifyContent="center">
            <Stack direction="row" alignItems="center" fontSize="sm">
              <Text>
                {formatNumber(
                  convertToEth(
                    convertToEthValueType.notReward,
                    safe?.safe?.amountCoin
                  )
                )}
              </Text>
              <Text color="gray.500">ZAI</Text>
            </Stack>
            <Text color="gray.500" fontSize="xs">
              ${" "}
              {formatNumber(
                convertToEth(
                  convertToEthValueType.notReward,
                  safe?.safe?.amountCoin
                )
              )}
            </Text>
          </Stack>
        </Td>
      </Tr>
    </>
  );
};

export default SafeTableRow;
