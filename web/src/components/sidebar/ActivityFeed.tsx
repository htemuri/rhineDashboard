import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface ActivityFeedProps {}

export const ActivityFeed: React.FC<ActivityFeedProps> = ({ children }) => {
  return (
    <Box py={8} px={30}>
      <Box>
        <Text fontSize="lg">Activity</Text>
        <Text fontSize="2xl" fontWeight="bold">
          Feed
        </Text>
      </Box>
      <Box
        w="full"
        mt={3}
        h="200px"
        borderColor="#454545"
        borderWidth={1}
        bg="#000000"
        rounded={5}
        display="table"
      >
        <Box display="table-cell" verticalAlign="middle" textAlign="center">
          {children}
        </Box>
      </Box>
    </Box>
  );
};
