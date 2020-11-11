import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {StoryCard} from '../StoryCard/StoryCard';
//import allStories from '../../../assets/resources/sampleBookData.json';
//import StoriesServices from '../../../services/StoriesServices';
//import allStories from '../../../../../api/routes/index'
import './StoryCards.css';
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

export default function StoryCards() {

  const [storiesList, setStoriesList]= useState([]);
  const  [kidsList, setKidsList]=useState([]);
  const [actionList, setactionList]=useState([]);
  const [cartoonList, setcartoonList]=useState([]);
  const [fantasylist, setfantasyList]=useState([]);
  const [animationList, setanimationList]=useState([]);

  useEffect(() => {
    async function fetchData () {
      try {
    const {data} = await instance.get("/stories");
    console.log(data)
    const allData= data.all;
    setStoriesList(allData);
    setKidsList(data.kids);
    setactionList(data.action);
    setcartoonList(data.cartoon);
    setfantasyList(data.fantasy);
    setanimationList(data.animation);
    } catch (err) {
        console.log(err);
    }
    }
    fetchData();
    
  },[])
  //console.log(category)
  //console.log(setactionList);
  const chosenStoriesCards = storiesList.map(story =>
     <StoryCard key={story._id} id={story._id} title={story.title} author={story.author} rating={story.rating} slug={story.slug} categories={story.categories+''} />
  );
  const kidsListCategory = kidsList.map(story =>
    <StoryCard key={story._id} id={story._id} title={story.title} author={story.author} rating={story.rating} slug={story.slug} categories={story.categories+''} />
 );
 const actionListCategory = actionList.map(story =>
  <StoryCard key={story._id} id={story._id} title={story.title} author={story.author} rating={story.rating} slug={story.slug} categories={story.categories+''} />
);
const fantasyListCategory = fantasylist.map(story =>
  <StoryCard key={story._id} id={story._id} title={story.title} author={story.author} rating={story.rating} slug={story.slug} categories={story.categories+''} />
);
const cartoonListCategory = cartoonList.map(story =>
  <StoryCard key={story._id} id={story._id} title={story.title} author={story.author} rating={story.rating} slug={story.slug} categories={story.categories+''} />
);
const animationListCategory = animationList.map(story =>
  <StoryCard key={story._id} id={story._id} title={story.title} author={story.author} rating={story.rating} slug={story.slug} categories={story.categories+''} />
);

return (
    <>
     <h2>All Stories:</h2>
    <Carousel responsive={responsive} centerMode={true} draggable={false} infinite={true} removeArrowOnDeviceType={['mobile']} containerClass="carousel-container">
      {chosenStoriesCards}
    </Carousel>
    <h2>Kids:</h2>
    <Carousel responsive={responsive} centerMode={true} draggable={false} infinite={true} removeArrowOnDeviceType={['mobile']} containerClass="carousel-container">
     {kidsListCategory}
    </Carousel>
    <h2>Actions:</h2>
    <Carousel responsive={responsive} centerMode={true} draggable={false} infinite={true} removeArrowOnDeviceType={['mobile']} containerClass="carousel-container">
      {actionListCategory}
    </Carousel>
    <h2>fantasy:</h2>
    <Carousel responsive={responsive} centerMode={true} draggable={false} infinite={true} removeArrowOnDeviceType={['mobile']} containerClass="carousel-container">
      {fantasyListCategory}
    </Carousel>
    <h2>Cartoons:</h2>
    <Carousel responsive={responsive} centerMode={true} draggable={false} infinite={true} removeArrowOnDeviceType={['mobile']} containerClass="carousel-container">
      {cartoonListCategory}
    </Carousel>
    <h2>Animations:</h2>
    <Carousel responsive={responsive} centerMode={true} draggable={false} infinite={true} removeArrowOnDeviceType={['mobile']} containerClass="carousel-container">
      {animationListCategory}
    </Carousel>
    </>
    
  );
}

// draggable=false disables dragging on desktop
// infinite=true makes it infinite, it does NOT jump back to the beginning when clicking "next" at the last item