import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Skeleton,
  Spacer,
  Stack,
  Text,
  useColorModeValue as mode,
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
import { StatCard } from "../components/StatCard";

interface dashboardProps {}

export const dashboard: React.FC<dashboardProps> = ({}) => {
  const stats = [
    {
      label: "Weight",
      value: "165 lb",
      direction: "decrease" as "increase" | "decrease",
      percent: "4%",
    },
    {
      label: "Bf %",
      value: "15%",
      direction: "decrease" as "increase" | "decrease",
      percent: "2%",
    },
    {
      label: "Steps",
      value: "4234",
      direction: "increase" as "increase" | "decrease",
      percent: "20%",
    },
    {
      label: "Total Reps",
      value: "1556",
      direction: "increase" as "increase" | "decrease",
      percent: "4%",
    },
  ];
  const [{ data, fetching }] = useMeQuery();

  let body = null;
  let haveActivity = null;
  if (fetching) {
    haveActivity = (
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    );
  } else if (data.me.first_name === "Harris") {
    haveActivity = (
      <Box>
        <Text> You're all up to date!</Text>
      </Box>
    );
  } else {
    haveActivity = (
      <Text textAlign="center" fontSize="sm" verticalAlign="middle">
        This is your notifactions box. I am a notification that you really need
        to see. Make sure to talk to your trainers
      </Text>
    );
  }

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
              <ActivityFeed>{haveActivity}</ActivityFeed>
            </SideBar>
            <Spacer />
            <Box w="690px" bg="#000000" rounded={5}>
              <Box as="section" bg={mode("gray.50", "#000000")}>
                <Box mx="auto">
                  <SimpleGrid columns={{ base: 1, md: 4 }} spacing="6">
                    {stats.map((stat, idx) => (
                      <StatCard key={idx} _data={stat} />
                    ))}
                  </SimpleGrid>
                </Box>
              </Box>
              <Box>{/* <Chart /> */}</Box>
            </Box>
          </Flex>
        </Box>
      </>
    );
  }
  return <>{body}</>;
};

export default dashboard;
