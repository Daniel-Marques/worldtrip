import { Flex, GridItem, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";

interface CategoryItemProps {
  iconName: string;
  title: string;
}

export function CategoryItem({ iconName, title }: CategoryItemProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <GridItem>
      <Flex direction="column" align="center" justify="center">
        {isWideVersion && (
          <Image
            src={`/images/icons/${iconName}.svg`}
            width="85px"
            height="85px"
            alt={title}
          />
        )}

        <Text fontSize="2xl" fontWeight="600" color="gray.700" mt="6">
          {title}
        </Text>
      </Flex>
    </GridItem>
  );
}
