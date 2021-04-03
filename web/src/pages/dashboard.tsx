import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { CenterBoxLogo } from "../components/CenterBoxLogo";
import { useMeQuery } from "../generated/graphql";
import NextLink from "next/link";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/sidebar/SideBar";
import { NameCell } from "../components/sidebar/NameCell";
import { TodayProgram } from "../components/sidebar/TodayProgram";
import { ActivityFeed } from "../components/sidebar/ActivityFeed";

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
      <>
        <NavBar />
        <Box w="1024px" mx="auto" mt={5}>
          <Flex>
            <SideBar>
              <NameCell />
              <Divider mx={5} w="auto" />
              <TodayProgram />
              <Divider mx={5} w="auto" />
              <ActivityFeed />
            </SideBar>
            <Spacer />
            <Box w="690px" bg="#070707" rounded={5}>
              <Text>Hello</Text>
            </Box>
          </Flex>
        </Box>
      </>
    );
  }
  return <>{body}</>;
};

export default dashboard;
