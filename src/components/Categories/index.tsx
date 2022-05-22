import { Grid, useBreakpointValue } from "@chakra-ui/react";
import { CategoriesMobile } from "./CategoriesMobile";

import { CategoryItem } from "./categoryItem";

export function Categories() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return isWideVersion ? (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      mt="32"
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={5}
    >
      <CategoryItem iconName="cocktail" title="vida noturna" />
      <CategoryItem iconName="surf" title="praia" />
      <CategoryItem iconName="building" title="moderno" />
      <CategoryItem iconName="museum" title="clássico" />
      <CategoryItem iconName="earth" title="e mais..." />
    </Grid>
  ) : (
    <CategoriesMobile />
  );
}
