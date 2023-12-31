import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";

const SwitchColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return colorMode === "light" ? (
    <MoonIcon onClick={toggleColorMode} cursor="pointer" />
  ) : (
    <SunIcon onClick={toggleColorMode} cursor="pointer" />
  );
};

export default SwitchColorMode;
