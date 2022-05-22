import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      w="100vw"
      bg="white"
      h="100px"
      align="center"
      justify="center"
    >
      <Image
        src="./images/icons/logo.svg"
        alt="Logo Worldtrip com um avião voando sobre a logo"
      />
    </Flex>
  );
}
