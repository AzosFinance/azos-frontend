import { Flex } from "@chakra-ui/react";
import Navbar from "../3_organisms/Navbar/Navbar";
import Head from "next/head";

const AppLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Azos</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Flex
        flexDirection="column"
        alignItems="center"
        mx={["1rem", "2rem", "4rem", "15rem"]}
        position="relative"
        h="100vh"
      >
        <Navbar />
        <Flex pb="4rem" w="100%" mt="1rem">
          {children}
        </Flex>
      </Flex>
    </>
  );
};

export default AppLayout;
