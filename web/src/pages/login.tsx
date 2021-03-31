import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { CenterBoxLogo } from "../components/CenterBoxLogo";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import { useLoginMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";

interface loginProps {}

export const Login: React.FC<loginProps> = ({}) => {
  const router = useRouter();
  const [, login] = useLoginMutation();
  return (
    <CenterBoxLogo>
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
          onSubmit={async (values, { setErrors }) => {
            const response = await login(values);
            if (response.data?.login.errors) {
              setErrors(toErrorMap(response.data.login.errors));
            } else if (response.data?.login.user) {
              // worked
              router.push("/");
            }
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
                  <Text mt={8} textColor="gray">
                    Forgot Password
                  </Text>
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
          <Link href="/" fontWeight="bold">
            Register
          </Link>
        </Text>
      </Wrapper>
    </CenterBoxLogo>
  );
};

export default Login;
