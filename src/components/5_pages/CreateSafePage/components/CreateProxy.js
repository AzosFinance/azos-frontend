import useContractInteraction from "@/hooks/web3Hooks/useContractInteraction";
import { handleCreateUserProxy } from "@/web3/contractInteractions/haiProxyFactoryContract";
import { Button, Flex, Stack, Text } from "@chakra-ui/react";

const CreateProxy = ({ onRefecth }) => {
  const {
    onContractCall: onContractCallCreateProxy,
    isConnected,
    isRightNetwork,
    isSubmitting: isSubmittingCreateProxy,
  } = useContractInteraction(handleCreateUserProxy(), "User Proxy Created");
  return (
    <Stack mt="1rem">
      <Text textAlign="center">
        You need to create a user proxy before creating a safe
      </Text>
      <Flex justifyContent="center">
        <Button
          colorScheme="teal"
          variant="outline"
          isDisabled={!isConnected || !isRightNetwork}
          isLoading={isSubmittingCreateProxy}
          onClick={async () => {
            const res = await onContractCallCreateProxy();
            if (res) {
              onRefecth();
            }
          }}
        >
          Create User Proxy
        </Button>
      </Flex>
    </Stack>
  );
};

export default CreateProxy;
