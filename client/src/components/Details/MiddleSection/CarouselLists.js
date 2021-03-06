import React, {useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../BrowsingGrid/StoryCards/StoryCards.css';
import instance from '../../../axios'; 
import CarouselCard from './CarouselCard';
import './Middle.css';

// responsiveness settings for the carousels
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    slidesToSlide: 3 // clicking on "next" arrow moves the carousel by 2 items (default: 1)
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2.5
  }
};

export default function CarouselLists(){
  const [allList, setAllList]= useState([]);

  useEffect(()=>{
    async function fetchData(){
      try {
        const {data}= await instance.get('/stories');
        setAllList(data.all);
        //console.log(setAllList);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  },[]);

  const allListCategory = allList.map((story) =>( 
    <CarouselCard key={story._id} id={story._id} imgUrl={story.imgUrl} slug={story.slug} />
  ));

  return(
    <>
      <h5 className="carausel__title">
      You may like this</h5>
      <Carousel responsive={responsive} draggable={false} infinite={true} showDots={false} removeArrowOnDeviceType={['mobile']} containerClass="carousel-container">
        {allListCategory}
      </Carousel>
    </>
  );

}

  