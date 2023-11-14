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
    <Stack mb="1rem">
      <Text textAlign="center">
        You need to create a user profile before creating a safe
      </Text>
      <Flex justifyContent="center">
        <Button
          colorScheme="orange"
          variant="outline"
          isDisabled={!isConnected || !isRightNetwork}
          isLoading={isSubmittingCreateProxy}
          size="sm"
          onClick={async () => {
            const res = await onContractCallCreateProxy();
            if (res) {
              onRefecth();
            }
          }}
        >
          Create User Profile
        </Button>
      </Flex>
    </Stack>
  );
};

export default CreateProxy;
