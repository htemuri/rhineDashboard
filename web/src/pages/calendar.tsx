import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { NavBar } from "../components/NavBar";

interface calendarProps {}

export const calendar: React.FC<calendarProps> = ({}) => {
  return (
    <>
      <NavBar />
      <Box>
        <Text>Calendar</Text>
      </Box>
    </>
  );
};

export default calendar;
