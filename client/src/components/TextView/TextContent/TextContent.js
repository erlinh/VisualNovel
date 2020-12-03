import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import {useParams} from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
import './TextContent.css';
import TextCard from './TextCard';
import instance from '../../../axios'; 

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
  const [contents, setContents]=useState([]);
  const slug= useParams().slug;

  useEffect(()=>{
    async function fetchContent(){
      try {
        const {data} = await instance.get(`/stories/${slug}/content`);
        setContents(data.content);
      } catch (err) {
        console.log('There is an error to get content', err);
      }
    }
    fetchContent();
  },[slug]);

  const pagesFromDatabase = contents.map((page) => (
    <TextCard key={page.id} content={page.text} />
  ));

  return (
    <div className="textContentContainer">
   
      <Carousel responsive={responsive} removeArrowOnDeviceType={['mobile']}>
        {pagesFromDatabase}
      </Carousel>
    </div>
  );
};

export default TextContent;
