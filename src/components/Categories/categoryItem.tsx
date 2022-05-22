import { Flex, GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";

interface CategoryItemProps {
  iconName: string;
  title: string;
}

export function CategoryItem({iconName, title}: CategoryItemProps) {
  return (
    <GridItem>
      <Flex
        direction="column"
        align="center"
        justify="center"
      >
        <Image 
          src={`/images/icons/${iconName}.svg`}
          width="85px" height="85px"
        />
        <Text
          fontSize="2xl"
          fontWeight="600"
          color="gray.700"
          mt="6"
        >
          {title}
        </Text>
      </Flex>
    </GridItem>
  );
}
