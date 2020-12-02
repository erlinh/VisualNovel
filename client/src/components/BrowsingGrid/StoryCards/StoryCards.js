import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {StoryCard} from '../StoryCard/StoryCard';
import './StoryCards.css';

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


export default function StoryCards({booksOfCategory}) {
  //console.log(booksOfCategory)

  const allStories = booksOfCategory.map(story =>
    <StoryCard key={story._id} id={story._id} title={story.title} author={story.author} imgUrl={story.imgUrl} rating={story.rating} slug={story.slug} categories={story.categories+''} />
  );


  return (
    <>
      <Carousel responsive={responsive} draggable={false} infinite={true} removeArrowOnDeviceType={['mobile']} containerClass="carousel-container">
        {allStories}
      </Carousel>
    </>
    
  );
}

// draggable=false disables dragging on desktop
// infinite=true makes it infinite, it does NOT jump back to the beginning when clicking "next" at the last item
// centerMode={true} shows a bit of the next/prev cards on the side of the screen