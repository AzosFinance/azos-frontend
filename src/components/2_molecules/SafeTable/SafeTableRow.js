import useUsdAssetPriceConverter from "@/hooks/utils/useUsdAssetPriceConverter";
import { convertToEthValueType } from "@/utils/consts";
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
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaUser } from "react-icons/fa";

const SafeTableRow = ({ safe, collateralTypeName, ethPrice }) => {
  const router = useRouter();

  const { getUsdAssetPrice } = useUsdAssetPriceConverter();

  return (
    <>
      <Tr>
        <Td w="1rem">
          <Flex justifyContent="center">
            <Button w="5rem" colorScheme="teal" variant="outline" size="xs">
              #{safe?.safe?.safeId}
            </Button>
          </Flex>
        </Td>
        <Td>
          <Stack
            direction="row"
            alignItems="center"
            spacing="1rem"
            cursor="pointer"
            _hover={{ color: "teal.100" }}
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
          <Stack alignItems="center" justifyContent="center">
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
