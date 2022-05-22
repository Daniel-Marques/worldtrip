import { Flex, Text } from "@chakra-ui/react";
import { ContinentData } from "../../utils/types";

interface CoverProps {
  continent: ContinentData;
}

export function Cover({ continent }: CoverProps) {
  return (
    <Flex
      w="100%"
      h={["150px", "500px"]}
      bgImage={`url('${continent.banner}')`}
      bgPosition={["center", "bottom"]}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        px={["136px", "140px"]}
        py={["56px", "60px"]}
        align="end"
        w="100%"
        h="100%"
      >
        <Text
          fontSize={["1.75rem", "3rem"]}
          fontWeight="semibold"
          textAlign="center"
          color="white"
        >
          {continent.name}
        </Text>
      </Flex>
    </Flex>
  );
}
