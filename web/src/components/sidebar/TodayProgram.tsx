import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { ExerciseCell } from "./ExerciseCell";

interface TodayProgramProps {}

export const TodayProgram: React.FC<TodayProgramProps> = ({}) => {
  return (
    <Box py={8} px={0}>
      <Box px={30}>
        <Text fontSize="lg">Todays</Text>
        <Text fontSize="2xl" fontWeight="bold">
          Program
        </Text>
      </Box>
      <Box>
        <ExerciseCell
          exercise="Exercise"
          sets="Sets"
          reps="Reps"
          weight="Weight(lb)"
          color="gray"
        />
        <Divider borderColor="#454545" mx={30} w="auto" />
        <Box _hover={{ bgColor: "#1c1c1c" }} rounded={5}>
          <ExerciseCell
            exercise="Squat"
            sets="3"
            reps="8"
            weight="210"
            color="white"
          />
          <Box hidden={true}>bobby</Box>
        </Box>
        <Divider borderColor="#454545" mx={30} w="auto" />
        <Box _hover={{ bgColor: "#1c1c1c" }} rounded={5}>
          <ExerciseCell
            exercise="Bench"
            sets="4"
            reps="5"
            weight="135"
            color="white"
          />
        </Box>
        <Divider borderColor="#454545" mx={30} w="auto" />
        <Box _hover={{ bgColor: "#1c1c1c" }} rounded={5}>
          <ExerciseCell
            exercise="Deadlift"
            sets="6"
            reps="4"
            weight="265"
            color="white"
          />
        </Box>{" "}
        <Divider borderColor="#454545" mx={30} w="auto" />
      </Box>
    </Box>
  );
};
