import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { NavBar } from "../components/NavBar";

interface inboxProps {}

export const inbox: React.FC<inboxProps> = ({}) => {
  return (
    <>
      <NavBar />
      <Box>
        <Text>Inbox</Text>
      </Box>
    </>
  );
};

export default inbox;
