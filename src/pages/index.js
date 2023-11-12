import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Stack
      w="100%"
      position="relative"
      mt="2rem"
      spacing="4rem"
      alignItems="center"
    >
      <Stack
        direction={["column", "column", "row"]}
        spacing="4rem"
        justifyContent="center"
        h={["100%", "100%", "80vh"]}
        alignItems="center"
      >
        <Stack>
          <Stack direction={["column", "column", "row"]} spacing="1rem">
            <Heading color="orange.200" size="2xl">
              Azos
            </Heading>
            <Heading size="2xl">Brings Growth</Heading>
          </Stack>
          <Stack
            w={[null, null, "20rem"]}
            ml={["0", "0", "3rem"]}
            mt="1rem"
            spacing="2rem"
          >
            <Text fontSize="xl" fontWeight="semibold">
              A real world, green-asset backed token focused on stability and
              sustainability is the foundation of a resilient ecosystem. Impact
              starts with Azos.
            </Text>
          </Stack>
          <Flex
            display={["none", "none", "flex"]}
            position="absolute"
            right="-16"
            top="-30"
          >
            <Image h="30rem" src="/pictures/plant_1.png" alt="plant-1" />
          </Flex>
        </Stack>
        <Flex w={["20rem", "30rem", "30rem"]}>
          <Image
            objectFit="cover"
            alt="azos-land"
            src="/pictures/azos-land.png"
          />
        </Flex>
      </Stack>
      <Stack w="100%" spacing="4rem" h={["100%", "100%", "80vh"]} mb="2rem">
        <Text fontSize="3xl" alignItems="bold" textAlign="center">
          About
        </Text>
        <Stack
          direction={["column", "column", "row"]}
          justifyContent="space-between"
          alignItems="center"
          spacing="2rem"
        >
          <Stack spacing="4rem" w={[null, null, "25%"]}>
            <Stack>
              <Text fontSize="4xl" color="orange.200">
                Azos Module
              </Text>
              <Text fontSize="sm" letterSpacing="wide">
                The Azos module is an internal rule-based contract that allows
                decentralized Keepers to maintain the protocol’s health
                autonomously.
              </Text>
            </Stack>
            <Stack>
              <Text fontSize="4xl" color="orange.200">
                Stabilization
              </Text>
              <Text fontSize="sm" letterSpacing="wide">
                The Azos module generates and repays debt to maintain constant
                equilibrium.
              </Text>
            </Stack>
            <Stack>
              <Text fontSize="4xl" color="orange.200">
                Value Accrual
              </Text>
              <Text fontSize="sm" letterSpacing="wide">
                First and second-generation CDP platforms leak enormous value to
                unaligned participants. Azos retains that lost value while
                stabilizing itself.
              </Text>
            </Stack>
          </Stack>
          <Flex w={[null, null, "50%"]} justifyContent="center">
            <Flex w={["20rem", "30rem", "30rem"]}>
              <Image
                objectFit="cover"
                src="/pictures/azos-illustration.png"
                alt="azos-illustration"
              />
            </Flex>
          </Flex>
          <Stack spacing="4rem" w={[null, null, "25%"]}>
            <Stack>
              <Text fontSize="4xl" color="orange.200">
                Long Tail Emissions
              </Text>
              <Text fontSize="sm" letterSpacing="wide">
                Long Tail-EmissionsAzos will distribute protocol ownershipto a
                large number of participants over along periods of time by
                subsidizing feeswith token emissions. These long-tailemissions
                will ensure yield-aggregationstrategies continue to
                outperformcompetitors for years.
              </Text>
            </Stack>
            <Stack>
              <Text fontSize="4xl" color="orange.200">
                Virtual Debt
              </Text>
              <Text fontSize="sm" letterSpacing="wide">
                The Azos module can generate virtualdebt, provided that it
                always has a one-to-one backing of stable collateral. Thisallows
                better scalability than any otherCDP.
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Flex
          display={["none", "none", "flex"]}
          position="absolute"
          left="-16"
          bottom="230"
        >
          <Image h="40rem" src="/pictures/plant_2.png" alt="plant-1" />
        </Flex>
      </Stack>
    </Stack>
  );
};

export default Home;
