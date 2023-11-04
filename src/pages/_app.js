import AppLayout from "@/components/4_layouts/AppLayout";
import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import "@rainbow-me/rainbowkit/styles.css";
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { theme } from "@/theme/theme";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphQL/apolloClient";
import { useEffect, useState } from "react";
const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID;

const { chains, publicClient } = configureChains([sepolia], [publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: "Azos",
  projectId,
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function App({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider
          chains={chains}
          theme={darkTheme({
            accentColor: "#03ffe0",
            accentColorForeground: "black",
          })}
        >
          <ApolloProvider client={client}>
            <ChakraProvider theme={theme}>
              <AppLayout>
                <Component {...pageProps} />
              </AppLayout>
            </ChakraProvider>
          </ApolloProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    );
  }
}
