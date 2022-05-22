import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";

import { Banner } from "../components/Banner";
import { Categories } from "../components/Categories";
import { Divider } from "../components/Divider";
import { Header } from "../components/Header";
import { SliderCTA } from "../components/SliderCTA";
import { api } from "../services/api";
import { ContinentSliderModel } from "../utils/types";

interface HomeProps {
  continents: ContinentSliderModel[];
}

export default function Home({ continents }: HomeProps) {
  return (
    <Flex flexDir="column">
      <Head>
        <title>WorldTrip | Home</title>
      </Head>

      {/* Cabeçalho  */}
      <Header />

      {/* Banner principal */}
      <Banner />

      {/* Lista de categorias */}
      <Categories />

      {/* Separador da seção */}
      <Divider />

      <SliderCTA continents={continents} />
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api
    .get("/continents")
    .then((response) => response.data);

  return {
    props: {
      continents: response,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
