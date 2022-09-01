import { ColorModeScript, extendTheme } from "@chakra-ui/react";
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { parseCookies } from "nookies";
import React from "react";
import { ServerStyleSheet } from "styled-components";
import { breakpoints } from "../styles/breakpoints";
import { colors } from "../styles/colors";
import { components } from "../styles/components";
import { semanticTokens } from "../styles/semanticTokens";
import { shadows } from "../styles/shadows";

const { "nextauth.themeChakra": themeChakra } = parseCookies() as {
  "nextauth.themeChakra": "light" | "dark";
};

const config = {
  useSystemColorMode: false,
  initialColorMode: themeChakra || "light",
};

export const customTheme = extendTheme({
  config,
  colors,
  components,
  semanticTokens,
  breakpoints,
  shadows,
});

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />

          <link rel="icon" href="/images/allthenticIcon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <ColorModeScript
            initialColorMode={customTheme.config.initialColorMode}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
