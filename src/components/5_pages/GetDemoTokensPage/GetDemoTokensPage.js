import { Heading, Stack } from "@chakra-ui/react";
import MintDemoTokenCard from "./components/MintDemoTokenCard";
import { BCT_ADDRESS, FGB_ADDRESS, REI_ADDRESS } from "@/web3/addresses";

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
          tokenSymbol="BCT"
          tokenAddress={BCT_ADDRESS}
          description="Base Carbon Tonne"
        />
        <MintDemoTokenCard
          tokenSymbol="FGB"
          tokenAddress={FGB_ADDRESS}
          description="Fungible Green Bond"
        />
        <MintDemoTokenCard
          tokenSymbol="REI"
          tokenAddress={REI_ADDRESS}
          description="Renewable Energy Index"
        />
      </Stack>
    </Stack>
  );
};

export default GetDemoTokensPage;
