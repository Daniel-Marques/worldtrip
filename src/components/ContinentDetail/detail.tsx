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
  GridItem,
  Grid,
} from "@chakra-ui/react";
import { CircleFlag } from "react-circle-flags";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { ContinentData } from "../../utils/types";
import { ContinentAboutItem } from "./continentAboutItem";
import { CountryCard } from "./countryCard";

interface CoverProps {
  continent: ContinentData;
}

export function Detail({ continent }: CoverProps) {
  return (
    <Flex
      as="main"
      px={["16px", "80px"]}
      pb={["16px", "40px"]}
      color="dark.text"
      w="100%"
      direction="column"
    >
      <Flex
        py={["24px", "80px"]}
        justify="space-between"
        w="100%"
        flexDir={["column", "row"]}
      >
        <Text
          w={["100%", "600px"]}
          textAlign="justify"
          fontSize={["0.875rem", "1.5rem"]}
        >
          {continent.description_long}
        </Text>
        <ContinentAboutItem
          countries={continent.quantity_country}
          languages={continent.quantity_languages}
          starredCities={continent.cities.length}
        />
      </Flex>
      <Text
        fontSize={["1.5rem", "2.25rem"]}
        color="dark.text"
        fontWeight="medium"
        mb={["20px", "40px"]}
      >
        Cidades +100
      </Text>
      <Grid
        templateColumns={["repeat(1, 256px)", "repeat(4, 256px)"]}
        gap={["20px", "45px"]}
        margin="0 auto"
        paddingBottom={["2.5rem", "1.5rem"]}
      >
        {continent.cities.map((city) => {
          return (
            <GridItem key={city.id}>
              <CountryCard city={city} />
            </GridItem>
          );
        })}
      </Grid>
    </Flex>
    // <Flex
    //   as="section"
    //   direction="column"
    //   w="100%"
    //   maxW={1160}
    //   mx="auto"
    // >
    //   <SimpleGrid columns={2} spacing="5rem" py="5rem">
    //     <Flex w="100%" maxW="600px" align="stretch">
    //       <Text fontSize="1.5rem" color="gray.500">
    //         {continent.description_long}
    //       </Text>
    //     </Flex>
    //     <Flex w="100%" justify="space-between" align="center">
    //       <ContinentAboutItem
    //         number={continent.quantity_country}
    //         label="países"
    //       />
    //       <ContinentAboutItem
    //         number={continent.quantity_languages}
    //         label="línguas"
    //       />
    //       <ContinentAboutItem
    //         number={continent.cities.length}
    //         label="cidades"
    //         icon={<Icon as={IoMdInformationCircleOutline} color="gray.400" />}
    //       />
    //     </Flex>
    //   </SimpleGrid>

    //   <Box>
    //     <Heading fontWeight="500">Cidades</Heading>

    //     <Wrap spacing="2.5rem" mt="2.5rem" justify="left">
    //       {continent.cities.map((city) => (
    //         <Box key={city.id}>
    //           <Image
    //             src={city.image}
    //             borderTopEndRadius="0.25rem"
    //             borderTopStartRadius="0.25rem"
    //             alt={city.name}
    //           />
    //           <Flex
    //             flex="1"
    //             p="6"
    //             justify="space-between"
    //             borderColor="yellow.500"
    //             borderWidth="1px"
    //             borderTop="none"
    //           >
    //             <VStack align="left">
    //               <Text fontSize="1.25rem" fontWeight="semibold">
    //                 {city.name}
    //               </Text>
    //               <Text color="gray.400">{city.country}</Text>
    //             </VStack>
    //             <CircleFlag countryCode={city.code} height="30" width="30" />
    //           </Flex>
    //         </Box>
    //       ))}
    //     </Wrap>
    //   </Box>
    // </Flex>
  );
}
