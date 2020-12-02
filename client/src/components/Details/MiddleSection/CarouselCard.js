import React, {useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {StoryCard} from '../../BrowsingGrid/StoryCard/StoryCard';
import '../../BrowsingGrid/StoryCards/StoryCards.css';
import instance from '../../../axios'; 

// responsiveness settings for the carousels
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2 // clicking on "next" arrow moves the carousel by 2 items (default: 1)
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  export default function CarouselCard(){
    const [allList, setAllList]= useState([]);

    useEffect(()=>{
        async function fetchData(){
            try {
                const {data}= await instance.get('/stories');
                setAllList(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    },[]);

    const allListCategory = allList.map(story =>
        <StoryCard key={story._id} id={story._id} title={story.title} author={story.author} imgUrl={story.imgUrl} rating={story.rating} slug={story.slug} categories={story.categories+''} />
      );

      return(
        <>
          <h2 style={{color:'#cc8e35'}} >People may interest:</h2>
            <Carousel responsive={responsive} draggable={false} infinite={true} removeArrowOnDeviceType={['mobile']} containerClass="carousel-container">
                {allListCategory}
            </Carousel>
        </>
      )

  }

  