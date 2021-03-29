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
import React from "react";
import { Logo } from "../media/Logo";

const Index = () => (
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
      <Box w={560} mt={65}>
        <Flex>
          <Button w={236} h={62} bg="#247bed">
            Trainer
          </Button>
          <Spacer />
          <Button w={236} h={62} bg="#247bed">
            Client
          </Button>
        </Flex>
      </Box>
      <Text mt={50}>
        Already have an account?{" "}
        <Link href="./landing" fontWeight="bold">
          Log In
        </Link>
      </Text>
    </Box>
  </Grid>
);

export default Index;
