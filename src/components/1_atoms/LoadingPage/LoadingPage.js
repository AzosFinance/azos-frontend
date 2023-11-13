import { Spinner, Stack, Text } from "@chakra-ui/react";

const LoadingPage = () => {
  return (
    <Stack h="90vh" w="100%" justifyContent="center" alignItems="center">
      <Stack alignItems="center" spacing="1rem">
        <Spinner size="xl" />
        <Text>Loading...</Text>
      </Stack>
    </Stack>
  );
};

export default LoadingPage;
