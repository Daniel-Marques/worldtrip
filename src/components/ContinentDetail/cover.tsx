import { Flex, Heading } from "@chakra-ui/react";
import { ContinentData } from "../../utils/types";

interface CoverProps {
  continent: ContinentData;
}

export function Cover({ continent }: CoverProps) {
  return (
    <Flex
      as="section"
      w="100%"
      h="500px"
      bgImage={`url('${continent.banner}')`}
      bgSize="cover"
      justify="left"
      align="flex-end"
    >
      <Flex
        w="100%"
        h="500px"
        maxW={1160}
        mx="auto"
        justify="left"
        align="flex-end"
      >
        <Heading
          color="gray.50"
          fontWeight="semibold"
          fontSize="3rem"
          mb="4rem"
        >
          {continent.name}
        </Heading>
      </Flex>
    </Flex>
  );
}
