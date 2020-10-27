import React from 'react';
import StoryCard from '../StoryCard/StoryCard';

import allStories from '../../../assets/resources/sampleBookData.json';

export default function StoryCards() {
  const allStoryCards = allStories.map(story =>
    <StoryCard key={story.id} id={story.id} title={story.title} author={story.author} rating={story.rating} categories={story.category} />
  );
    
  return (
    <>
      {allStoryCards}
    </>
  );
}
