import { Heading, Stack } from "@chakra-ui/react";
import MintDemoTokenCard from "./components/MintDemoTokenCard";
import { BCT_ADDRESS, FGB_ADDRESS, REI_ADDRESS } from "@/web3/addresses";
import { tokenNames } from "@/utils/consts";

const GetDemoTokensPage = () => {
  return (
    <Stack w="100%" spacing="3rem" mt="2rem">
      <Heading textAlign="center">Get Demo Tokens</Heading>
      <Stack
        direction={["column", "column", "row"]}
        spacing="2rem"
        justifyContent="center"
      >
        <MintDemoTokenCard
          tokenSymbol={tokenNames.bct}
          tokenAddress={BCT_ADDRESS}
          description="Base Carbon Tonne"
        />
        <MintDemoTokenCard
          tokenSymbol={tokenNames.fgb}
          tokenAddress={FGB_ADDRESS}
          description="Fungible Green Bond"
        />
        <MintDemoTokenCard
          tokenSymbol={tokenNames.rei}
          tokenAddress={REI_ADDRESS}
          description="Renewable Energy Index"
        />
      </Stack>
    </Stack>
  );
};

export default GetDemoTokensPage;
