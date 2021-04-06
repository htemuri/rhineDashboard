import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Box,
  Flex,
  Spacer,
  Badge,
} from "@chakra-ui/react";
import React from "react";

interface StatCardProps {
  _data: {
    label: string;
    value: string | number;
    direction: "increase" | "decrease";
    percent: string | number;
  };
}

export const StatCard: React.FC<StatCardProps> = ({ _data }) => {
  const { label, value, direction, percent } = _data;
  let color = null;
  if (direction === "decrease") {
    color = "red";
  } else {
    color = "green";
  }
  return (
    <Box
      w="full"
      borderColor="#454545"
      borderWidth={0}
      rounded={9}
      display="table"
      bg="#070707"
    >
      <Box display="table-cell" verticalAlign="middle" py={3}>
        <Stat w="auto" textAlign="center">
          <StatLabel>{label}</StatLabel>
          <StatNumber fontSize="xl">{value}</StatNumber>
          <StatHelpText fontSize="xs" mb={0}>
            <Badge colorScheme={color}>
              <StatArrow type={direction} />
              {percent}
            </Badge>
          </StatHelpText>
        </Stat>
      </Box>
    </Box>
  );
};
