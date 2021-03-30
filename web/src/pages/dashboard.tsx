import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface dashboardProps {}

export const dashboard: React.FC<dashboardProps> = ({}) => {
  return (
    <Box>
      <Text>Hello World</Text>
    </Box>
  );
};

export default dashboard;
