import { Center, Heading, Image, Stack } from "@chakra-ui/react";

const Home = () => {
  return (
    <Center h="79vh" w="100%">
      <Stack spacing="1rem">
        <Image
          h="20rem"
          objectFit="cover"
          alt="azos-illustration"
          src="/pictures/azos-illustration.png"
        />
        <Heading size="2xl" textAlign="center">
          Azos Finance
        </Heading>
      </Stack>
    </Center>
  );
};

export default Home;
