import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import { Logo } from "../media/Logo";

interface loginProps {}

export const Login: React.FC<loginProps> = ({}) => {
  return (
    <Grid>
      <Container mt={70} centerContent={true}>
        <Link href="/">
          <Logo id="logo" width="180px" height="{auto}" fill="black" />
        </Link>{" "}
      </Container>

      <Box
        mt={100}
        bg="#070707"
        pt="40px"
        pb="65px"
        pl="75px"
        pr="75px"
        maxW="fit-content"
        mx="auto"
        rounded={50}
      >
        <Box textAlign="center">
          <Text style={{ textTransform: "uppercase" }} color="gray">
            Welcome Back
          </Text>
          <Heading fontSize="25px">Login to your Account</Heading>
        </Box>
        <Wrapper>
          <Text mt={8}>E-mail</Text>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <InputField
                  name="email"
                  placeholder="Enter your e-mail address"
                  label="sd"
                  type="email"
                />
                <Flex>
                  <Text mt={8}>Password</Text>
                  <Spacer />
                  <Link>
                    <Text mt={8} textColor="gray">Forgot Password</Text>
                  </Link>
                </Flex>
                <InputField
                  name="password"
                  label="password"
                  placeholder="Password"
                  type="password"
                />
                <Button
                  mt={8}
                  w="450px"
                  type="submit"
                  isLoading={isSubmitting}
                  bg="#247bed"
                >
                  Login
                </Button>
              </Form>
            )}
          </Formik>

          <Text mt={8}>
            Not registered yet?{" "}
            <Link href="./" fontWeight="bold">
              Register
            </Link>
          </Text>
        </Wrapper>
      </Box>
    </Grid>
  );
};

export default Login;
