import { Stack } from "@chakra-ui/react";

const EcosystemInfoCard = ({ children }) => {
  return (
    <Stack p="2rem" rounded="md" border="1px" spacing="1rem" shadow="lg">
      {children}
    </Stack>
  );
};

export default EcosystemInfoCard;
