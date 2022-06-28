import React from "react";
import { Button, Stack, Image } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Stack
      as="nav"
      alignItems="center"
      h="80px"
      justifyContent="space-between"
      bg="gray.200"
      zIndex={200}
      isInline
    >
      <Image src="../assets/logo.svg" ml={8} />
      <Stack isInline mr={8}>
        <Button size="md" variant="link">
          Usuario
        </Button>
        <Button size="md" rounded={999}>
          coins
        </Button>
      </Stack>
    </Stack>
  );
};

export default NavBar;
