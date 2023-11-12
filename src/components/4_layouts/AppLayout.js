import {Flex, useColorMode} from "@chakra-ui/react";
import Navbar from "../3_organisms/Navbar/Navbar";
import Head from "next/head";
import Footer from "../1_atoms/Footer/Footer";

const AppLayout = ({ children }) => {
    const { colorMode } = useColorMode();

    return (
    <>
      <Head>
        <title>Azos</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Flex
        flexDirection="column"
        alignItems="center"
        mx={["1rem", "2rem", "4rem", "15rem"]}
        position="relative"
        h="100vh"
        justifyContent="space-between"
      >
        <Navbar />
        <Flex pb="1rem" w="100%" mt="1rem"
              bgGradient={colorMode === "light" ? [
                  'linear(to-tr, gray.50, gray.100)',
                  'linear(to-tl, gray.200, gray.500)',
                  'linear(to-tl, gray.200, gray.100)',
              ]: [
                  'linear(to-tr, gray.300, gray.400)',
                  'linear(to-t, gray.500, gray.600)',
                  'linear(to-b, gray.700, gray.800)',
              ]}>
          {children}
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};

export default AppLayout;
