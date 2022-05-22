import {
  Flex,
  HStack,
  Icon,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { GoPrimitiveDot } from "react-icons/go";

export function CategoriesMobile() {
  return (
    <Flex
      px="50px"
      justify="space-between"
      direction="column"
      w="100%"
      h="120px"
    >
      <Flex justify="space-between">
        <HStack spacing={1} align="center" justify="center">
          <Icon as={GoPrimitiveDot} color="#FFBA08" />
          <Text fontSize="1.125rem" fontWeight="semibold" color="dark.text">
            vida noturna
          </Text>
        </HStack>
        <HStack spacing={1} align="center" justify="center">
          <Icon as={GoPrimitiveDot} color="#FFBA08" />
          <Text fontSize="1.125rem" fontWeight="semibold" color="dark.text">
            praia
          </Text>
        </HStack>
      </Flex>
      <Flex justify="space-between">
        <HStack spacing={1} align="center" justify="center">
          <Icon as={GoPrimitiveDot} color="#FFBA08" />
          <Text fontSize="1.125rem" fontWeight="semibold" color="dark.text">
            moderno
          </Text>
        </HStack>
        <HStack spacing={1} align="center" justify="center">
          <Icon as={GoPrimitiveDot} color="#FFBA08" />
          <Text fontSize="1.125rem" fontWeight="semibold" color="dark.text">
            clássico
          </Text>
        </HStack>
      </Flex>
      <HStack spacing={1} align="center" justify="center">
        <Icon as={GoPrimitiveDot} color="#FFBA08" />
        <Text fontSize="1.125rem" fontWeight="semibold" color="dark.text">
          e mais...
        </Text>
      </HStack>
    </Flex>
  );
}
