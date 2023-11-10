import { ChevronRightIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Flex,
  Stack,
  Link,
  Divider,
  Icon,
  Avatar,
  Heading,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useAccount } from "wagmi";
import { useAccountModal } from "@rainbow-me/rainbowkit";
import { FaSignOutAlt } from "react-icons/fa";
import { ConnectWallet } from "@/components/2_molecules/ConnectWallet/ConnectWallet";
import SwitchColorMode from "@/components/1_atoms/SwitchColorMode/SwitchColorMode";

const MenuMobileDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const router = useRouter();
  const { isConnected, address } = useAccount();
  const { openAccountModal } = useAccountModal();

  useEffect(() => {
    if (!isConnected) {
      onClose();
    }
  }, [isConnected]);

  return (
    <>
      <Flex onClick={onOpen} ref={btnRef} cursor="pointer">
        <HamburgerIcon fontSize="3xl" />
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Stack
              direction="row"
              alignItems="center"
              onClick={() => {
                router.push("/");
                onClose();
              }}
              cursor="pointer"
            >
              <Heading>AZOS</Heading>
            </Stack>
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing="1rem" pt="1rem">
              <Stack
                spacing="2rem"
                direction="row"
                alignItems="center"
                justifyContent="flex-end"
              >
                <ConnectWallet />
              </Stack>
              {isConnected ? (
                <Stack
                  alignItems="flex-end"
                  spacing="2rem"
                  fontWeight="semibold"
                  fontSize="sm"
                >
                  <Divider />
                  <Stack spacing="2rem" textAlign="right">
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing="1rem"
                      justifyContent="flex-end"
                      onClick={() => {
                        router.push("/dashboard");
                        onClose();
                      }}
                    >
                      <Link pt="0.4rem" fontSize="xl">
                        Dashboard
                      </Link>
                    </Stack>
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing="1rem"
                      justifyContent="flex-end"
                      onClick={() => {
                        router.push(
                          "/user/create-safe/" + address.toLowerCase()
                        );
                        onClose();
                      }}
                    >
                      <Link pt="0.4rem" fontSize="xl">
                        Create Safe
                      </Link>
                    </Stack>
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing="1rem"
                      justifyContent="flex-end"
                      onClick={() => {
                        router.push("/demo-tokens");
                        onClose();
                      }}
                    >
                      <Link pt="0.4rem" fontSize="xl">
                        Demo Tokens
                      </Link>
                    </Stack>
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing="1rem"
                      justifyContent="flex-end"
                      onClick={() => {
                        router.push("/user/" + address.toLowerCase());
                        onClose();
                      }}
                    >
                      <Link pt="0.4rem" fontSize="xl">
                        Profile
                      </Link>
                    </Stack>
                  </Stack>
                </Stack>
              ) : (
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing="1rem"
                  justifyContent="flex-end"
                  onClick={() => {
                    router.push("/dashboard");
                    onClose();
                  }}
                >
                  <Link pt="0.4rem" fontSize="xl">
                    Dashboard
                  </Link>
                </Stack>
              )}
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            {isConnected && (
              <Stack
                justifyContent="flex-end"
                fontWeight="semibold"
                spacing="1.5rem"
                w="100%"
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="flex-end"
                  spacing="0.5rem"
                >
                  <SwitchColorMode />
                  <Link
                    ml="2rem"
                    textAlign="right"
                    onClick={openAccountModal}
                    color="blue.200"
                  >
                    Disconnect Wallet
                  </Link>
                </Stack>
              </Stack>
            )}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuMobileDrawer;
