import {
  Box,
  Button,
  Stack,
  VStack,
  FormControl,
  FormLabel,
  useColorModeValue,
  Input,
  Checkbox,
  Link,
  Center,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

export type LoginFormProps = {
  login: string;
  password: string;
};
const Login: React.FC = () => {
  return (
    <Box w="100vw" h="100vh" background="backgroundBody">
      <Center w="100vw" h="100vh">
        <Stack
          direction={["column", "column", "row", "row", "row"]}
          spacing={0}
        >
          <Box
            borderRadius={[
              "5px 5px 0 0",
              "5px 5px 0 0",
              "5px 0 0 5px",
              "5px 0 0 5px",
              "5px 0 0 5px",
            ]}
            background="backgroundActiveCardsFaceAttributes"
            boxShadow={"lg"}
            p={4}
            boxSize="350px"
          ></Box>
          <Box
            borderRadius={[
              "0 0 5px 5px",
              "0 0 5px 5px",
              "0 5px 5px 0",
              "0 5px 5px 0",
              "0 5px 5px 0",
            ]}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"lg"}
            p={4}
            boxSize="350px"
          >
            <Center w="100%" height="100%" padding={10}>
              <VStack w="100%" height="100%">
                <FormControl id="login">
                  <FormLabel mb={0}>Login</FormLabel>
                  <Input type="text" />
                </FormControl>
                <FormControl id="password">
                  <FormLabel mb={0}>Senha</FormLabel>
                  <Input type="password" />
                </FormControl>

                <Box w="100%" height="100%">
                  <Button
                    mt={5}
                    w="100%"
                    bg={"backgroundActiveCardsFaceAttributes"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    ENTRAR
                  </Button>
                </Box>
              </VStack>
            </Center>
          </Box>
        </Stack>
      </Center>
    </Box>
  );
};

export default Login;
