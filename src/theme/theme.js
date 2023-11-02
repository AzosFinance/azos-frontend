import { extendTheme } from "@chakra-ui/react";

const breakpoints = ["375px", "768px", "1024px", "1700px"];

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.md = breakpoints[3];

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
  },
  breakpoints,
  colors: {
    gray: {
      50: "#f7fafc",
      300: "#DFDFDF",
      // ...
      600: "#383b3f",
      700: "#242629",
      800: "#0b1111",
      900: "#0b0c0c",
    },
    pink: {
      200: "#ff16ef",
    },
    teal: {
      200: "#03ffe0",
      800: "#0c3335",
    },
  },
});
