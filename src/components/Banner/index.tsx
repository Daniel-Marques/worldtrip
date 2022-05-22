import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      bgImage={`url("./images/banner.png")`}
      bgSize="cover"
      bgRepeat="no-repeat"
      w="100%"
      h={["163px", "335px"]}
      px={["1rem", "140px"]}
      py={["1.75rem", "80px"]}
      mb={["2.25rem", "20"]}
    >
      <Flex
        align="center"
        justify="space-between"
        w="100vw"
        mx="auto"
        px={["20px", "140px"]}
      >
        <Stack>
          <Heading
            as="h1"
            color="white"
            fontSize={["1.25rem", "4xl"]}
            h={["58px", "120px"]}
            lineHeight={["30px", "54px"]}
            fontWeight="500"
          >
            5 Continentes, <br />
            infinitas possibilidades.
          </Heading>

          <Text
            as="h2"
            w={["333px", "524px"]}
            mt={["0.5rem", "5"]}
            fontSize={["0.875rem", "1.25rem"]}
            fontWeight="normal"
            lineHeight={["21px", "30px"]}
            fontStyle="normal"
            color="white"
          >
            Chegou a hora de tirar do papel a viagem que você{" "}
            {isWideVersion && <br />} sempre sonhou.
          </Text>
        </Stack>

        {isWideVersion && (
          <Image
            src="./images/airplane.svg"
            display="block"
            alt="Avião voando e nuvens em sua volta"
            transform="translateY(48px)"
          />
        )}
      </Flex>
    </Flex>
  );
}
