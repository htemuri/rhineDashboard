import { Box, Button, Heading, Link, Text } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import { useRegisterClientMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { CenterBoxLogo } from "../components/CenterBoxLogo";

interface clientSignUpProps {}

export const ClientSignUp: React.FC<clientSignUpProps> = ({}) => {
  const router = useRouter();
  const [, register] = useRegisterClientMutation();

  return (
    <CenterBoxLogo>
      <Box textAlign="center">
        <Text style={{ textTransform: "uppercase" }} color="gray">
          Thanks for testing rhine
        </Text>
        <Heading fontSize="25px">Create a Client Account</Heading>
      </Box>
      <Wrapper>
        <Text mt={8}>E-mail</Text>
        <Formik
          initialValues={{
            email: "",
            first_name: "",
            last_name: "",
            password: "",
          }}
          onSubmit={async (values, { setErrors }) => {
            const response = await register(values);
            if (response.data?.registerClient.errors) {
              setErrors(toErrorMap(response.data.registerClient.errors));
            } else if (response.data?.registerClient.user) {
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
              <InputField
                name="first_name"
                label="first_name"
                placeholder="First Name"
              />
              <InputField
                name="last_name"
                label="last_name"
                placeholder="Last Name"
              />
              <Text mt={"15px"}>Password</Text>
              <InputField
                name="password"
                label="password"
                placeholder="Password"
                type="password"
              />
              <InputField
                name="confirm_password"
                label="confirm_password"
                placeholder="Confirm Password"
                type="password"
              />

              <Button
                mt={8}
                w="450px"
                type="submit"
                isLoading={isSubmitting}
                bg="#247bed"
              >
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>

        <Text mt={8}>
          Already have an account?{" "}
          <Link href="./login" fontWeight="bold">
            Log In
          </Link>
        </Text>
      </Wrapper>
    </CenterBoxLogo>
  );
};

export default ClientSignUp;
