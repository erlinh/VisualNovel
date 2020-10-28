import React from 'react';
import StoryCard from '../StoryCard/StoryCard';

import allStories from '../../../assets/resources/sampleBookData.json';

export default function StoryCards({category}) {
  const chosenStoriesCards = allStories[category].map(story =>
    <StoryCard key={story.id} id={story.id} title={story.title} author={story.author} rating={story.rating} categories={story.category} />
  );
    
  return (
    <>
      {chosenStoriesCards}
    </>
  );
}
