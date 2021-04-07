import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { NavBar } from "../components/NavBar";

interface trackerProps {}

export const tracker: React.FC<trackerProps> = ({}) => {
  return (
    <>
      <NavBar />
      <Box>
        <Text>Tracker</Text>
      </Box>
    </>
  );
};

export default tracker;
