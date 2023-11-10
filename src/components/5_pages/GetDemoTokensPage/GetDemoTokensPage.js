import { Heading, Stack } from "@chakra-ui/react";
import MintDemoTokenCard from "./components/MintDemoTokenCard";
import { BCT_ADDRESS, FGB_ADDRESS, REI_ADDRESS } from "@/web3/addresses";

const GetDemoTokensPage = () => {
  return (
    <Stack w="100%" spacing="3rem" mt="2rem">
      <Heading textAlign="center">Get Demo Tokens</Heading>
      <Stack direction="row" spacing="2rem" justifyContent="center">
        <MintDemoTokenCard tokenSymbol="BCT" tokenAddress={BCT_ADDRESS} />
        <MintDemoTokenCard tokenSymbol="FGB" tokenAddress={FGB_ADDRESS} />
        <MintDemoTokenCard tokenSymbol="REI" tokenAddress={REI_ADDRESS} />
      </Stack>
    </Stack>
  );
};

export default GetDemoTokensPage;
