import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";

interface ExerciseCellProps {
  exercise: string;
  sets: string;
  reps: string;
  weight: string;
  color: string;
}

export const ExerciseCell: React.FC<ExerciseCellProps> = ({
  exercise,
  sets,
  reps,
  weight,
  color,
}) => {
  return (
    <Box d="flex" px={30}>
      {/* <Flex> */}
      <Box w="80px">
        <Text fontSize="sm" color={color} py={3}>
          {exercise}
        </Text>
      </Box>
      <Spacer />
      <Box textAlign="center" w="30px" py={3}>
        <Text fontSize="sm" color={color}>
          {sets}
        </Text>
      </Box>
      <Spacer />
      <Box w="35px" textAlign="center" py={3}>
        <Text fontSize="sm" color={color}>
          {reps}
        </Text>
      </Box>
      <Spacer />
      <Box w="65px" textAlign="center" py={3}>
        <Text fontSize="sm" color={color}>
          {weight}
        </Text>
      </Box>
      {/* </Flex> */}
    </Box>
  );
};
