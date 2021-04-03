import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface ActivityFeedProps {}

export const ActivityFeed: React.FC<ActivityFeedProps> = ({}) => {
  return (
    <Box py={8} px={30}>
      <Box>
        <Text fontSize="lg">Activity</Text>
        <Text fontSize="2xl" fontWeight="bold">
          Feed
        </Text>
      </Box>
      <Container w="270px" h="200px" py={8} borderColor="red"></Container>
    </Box>
  );
};
