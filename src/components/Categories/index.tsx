import { Grid } from "@chakra-ui/react";

import { CategoryItem } from "./categoryItem";

export function Categories() {
  return (
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
  );
}
