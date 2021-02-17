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
  border: 2px solid #cecbcbee;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);

  img {
    height: 250px;
  }

  @media (min-width: 959px) {
    width: 50%;
    height: 400px;

    img {
      height: 400px;
    }
  }
`;

const ImageCarousel = () => {
  return (
    <CarouselWrapper>
      <Carousel
        autoPlay
        infiniteLoop
        interval={5000}
        showThumbs={false}
        stopOnHover
        transitionTime={600}
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
