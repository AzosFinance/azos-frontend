import useUsdAssetPriceConverter from "@/hooks/utils/useUsdAssetPriceConverter";
import {
  collateralPrices,
  convertToEthValueType,
  tokenNames,
} from "@/utils/consts";
import { convertToEth, formatNumber, formatWalletAddress } from "@/utils/funcs";
import {
  Tr,
  Td,
  Link,
  Text,
  Stack,
  Button,
  Icon,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaUser } from "react-icons/fa";

const SafeTableRow = ({ safe, collateralTypeName, ethPrice, zaiPrice }) => {
  const { colorMode } = useColorMode();
  const router = useRouter();

  const { getUsdAssetPrice } = useUsdAssetPriceConverter();

  return (
    <>
      <Tr>
        <Td>
          <Flex justifyContent="center">
            <Button
              w="5rem"
              colorScheme="blue"
              variant="outline"
              size="xs"
              onClick={() => router.push("/safe/" + safe?.safe?.id)}
            >
              #{safe?.safe?.safeId}
            </Button>
          </Flex>
        </Td>
        <Td>
          <Stack
            direction="row"
            alignItems="center"
            spacing="0.5rem"
            cursor="pointer"
            fontWeight="semibold"
            onClick={() => router.push("/user/" + safe?.safe?.user)}
            justifyContent="center"
          >
            <Icon color="gray.500" fontSize="xs" as={FaUser} />
            <Link fontSize="sm">{formatWalletAddress(safe?.safe?.user)}</Link>
          </Stack>
        </Td>
        <Td>
          <Stack alignItems="center" justifyContent="center">
            <Stack alignItems="center" direction="row" fontSize="sm">
              <Text fontWeight="semibold">
                {formatNumber(
                  convertToEth(
                    convertToEthValueType.notReward,
                    safe?.safe?.amountCollateral
                  )
                )}
              </Text>
              <Text color={colorMode === "light" ? "gray.900" : "gray.400"}>
                {collateralTypeName}
              </Text>
            </Stack>
            <Text
              color={colorMode === "light" ? "gray.900" : "gray.400"}
              fontSize="xs"
            >
              ${" "}
              {formatNumber(
                getUsdAssetPrice(
                  ethPrice,
                  Number(collateralPrices[safe?.safe?.assetClass?.collateral])
                )?.toFixed("2") *
                  convertToEth(
                    convertToEthValueType.notReward,
                    safe?.safe?.amountCollateral
                  )
              )}
            </Text>
          </Stack>
        </Td>
        <Td>
          <Stack alignItems="center" justifyContent="center">
            <Stack direction="row" alignItems="center" fontSize="sm">
              <Text fontWeight="semibold">
                {formatNumber(
                  convertToEth(
                    convertToEthValueType.notReward,
                    safe?.safe?.amountCoin
                  )
                )}
              </Text>
              <Text color={colorMode === "light" ? "gray.900" : "gray.400"}>
                {tokenNames.zai}
              </Text>
            </Stack>
            <Text
              color={colorMode === "light" ? "gray.900" : "gray.400"}
              fontSize="xs"
            >
              ${" "}
              {formatNumber(
                zaiPrice *
                  Number(
                    convertToEth(
                      convertToEthValueType.notReward,
                      safe?.safe?.amountCoin
                    )
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
