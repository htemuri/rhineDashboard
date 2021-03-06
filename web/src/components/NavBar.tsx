import { Container, Flex, Spacer } from "@chakra-ui/layout";
import {
  Box,
  extendTheme,
  Input,
  Link,
  Text,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";
import { Logo } from "../media/Logo";
import NextLink from "next/link";
import { SearchIcon } from "@chakra-ui/icons";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <Box
      m="0 auto"
      maxW="100%"
      d="flex"
      h="64px"
      alignItems="center"
      w="1024px"
      justifyContent={{ base: "", xl: "" }}
    >
      {/* Logo */}
      <Box
        pos={{ base: "relative", xl: "absolute" }}
        left={{ base: "0", xl: "48px" }}
        mr={{ base: "5", xl: "0" }}
        ml={{ base: "5", xl: "0" }}
      >
        <Link href="/">
          <Logo id="logo" width="100px" height="100%" fill="black" />
        </Link>
      </Box>

      {/* Search Bar */}
      <Box flexBasis="480px" minW="160px">
        <InputGroup alignItems="center">
          <InputLeftElement
            height="full"
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            size="sm"
            name="search"
            placeholder="Search"
            borderColor="gray"
            // ml={0}
          ></Input>{" "}
        </InputGroup>
      </Box>

      {/* Links on right */}
      <Box
        pos={{ base: "relative", lg: "absolute" }}
        right={{ base: "0", xl: "48px" }}
        // left={{ base: "5px", xl: "0" }}
        mr={{ base: "2", xl: "0" }}
        ml={{ base: "auto", xl: "0" }}
      >
        <Flex alignItems="center" height="100%">
          <NextLink href="/dashboard">
            <Link ml={2} mr={6} fontWeight="bold" fontSize="xs">
              <Text>Home</Text>
            </Link>
          </NextLink>
          <NextLink href="/programs">
            <Link mr={6} fontWeight="bold" fontSize="xs">
              <Text>Programs</Text>
            </Link>
          </NextLink>
          <NextLink href="/tracker">
            <Link mr={6} fontWeight="bold" fontSize="xs">
              <Text>Tracker</Text>
            </Link>
          </NextLink>
          <NextLink href="/nutrition">
            <Link mr={6} fontWeight="bold" fontSize="xs">
              <Text>Nutrition</Text>
            </Link>
          </NextLink>
          <NextLink href="/calendar">
            <Link mr={6} fontWeight="bold" fontSize="xs">
              <Text>Calendar</Text>
            </Link>
          </NextLink>
          <NextLink href="/inbox">
            <Link fontWeight="bold" fontSize="xs">
              <Text>Inbox</Text>
            </Link>
          </NextLink>
        </Flex>
      </Box>
    </Box>
  );
};
