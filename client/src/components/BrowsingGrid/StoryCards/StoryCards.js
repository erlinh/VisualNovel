import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import StoryCard from '../StoryCard/StoryCard';
import allStories from '../../../assets/resources/sampleBookData.json';
//import allStories from '../../../../../api/routes/index'
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

export default function StoryCards({category}) {
  const chosenStoriesCards = allStories[category].map(story =>
    <StoryCard key={story.id} id={story.id} title={story.title} author={story.author} rating={story.rating} categories={story.category} />
  );
    
  return (
    <Carousel responsive={responsive} centerMode={true} draggable={false} infinite={true} removeArrowOnDeviceType={['mobile']} containerClass="carousel-container">
      {chosenStoriesCards}
    </Carousel>
  );
}

// draggable=false disables dragging on desktop
// infinite=true makes it infinite, it does NOT jump back to the beginning when clicking "next" at the last item