import { Box } from "@chakra-ui/layout";
import React, { useEffect } from "react";

export type LoginFormProps = {
  login: string;
  password: string;
};
const Login: React.FC = () => {
  return <Box w="100vw" h="100vh" background="backgroundBody"></Box>;
};

export default Login;
