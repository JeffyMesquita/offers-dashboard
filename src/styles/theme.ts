import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { parseCookies } from "nookies";
import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { components } from "./components";
import { semanticTokens } from "./semanticTokens";
import { shadows } from "./shadows";

const { 'nextauth.themeChakra': themeChakra } = parseCookies() as {
  'nextauth.themeChakra': 'light' | 'dark';
};

const config: ThemeConfig = {
  initialColorMode: themeChakra || 'light',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  colors,
  components,
  semanticTokens,
  breakpoints,
  shadows,
});

export { theme };
