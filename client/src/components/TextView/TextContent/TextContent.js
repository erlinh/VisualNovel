import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './TextContent.css';
import TextCard from './TextCard';
import textForPages from '../../../assets/resources/sampleTextData.json';

const TextContent = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const pagesFromJson = textForPages.map((page) => (
    <TextCard id={page.id} content={page.content} />
  ));

  return (
    <Carousel responsive={responsive} removeArrowOnDeviceType={['mobile']}>
      {pagesFromJson}
    </Carousel>
  );
};

export default TextContent;
