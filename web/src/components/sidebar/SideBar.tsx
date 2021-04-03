import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface SideBarProps {
  // first_name: string
}

export const SideBar: React.FC<SideBarProps> = ({ children }) => {
  return (
    <Box w="300px" mb={8} bg="#070707" rounded={10}>
      {children}
    </Box>
  );
};
