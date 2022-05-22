import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      bgImage={`url("./images/banner.png")`}
      bgSize="cover"
      bgRepeat="no-repeat"
      w="100vw"
      h="335px"
    >
      <Flex
        align="center"
        justify="space-between"
        w="100vw"
        mx="auto"
        px="140px"
      >
        <Stack>
          <Heading color="white" fontSize="4xl" fontWeight="500">
            5 Continentes, <br />
            infinitas possibilidades.
          </Heading>

          <Text color="white" mt="5" fontSize="xl">
            Chegou a hora de tirar do papel a viagem que você <br /> sempre
            sonhou.
          </Text>
        </Stack>

        <Image
          src="./images/airplane.svg"
          display="block"
          alt="Avião voando e nuvens em sua volta"
          transform="translateY(48px)"
        />
      </Flex>
    </Flex>
  );
}
