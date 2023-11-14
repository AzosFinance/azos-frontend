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
  Heading,
  useColorMode,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useAccount } from "wagmi";
import { useAccountModal } from "@rainbow-me/rainbowkit";
import { ConnectWallet } from "@/components/2_molecules/ConnectWallet/ConnectWallet";
import SwitchColorMode from "@/components/1_atoms/SwitchColorMode/SwitchColorMode";
import { footerLinks } from "@/utils/consts";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";

const MenuMobileDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const router = useRouter();
  const { isConnected, address } = useAccount();
  const { openAccountModal } = useAccountModal();
  const { colorMode } = useColorMode();

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

              <Stack
                alignItems="flex-end"
                spacing="2rem"
                fontWeight="semibold"
                fontSize="sm"
              >
                <Divider />
                <Stack spacing="2rem" textAlign="right">
                  {isConnected && (
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
                  )}

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
                      router.push("/user/create-safe/" + address.toLowerCase());
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
                      router.push("/analytics");
                      onClose();
                    }}
                  >
                    <Link pt="0.4rem" fontSize="xl">
                      Analytics
                    </Link>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <Stack spacing="2rem">
              <Stack direction="row" alignItems="center">
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
                      <Link
                        ml="2rem"
                        textAlign="right"
                        onClick={openAccountModal}
                        color={
                          colorMode === "light" ? "orange.200" : "blue.200"
                        }
                      >
                        Disconnect Wallet
                      </Link>
                    </Stack>
                  </Stack>
                )}
              </Stack>
              <Stack direction="row" alignItems="center" spacing="2rem">
                <SwitchColorMode />
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  w="100%"
                  color={colorMode === "light" ? "gray.700" : "gray.400"}
                  spacing="1rem"
                >
                  <Link
                    isExternal
                    href={footerLinks.silverDoor}
                    fontSize="sm"
                    _hover={{ color: "blue.100" }}
                  >
                    SilverDoor LCA 2023©
                  </Link>
                  <Stack direction="row" alignItems="center" spacing="1rem">
                    <Link isExternal href={footerLinks.github}>
                      <Icon
                        fontSize="xl"
                        as={AiFillGithub}
                        _hover={{ color: "blue.100" }}
                      />
                    </Link>
                    <Link isExternal href={footerLinks.telegram} fontSize="sm">
                      <Icon
                        fontSize="xl"
                        as={BiLogoTelegram}
                        _hover={{ color: "blue.100" }}
                      />
                    </Link>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuMobileDrawer;
