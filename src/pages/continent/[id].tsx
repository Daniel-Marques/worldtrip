import { Flex, Heading } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Cover } from "../../components/ContinentDetail/cover";
import { Detail } from "../../components/ContinentDetail/detail";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

import { ContinentData } from "../../utils/types";

interface ContinentProps {
  continent: ContinentData;
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <Flex>
      <Head>
        <title>{continent.name} | Home</title>
        <meta name="description" content={continent.description_long} />
        <meta name="image" content={continent.cover} />
      </Head>

      <Flex maxW="100vw" minH="100vh" direction="column">
        <Header />

        <Cover continent={continent} />

        <Detail continent={continent} />
      </Flex>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;

  const response = await api
    .get<ContinentData>(`/continents/${id}`)
    .then((response) => response.data);

  if (!response) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      continent: response,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
