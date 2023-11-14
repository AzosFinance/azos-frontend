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
        <Td w="10%">
          <Flex justifyContent="center" w="100%">
            <Button
              w="5rem"
              colorScheme={colorMode === "light" ? "orange" : "blue"}
              variant="outline"
              size="xs"
              onClick={() => router.push("/safe/" + safe?.safe?.id)}
            >
              #{safe?.safe?.safeId}
            </Button>
          </Flex>
        </Td>
        <Td w="25%">
          <Stack
            w="100%"
            direction="row"
            alignItems="center"
            spacing="0.5rem"
            cursor="pointer"
            fontWeight="semibold"
            onClick={() => router.push("/user/" + safe?.safe?.user)}
            justifyContent="center"
          >
            <Icon color="gray.500" fontSize="xs" as={FaUser} />
            <Link fontSize="sm" textAlign="center">
              {formatWalletAddress(safe?.safe?.user)}
            </Link>
          </Stack>
        </Td>
        <Td w="25%">
          <Stack alignItems="center" justifyContent="center" w="100%">
            <Stack
              alignItems="center"
              direction="row"
              fontSize="sm"
              textAlign="center"
            >
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
              textAlign="center"
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
        <Td w="25%">
          <Stack alignItems="center" justifyContent="center" w="100%">
            <Stack
              direction="row"
              alignItems="center"
              fontSize="sm"
              textAlign="center"
            >
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
              textAlign="center"
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
