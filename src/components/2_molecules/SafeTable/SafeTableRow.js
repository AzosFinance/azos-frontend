import { convertToEthValueType } from "@/utils/consts";
import { convertToEth, formatNumber, formatWalletAddress } from "@/utils/funcs";
import { Tr, Td, Link, Text, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";

const SafeTableRow = ({ safe, collateralTypeName }) => {
  const router = useRouter();
  console.log(collateralTypeName, "collateralTypeName");
  return (
    <>
      <Tr>
        <Td>
          <Text fontSize="sm" color="gray.500">
            #{safe?.safe?.safeId}
          </Text>
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
        </Td>
        <Td>
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
        </Td>
      </Tr>
    </>
  );
};

export default SafeTableRow;
