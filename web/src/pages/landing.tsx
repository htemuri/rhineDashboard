import { Box, Button, Container, Grid, Heading, Link, Text} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import { InputField } from "../components/InputField";
import { Logo } from "../media/Logo";

interface landingProps {}

export const Landing: React.FC<landingProps> = ({}) => {
  return (
    <Grid>
      <Container mt={70} centerContent={true}>
        <Logo width="180px" height="{auto}" fill="black" />
      </Container>

      <Box
        mt={230}
        bg="#070707"
        pt="65px"
        pb="65px"
        pl="75px"
        pr="75px"
        maxW="fit-content"
        mx="auto"
        rounded={50}
      >
        <Box textAlign="center">
          <Heading fontSize="48px">Sign up as a</Heading>
        </Box>

        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField
                name="username"
                label="username"
                placeholder="Username"
              />
              <InputField name="email" placeholder="email" label="sd"/>
              <Box mt={8}>
                <InputField
                  name="password"
                  label="password"
                  placeholder="Password"
                  type="password"
                />
              </Box>
              <Button
                mt={8}
                type="submit"
                isLoading={isSubmitting}
                colorScheme="teal"
              >
                register
              </Button>
            </Form>
          )}
        </Formik>

        <Text mt={70}>
          Already have an account?{" "}
          <Link href="./landing" fontWeight="bold">
            Log In
          </Link>
        </Text>
      </Box>
    </Grid>
  );
};

export default Landing;
