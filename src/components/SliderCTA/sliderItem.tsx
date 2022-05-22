import {
  Flex,
  Heading,
  Text,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { ContinentSliderModel } from "../../utils/types";

interface SliderItemProps {
  continent: ContinentSliderModel;
}

export function SliderItem({ continent }: SliderItemProps) {
  return (
    <Flex
      h="450px"
      justify="center"
      align="center"
      bgImage={`url('${continent.cover}')`}
    >
      <Link href={`/continent/${continent.id}`} passHref>
        <ChakraLink>
          <VStack spacing={4}>
            <Heading
              color="gray.50"
              _hover={{ color: "yellow.500" }}
              fontSize="3rem"
              fontWeight="bold"
            >
              {continent.name}
            </Heading>
            <Text color="gray.100" fontSize="1.5rem" fontWeight="bold">
              {continent.description_short}
            </Text>
          </VStack>
        </ChakraLink>
      </Link>
    </Flex>
  );
}
