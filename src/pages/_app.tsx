import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Head from "next/head";

import { useProgressStore } from "../store";
import { Progress } from "../components/ProgressPage/Progress";
import { theme } from "../styles/theme";
import { AuthProvider } from "../context/AuthContect";

const MyApp: React.FC<any> = ({ Component, pageProps }) => {
  const setIsAnimating = useProgressStore((state) => state.setIsAnimating);
  const isAnimating = useProgressStore((state) => state.isAnimating);
  const { events } = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true);
    };
    const handleStop = () => {
      setIsAnimating(false);
    };

    events.on("routeChangeStart", handleStart);
    events.on("routeChangeComplete", handleStop);
    events.on("routeChangeError", handleStop);
    return () => {
      events.on("routeChangeStart", handleStart);
      events.on("routeChangeComplete", handleStop);
      events.on("routeChangeError", handleStop);
    };
  }, [events, setIsAnimating]);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>Ofertas Sesé</title>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="Supermercado Sesé" />
        <meta name="description" content="Supermercado Sesé" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,
      user-scalable=0"
        />
      </Head>

      <AuthProvider>
        <Progress isAnimating={isAnimating} />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
};

export default MyApp;
