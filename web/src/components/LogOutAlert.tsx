import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useLogoutMutation } from "../generated/graphql";

interface LogOutAlertProps {}

export const LogOutAlert: React.FC<LogOutAlertProps> = ({}) => {
  const [{ fetching: LogoutFetching }, logout] = useLogoutMutation();
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  return (
    <>
      <Button colorScheme="blue" onClick={() => setIsOpen(true)} variant="link">
        Log out
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Sign Out of Account
            </AlertDialogHeader>

            <AlertDialogBody>Are you sure you want to Logout?</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="blue"
                onClick={() => {
                  onClose;
                  logout();
                }}
                isLoading={LogoutFetching}
                ml={3}
              >
                Logout
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
