import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      background="url(../assets/header.png) center right"
      backgroundSize="cover"
      minH="412px"
      w="100%"
    >
      <Heading color="white" alignSelf="flex-end" p={6}>
        Electronics
      </Heading>
    </Flex>
  );
};

export default Header;
