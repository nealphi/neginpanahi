import { extendTheme } from "@chakra-ui/react";
import '@fontsource/zen-kurenaido';
const config = {
  
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    Title: "Zen Kurenaido",
  },
  colors: {
    lightBlue: "rgb(107, 157, 172)",
    gray: {
      50: "#f8f0f2",
      100: "#d9d9d9",
      200: "#bfbfbf",
      300: "#a6a6a6",
      400: "#8c8c8c",
      500: "#737373",
      600: "#595959",
      700: "#404040",
      800: "#262626",
      900: "#1a1a1a",
    },
  },
});

export default theme;
