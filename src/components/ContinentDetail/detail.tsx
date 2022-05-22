import {
  Box,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack,
  Wrap,
  Image,
} from "@chakra-ui/react";
import { CircleFlag } from "react-circle-flags";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { ContinentData } from "../../utils/types";
import { ContinentAboutItem } from "./continentAboutItem";

interface CoverProps {
  continent: ContinentData;
}

export function Detail({ continent }: CoverProps) {
  return (
    <Flex as="section" direction="column" w="100%" maxW={1160} mx="auto">
      <SimpleGrid columns={2} spacing="5rem" py="5rem">
        <Flex w="100%" maxW="600px" align="stretch">
          <Text fontSize="1.5rem" color="gray.500">
            {continent.description_long}
          </Text>
        </Flex>
        <Flex w="100%" justify="space-between" align="center">
          <ContinentAboutItem
            number={continent.quantity_country}
            label="países"
          />
          <ContinentAboutItem
            number={continent.quantity_languages}
            label="línguas"
          />
          <ContinentAboutItem
            number={continent.cities.length}
            label="cidades"
            icon={<Icon as={IoMdInformationCircleOutline} color="gray.400" />}
          />
        </Flex>
      </SimpleGrid>

      <Box>
        <Heading fontWeight="500">Cidades</Heading>

        <Wrap spacing="2.5rem" mt="2.5rem" justify="left">
          {continent.cities.map((city) => (
            <Box key={city.id}>
              <Image
                src={city.image}
                borderTopEndRadius="0.25rem"
                borderTopStartRadius="0.25rem"
                alt={city.name}
              />
              <Flex
                flex="1"
                p="6"
                justify="space-between"
                borderColor="yellow.500"
                borderWidth="1px"
                borderTop="none"
              >
                <VStack align="left">
                  <Text fontSize="1.25rem" fontWeight="semibold">
                    {city.name}
                  </Text>
                  <Text color="gray.400">{city.country}</Text>
                </VStack>
                <CircleFlag countryCode={city.code} height="30" width="30" />
              </Flex>
            </Box>
          ))}
        </Wrap>
      </Box>
    </Flex>
  );
}
