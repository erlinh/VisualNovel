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
  const [kidsList, setKidsList]=useState([]);
  const [actionList, setactionList]=useState([]);
  const [cartoonList, setcartoonList]=useState([]);
  const [fantasylist, setfantasyList]=useState([]);
  const [animationList, setanimationList]=useState([]);
  const [comedyList, setcomedyList]=useState([]);

  const [top10List, setTop10List] = useState([]);
  const [popularInAreaList, setPopularInAreaList] = useState([]);
  const [recentList, setRecentList] = useState([]);

  useEffect(() => {
    async function fetchData () {
      try {
        const {data} = await instance.get('/stories');
        console.log(data);
        const allData= data.all;
        setStoriesList(allData);
        setKidsList(data.kids);
        setactionList(data.action);
        setcartoonList(data.cartoon);
        setfantasyList(data.fantasy);
        setanimationList(data.animation);
        setcomedyList(data.comedy);

        // random, hard-coded stories to be rendered in top10
        const top10Stories = [];
        // add the stories you want to appear in top10
        top10Stories.push(data.all[4]);
        top10Stories.push(data.all[2]);
        top10Stories.push(data.all[0]);
        top10Stories.push(data.all[3]);
        setTop10List(top10Stories);

        // random, hard-coded stories to be rendered in "popular in your area"
        const popularInAreaStories = [];
        // add the stories you want to appear in "popular in your area"
        popularInAreaStories.push(data.all[1]);
        popularInAreaStories.push(data.all[3]);
        popularInAreaStories.push(data.all[0]);
        setPopularInAreaList(popularInAreaStories);

        // random, hard-coded stories to be rendered in "recently added"
        const recentStories = [];
        // add the stories you want to appear in "recently added"
        recentStories.push(data.all[2]);
        recentStories.push(data.all[1]);
        recentStories.push(data.all[4]);
        setRecentList(recentStories);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
    
  },[]);
  //console.log(category)
  //console.log(setactionList);
  const top10Category = top10List.map(story =>
    <StoryCard key={story._id} id={story._id} title={story.title} author={story.author} rating={story.rating} slug={story.slug} categories={story.categories+''} />
  );

  const popularInAreaCategory = popularInAreaList.map(story =>
    <StoryCard key={story._id} id={story._id} title={story.title} author={story.author} rating={story.rating} slug={story.slug} categories={story.categories+''} />
  );

  const recentCategory = recentList.map(story =>
    <StoryCard key={story._id} id={story._id} title={story.title} author={story.author} rating={story.rating} slug={story.slug} categories={story.categories+''} />
  );

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
  
  const comedyListCategory = comedyList.map(story =>
    <StoryCard key={story._id} id={story._id} title={story.title} author={story.author} rating={story.rating} slug={story.slug} categories={story.categories+''} />
  );

  return (
    <>
      <h2 style={{color:'#cc8e35'}} >Top 10:</h2>
      <Carousel responsive={responsive} centerMode={true} draggable={false} infinite={true} removeArrowOnDeviceType={['mobile']} containerClass="carousel-container">
        {top10Category}
      </Carousel>

      <h2 style={{color:'#cc8e35'}} >Popular in your area:</h2>
      <Carousel responsive={responsive} centerMode={true} draggable={false} infinite={true} removeArrowOnDeviceType={['mobile']} containerClass="carousel-container">
        {popularInAreaCategory}
      </Carousel>

      <h2 style={{color:'#cc8e35'}} >Recently added stories:</h2>
      <Carousel responsive={responsive} centerMode={true} draggable={false} infinite={true} removeArrowOnDeviceType={['mobile']} containerClass="carousel-container">
        {recentCategory}
      </Carousel>

      <h2 style={{color:'#cc8e35'}} >All Stories:</h2>
      <Carousel responsive={responsive} centerMode={true} draggable={false} infinite={true} removeArrowOnDeviceType={['mobile']} containerClass="carousel-container">
        {chosenStoriesCards}
      </Carousel>

      <h2 style={{color:'#cc8e35'}}>Kids:</h2>
      <Carousel responsive={responsive} centerMode={true} draggable={false} infinite={true} removeArrowOnDeviceType={['mobile']} containerClass="carousel-container">
        {kidsListCategory}
      </Carousel>

      <h2 style={{color:'#cc8e35'}}>Actions:</h2>
      <Carousel responsive={responsive} centerMode={true} draggable={false} infinite={true} removeArrowOnDeviceType={['mobile']} containerClass="carousel-container">
        {actionListCategory}
      </Carousel>

      <h2 style={{color:'#cc8e35'}}>fantasy:</h2>
      <Carousel responsive={responsive} centerMode={true} draggable={false} infinite={true} removeArrowOnDeviceType={['mobile']} containerClass="carousel-container">
        {fantasyListCategory}
      </Carousel>

      <h2 style={{color:'#cc8e35'}}>Cartoons:</h2>
      <Carousel responsive={responsive} centerMode={true} draggable={false} infinite={true} removeArrowOnDeviceType={['mobile']} containerClass="carousel-container">
        {cartoonListCategory}
      </Carousel>

      <h2 style={{color:'#cc8e35'}}>Animations:</h2>
      <Carousel responsive={responsive} centerMode={true} draggable={false} infinite={true} removeArrowOnDeviceType={['mobile']} containerClass="carousel-container">
        {animationListCategory}
      </Carousel>

      <h2 style={{color:'#cc8e35'}}>Comedy:</h2>
      <Carousel responsive={responsive} centerMode={true} draggable={false} infinite={true} removeArrowOnDeviceType={['mobile']} containerClass="carousel-container">
        {comedyListCategory}
      </Carousel>
    </>
    
  );
}

// draggable=false disables dragging on desktop
// infinite=true makes it infinite, it does NOT jump back to the beginning when clicking "next" at the last item