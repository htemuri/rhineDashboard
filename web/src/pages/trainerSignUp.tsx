import { Box, Button, Heading, Link, Text } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import { useRegisterTrainerMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { useRouter } from "next/router";
import { CenterBoxLogo } from "../components/CenterBoxLogo";

interface trainerSignUpProps {}

export const TrainerSignUp: React.FC<trainerSignUpProps> = ({}) => {
  const router = useRouter();
  const [, register] = useRegisterTrainerMutation();
  return (
    <CenterBoxLogo>
      <Box textAlign="center">
        <Text style={{ textTransform: "uppercase" }} color="gray">
          Thanks for testing rhine
        </Text>
        <Heading fontSize="25px">Create a Trainer Account</Heading>
      </Box>
      <Wrapper>
        <Text mt={8}>E-mail</Text>
        <Formik
          initialValues={{
            email: "",
            first_name: "",
            last_name: "",
            password: "",
            cert_id: "",
          }}
          onSubmit={async (values, { setErrors }) => {
            const response = await register(values);
            if (response.data?.registerTrainer.errors)
              setErrors(toErrorMap(response.data.registerTrainer.errors));
            else if (response.data?.registerTrainer.user) {
              // worked
              {
                /* console.log(values); */
              }

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
              <Text mt={"15px"}>NASM Certificate ID</Text>
              <InputField
                name="cert_id"
                label="cert_id"
                placeholder="Certificate ID"
              />
              <Button
                mt={8}
                w="450px"
                type="submit"
                isLoading={isSubmitting}
                bg="#247bed"
                _hover={{ bg: "#004fb8" }}
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

export default TrainerSignUp;
