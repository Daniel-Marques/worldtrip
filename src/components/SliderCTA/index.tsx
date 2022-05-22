import { Box, Flex, Heading } from "@chakra-ui/react";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ContinentSliderModel } from "../../utils/types";
import { SliderItem } from "./sliderItem";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation, Pagination, Autoplay]);

interface SliderCTAProps {
  continents: ContinentSliderModel[];
}

export function SliderCTA({ continents }: SliderCTAProps) {
  return (
    <Flex as="section" direction="column" w="100%" align="center">
      <Flex direction="column" w="100%">
        <Heading
          lineHeight={["30px", "54px"]}
          fontWeight="medium"
          fontSize={["1.25rem", "2.25rem"]}
          textAlign="center"
          mb={["1.25rem", "50px"]}
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Heading>

        <Box h="450px" w="100%" maxW="1240" mx="auto" mb="4rem">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {continents?.map((continent) => (
              <SwiperSlide key={continent.id}>
                <SliderItem continent={continent} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Flex>
    </Flex>
  );
}
