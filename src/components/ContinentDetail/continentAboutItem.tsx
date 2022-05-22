import { Flex, Text, VStack } from "@chakra-ui/react";
import { ReactElement } from "react";
import { ContinentItemInfo } from "./continentItemInfo";

interface ContinentAboutItemProps {
  countries: number;
  languages: number;
  starredCities: number;
}

export function ContinentAboutItem({
  countries,
  languages,
  starredCities,
}: ContinentAboutItemProps) {
  return (
    <Flex align="center" justify="space-between" w={["343px", "500px"]}>
      <ContinentItemInfo quantity={countries}>países</ContinentItemInfo>
      <ContinentItemInfo quantity={languages}>línguas</ContinentItemInfo>
      <ContinentItemInfo quantity={starredCities} tooltip>
        cidades +100
      </ContinentItemInfo>
    </Flex>
  );
}
