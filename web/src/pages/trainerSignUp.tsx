import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import { Logo } from "../media/Logo";

interface trainerSignUpProps {}

export const TrainerSignUp: React.FC<trainerSignUpProps> = ({}) => {
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
            Thanks for testing rhine
          </Text>
          <Heading fontSize="25px">Create a Trainer Account</Heading>
        </Box>
        <Wrapper>
          <Text mt={8}>E-mail</Text>
          <Formik
            initialValues={{ username: "", password: "" }}
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
                  name="nasm_id"
                  label="nasm_id"
                  placeholder="Certificate ID"
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
      </Box>
    </Grid>
  );
};

export default TrainerSignUp;
