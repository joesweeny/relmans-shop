import React from 'react';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import image1 from '../../../assets/carousel/slider2.png';
import image2 from '../../../assets/carousel/slider1.png';
import image3 from '../../../assets/carousel/slider3.png';
import image4 from '../../../assets/carousel/slider4.png';

const CarouselWrapper = styled.div`
  width: 100%;
  margin-top: 20px;

  img {
    height: 300px;
  }

  @media (min-width: 758px) {
    img {
      height: 400px;
    }
  }

  @media (min-width: 959px) {
    img {
      height: 600px;
    }
    width: 60%;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
  }
`;

const ImageCarousel = () => {
  return (
    <CarouselWrapper>
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
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
