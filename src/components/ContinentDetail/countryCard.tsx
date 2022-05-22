import { Flex, Image, Text } from "@chakra-ui/react";
import { CircleFlag } from "react-circle-flags";
import { City } from "../../utils/types";

interface CardProps {
  city: City;
}

export function CountryCard({ city }: CardProps) {
  return (
    <Flex
      direction="column"
      w="256px"
      h="279px"
      align="center"
      borderRadius="4px"
      border="1px solid"
      borderColor="highlight"
    >
      <Image
        w="100%"
        h="173px"
        src={city.image}
        alt={city.name}
        borderTopRadius="4px"
      />
      <Flex
        px="1.5rem"
        py="1.125rem"
        w="100%"
        justify="space-between"
        align="center"
        fontFamily="Barlow"
      >
        <Flex direction="column" h="4rem" justify="space-between">
          <Text fontSize="1.25rem" fontFamily="Poppins" fontWeight="semibold">
            {city.name}
          </Text>
          <Text color="gray.600" fontFamily="Poppins" fontWeight="medium">
            {city.country}
          </Text>
        </Flex>

        <CircleFlag countryCode={city.code} height="30" width="30" />
      </Flex>
    </Flex>
  );
}
