import { Grid, Container, Link, Box } from "@chakra-ui/react";
import React from "react";
import { Logo } from "../media/Logo";

interface CenterBoxLogoProps {}

export const CenterBoxLogo: React.FC<CenterBoxLogoProps> = ({ children }) => {
  return (
    <Grid>
      <Container mt={70} centerContent={true}>
        <Link href="/">
          <Logo id="logo" width="180px" height="100%" fill="black" />
        </Link>
      </Container>

      <Box
        mt={230}
        bg="#070707"
        pt="65px"
        pb="65px"
        pl="75px"
        pr="75px"
        maxW="fit-content"
        mx="auto"
        rounded={50}
      >
        {children}
      </Box>
    </Grid>
  );
};
