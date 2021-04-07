import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { NavBar } from "../components/NavBar";

interface nutritionProps {}

export const nutrition: React.FC<nutritionProps> = ({}) => {
  return (
    <>
      <NavBar />
      <Box>
        <Text>Nutrition</Text>
      </Box>
    </>
  );
};

export default nutrition;
