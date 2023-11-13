import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";

const Home = () => {
  const { colorMode } = useColorMode();
  return (
    <Stack
      w="100%"
      // position="relative"
      mt="1rem"
      spacing="2rem"
      alignItems="center"
    >
      <Stack
        direction={["column", "column", "row"]}
        spacing="4rem"
        justifyContent="center"
        h={["100%", "100%", "87vh"]}
        alignItems="center"
        bgGradient={
          colorMode === "light"
            ? "linear(to-r, white, orange.100)"
            : "linear(to-r, gray.900, blue.800)"
        }
        borderColor={colorMode === "light" ? "orange.200" : "gray.500"}
        rounded="md"
        border="1px"
        w="100%"
        shadow="lg"
        p="1rem"
      >
        <Stack>
          <Stack direction="row" spacing="1rem" size="2xl">
            <Heading color="orange.200">Azos</Heading>
            <Heading>Brings Growth</Heading>
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
          {/* <Flex
            display={["none", "none", "flex"]}
            position="absolute"
            right="-16"
            top="-30"
          >
            <Image h="30rem" src="/pictures/plant_1.png" alt="plant-1" />
          </Flex> */}
        </Stack>
        <Flex w={["20rem", "30rem", "30rem"]}>
          <Image
            objectFit="cover"
            alt="azos-land"
            src="/pictures/azos-land.png"
          />
        </Flex>
      </Stack>
      <Stack w="100%" h={["100%", "100%", "87vh"]} mt="2rem" spacing="2rem">
        <Stack
          direction={["column", "column", "row"]}
          justifyContent="space-between"
          alignItems="center"
          spacing="2rem"
          bgGradient={
            colorMode === "light"
              ? "linear(to-r, white, orange.100)"
              : "linear(to-r, gray.900, blue.800)"
          }
          borderColor={colorMode === "light" ? "orange.200" : "gray.500"}
          rounded="md"
          border="1px"
          py="2rem"
          px={["1rem", "1rem", "4rem"]}
          h="100%"
        >
          <Stack spacing="3rem" w={[null, null, "25%"]}>
            <Stack>
              <Text fontSize="3xl" color="orange.200">
                Azos Module
              </Text>
              <Text fontSize="sm" letterSpacing="wide">
                The Azos module is an internal rule-based contract that allows
                decentralized Keepers to maintain the protocol’s health
                autonomously.
              </Text>
            </Stack>
            <Stack>
              <Text fontSize="3xl" color="orange.200">
                Stabilization
              </Text>
              <Text fontSize="sm" letterSpacing="wide">
                The Azos module expands and contracts the token supply to
                maintain constant equilibrium. This allows Azos to remain stable
                even during extreme demand fluctuations or supply shocks.
              </Text>
            </Stack>
            <Stack>
              <Text fontSize="3xl" color="orange.200">
                Value Accrual
              </Text>
              <Text fontSize="sm" letterSpacing="wide">
                Stablecoin platforms and users actually pay enormous amounts of
                money to market makers in order to remain price stable. First
                and second-generation platforms leak enormous value to these
                unaligned market participants. The Azos stability module
                captures that previously lost value.
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
          <Stack spacing="3rem" w={[null, null, "25%"]}>
            <Stack>
              <Text fontSize="3xl" color="orange.200">
                Long Tail Emissions
              </Text>
              <Text fontSize="sm" letterSpacing="wide">
                Azos will distribute protocol ownership to a large number of
                participants over a long period of time. These long-tail
                emissions will ensure yield-aggregation strategies continue to
                outperform our competitors for years.
              </Text>
            </Stack>
            <Stack>
              <Text fontSize="3xl" color="orange.200">
                Automated Liquidity
              </Text>
              <Text fontSize="sm" letterSpacing="wide">
                The Azos module enables powerful automated protocol owned
                liquidity. It&apos;s more capital efficient and safe always
                maintaining at least one-to-one backing of stable collateral.
                This allows Azos to scale better than any other collateralied
                debt position platform.
              </Text>
            </Stack>
          </Stack>
        </Stack>
        {/* <Flex
          display={["none", "none", "flex"]}
          position="absolute"
          left="-16"
          bottom="230"
        >
          <Image h="40rem" src="/pictures/plant_2.png" alt="plant-1" />
        </Flex> */}
      </Stack>
    </Stack>
  );
};

export default Home;
