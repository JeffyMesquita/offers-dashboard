import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuthContext } from "../../context/AuthContect";

export type LoginFormProps = {
  login: string;
  password: string;
};
const Login: React.FC = () => {
  const { login } = useAuthContext();

  const loginSchema = yup.object().shape({
    login: yup
      .string()
      .required("Email é obrigatório")
      .matches(
        /^[A-Za-z0-9\wÀ-ú\u002d\u0026\s@.]+$/,
        "Símbolos não são permitidos"
      ),
    password: yup.string().required("Senha é obrigatório"),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormProps>({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = useCallback(async (data: LoginFormProps) => {
    console.log(data);
  }, []);

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
            w="350px"
            height={["250px", "300px", "350px", "350px", "350px"]}
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
            p={[0, 3, 4, 4, 4]}
            w="350px"
            height={["300px", "300px", "350px", "350px", "350px"]}
          >
            <Center w="100%" height="100%" padding={10}>
              <VStack w="100%" height="100%">
                <form onSubmit={handleSubmit(handleLogin)}>
                  <FormControl id="login">
                    <FormLabel mb={0}>Login</FormLabel>
                    <Input {...register("login")} type="text" />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel mb={0}>Senha</FormLabel>
                    <Input {...register("password")} type="password" />
                  </FormControl>
                  <Box w="100%" height="100%">
                    <Button
                      type="submit"
                      mt={5}
                      w="100%"
                      bg="backgroundActiveButton"
                      color={"white"}
                      _hover={{
                        bg: "backgroundHoverButton",
                      }}
                    >
                      ENTRAR
                    </Button>
                  </Box>
                </form>
              </VStack>
            </Center>
          </Box>
        </Stack>
      </Center>
    </Box>
  );
};

export default Login;
