import { Box, Text } from "@chakra-ui/layout";
import { Heading, Flex, Link, Button, Spacer, Slide } from "@chakra-ui/react";
import React from "react";
import { useMeQuery } from "../generated/graphql";
import NextLink from "next/link";
import { LogOutAlert } from "./LogOutAlert";

interface WelcomeWrapperProps {}

export const WelcomeWrapper: React.FC<WelcomeWrapperProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery();
  let body = null;

  if (fetching) {
  } else if (!data.me) {
    body = (
      <>
        <Box textAlign="center">
          <Heading fontSize="48px">Sign up as a</Heading>
        </Box>
        <Box w={560} mt={65}>
          <Flex>
            <NextLink href="/trainerSignUp">
              <Link>
                <Button w={236} h={62} bg="#247bed" _hover={{ bg: "#004fb8" }}>
                  Trainer
                </Button>
              </Link>
            </NextLink>
            <Spacer />
            <NextLink href="/clientSignUp">
              <Link>
                <Button w={236} h={62} bg="#247bed" _hover={{ bg: "#004fb8" }}>
                  Client
                </Button>
              </Link>
            </NextLink>
          </Flex>
        </Box>
        <Text mt={50}>
          Already have an account?{" "}
          <NextLink href="./login">
            <Link fontWeight="bold">Log In</Link>
          </NextLink>
        </Text>
      </>
    );
  } else {
    body = (
      <>
        <Box textAlign="center">
          <Heading fontSize="48px">Welcome {data.me.first_name}</Heading>
        </Box>
        <Box w={560} mt={65}>
          <NextLink href="/dashboard">
            <Link>
              <Button
                mx="auto"
                w="100%"
                h={62}
                bg="#247bed"
                _hover={{ bg: "#004fb8" }}
              >
                Continue to Dashboard
              </Button>
            </Link>
          </NextLink>
        </Box>
        <Text mt={50}>
          Switch User? <LogOutAlert />
        </Text>
      </>
    );
  }

  return <>{body}</>;
};
