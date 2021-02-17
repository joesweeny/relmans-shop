import React from 'react';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import image1 from '../../../assets/carousel/flash.jpg';
import image2 from '../../../assets/carousel/flowers.jpg';
import image3 from '../../../assets/carousel/peapods.jpg';
import image4 from '../../../assets/carousel/potatoes.jpg';

const CarouselWrapper = styled.div`
  width: 100%;

  img {
    height: 400px;
    filter: brightness(50%);
  }

  @media (min-width: 758px) {
    img {
      height: 600px;
    }
  }

  @media (min-width: 959px) {
    img {
      height: 800px;
    }
  }
`;

const ImageCarousel = () => {
  return (
    <CarouselWrapper>
      <Carousel
        autoPlay
        infiniteLoop
        interval={4000}
        showThumbs={false}
        transitionTime={400}
      >
        <img src={image1} alt="chief" />
        <img src={image2} alt="flash" />
        <img src={image3} alt="peapods" />
        <img src={image4} alt="potatoes" />
      </Carousel>
    </CarouselWrapper>
  );
};

export default ImageCarousel;
