import { Box, Button, Heading, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { CenterBoxLogo } from "../components/CenterBoxLogo";
import { useMeQuery } from "../generated/graphql";
import NextLink from "next/link";

interface dashboardProps {}

export const dashboard: React.FC<dashboardProps> = ({}) => {
  const router = useRouter();
  const [{ data, fetching }] = useMeQuery();

  let body = null;

  if (fetching) {
  } else if (!data.me) {
    body = (
      <CenterBoxLogo>
        <Box textAlign="center">
          <Heading fontSize="48px">You are not Logged In</Heading>
        </Box>
        <Box w={560} mt={65}>
          <NextLink href="/">
            <Link>
              <Button
                mx="auto"
                w="100%"
                h={62}
                bg="#247bed"
                _hover={{ bg: "#004fb8" }}
              >
                Return Home
              </Button>
            </Link>
          </NextLink>
        </Box>
      </CenterBoxLogo>
    );
  } else {
    body = (
      <Box>
        <Text>Welcome to the Dashboard, {data.me.first_name}</Text>
      </Box>
    );
  }
  return <>{body}</>;
};

export default dashboard;
