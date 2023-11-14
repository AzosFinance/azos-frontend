import FromInputNumeric from "@/components/2_molecules/FromInputNumeric/FromInputNumeric";
import useContractInteraction from "@/hooks/web3Hooks/useContractInteraction";
import { convertToWei } from "@/utils/funcs";
import { handleMintCollateralToken } from "@/web3/contractInteractions/collateralTokenContract";
import { Button, Divider, Stack, Text, useColorMode } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useAccount } from "wagmi";

const MintDemoTokenCard = ({ tokenSymbol, tokenAddress, description }) => {
  const { watch, control, setValue } = useForm();
  const { colorMode } = useColorMode();
  const { address } = useAccount();

  const { onContractCall, isSubmitting, isConnected, isRightNetwork } =
    useContractInteraction(
      handleMintCollateralToken(tokenAddress),
      "Mint Completed",
      [address, convertToWei(watch(tokenSymbol?.toLowerCase())?.toString())]
    );

  return (
    <Stack
      p="2rem"
      rounded="md"
      border="1px"
      spacing="2rem"
      borderColor={colorMode === "light" ? "orange.200" : "gray.500"}
      shadow="lg"
    >
      <Stack>
        <Text fontSize="lg" fontWeight="semibold">
          Get {tokenSymbol}
        </Text>
        <Text fontSize="sm">{description}</Text>
        <Divider />
      </Stack>
      <FromInputNumeric
        name={tokenSymbol?.toLowerCase()}
        label="Amount"
        size="sm"
        onValueChange={(target) => {
          setValue(tokenSymbol?.toLowerCase(), target.floatValue);
        }}
        control={control}
        placeholder=""
      />
      <Button
        size="sm"
        colorScheme="blue"
        variant="outline"
        isLoading={isSubmitting}
        isDisabled={
          !isConnected || !isRightNetwork || !watch(tokenSymbol?.toLowerCase())
        }
        onClick={onContractCall}
      >
        Mint {tokenSymbol}
      </Button>
    </Stack>
  );
};

export default MintDemoTokenCard;
