import { Flex, HStack, Icon, IconButton, Image, Link } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";

export function Header() {
  const { asPath } = useRouter();

  return (
    <HStack
      w="100vw"
      h={["50px", "100px"]}
      alignItems="center"
      justifyContent="center"
    >
      {asPath != "/" && (
        <Link href="/">
          <IconButton
            aria-label="Voltar para a página inicial"
            icon={<Icon as={IoIosArrowBack} />}
            fontSize={["18", "24"]}
            variant="unstyled"
            mr="2"
          />
        </Link>
      )}

      <Flex justifyContent={"center"} flex="1">
        <Image
          src="/images/icons/logo.svg"
          alt="Logo Worldtrip com um avião voando sobre a logo"
          w={["81px", "184px"]}
        />
      </Flex>
    </HStack>
  );
}
