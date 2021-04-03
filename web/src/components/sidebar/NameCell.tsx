import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Circle,
  Flex,
  Spacer,
  Text,
  Image,
  Avatar,
  WrapItem,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
// import "../../media"
interface NameCellProps {}

export const NameCell: React.FC<NameCellProps> = ({}) => {
  return (
    <Box py={8} px={30}>
      <Flex>
        <Box>
          <Text fontSize="lg">Hello,</Text>
          <Text fontSize="2xl" fontWeight="bold">
            Harris
          </Text>
        </Box>
        <Spacer />
        <Box d="flex">
          <WrapItem pr={2}>
            <Avatar
              size="lg"
              name="Profile Pic"
              src="https://i.ibb.co/XC5QLj7/galaxy-brain.jpg"
            />
          </WrapItem>
          <Spacer />
          <WrapItem alignItems="center">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<ChevronDownIcon />}
                size="xs"
                variant="outline"
              />
              <MenuList>
                <MenuItem icon={<AddIcon />} command="⌘T">
                  New Tab
                </MenuItem>
                <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
                  New Window
                </MenuItem>
                <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
                  Open Closed Tab
                </MenuItem>
                <MenuItem icon={<EditIcon />} command="⌘O">
                  Open File...
                </MenuItem>
              </MenuList>
            </Menu>
          </WrapItem>
        </Box>
      </Flex>
    </Box>
  );
};
