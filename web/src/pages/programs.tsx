import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { NavBar } from "../components/NavBar";

interface programsProps {}

export const programs: React.FC<programsProps> = ({}) => {
  return (
    <>
      <NavBar />
      <Box>
        <Text>Programs</Text>
      </Box>
    </>
  );
};

export default programs;
