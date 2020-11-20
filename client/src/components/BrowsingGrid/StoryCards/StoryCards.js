import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {StoryCard} from '../StoryCard/StoryCard';
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

  const [allList, setAllList]= useState([]);
  const [mysteryList, setMysteryList]=useState([]);
  const [eroticList, setEroticList]=useState([]);
  const [romanceList, setRomanceList]=useState([]);
  const [scifilist, setScifiList]=useState([]);

  const [top10List, setTop10List] = useState([]);
  const [popularInAreaList, setPopularInAreaList] = useState([]);
  const [recentList, setRecentList] = useState([]);

  useEffect(() => {
    async function fetchData () {
      try {
        const {data} = await instance.get('/stories');
        //console.log(data);
        setAllList(data.all);
        setMysteryList(data.mystery);
        setEroticList(data.erotic);
        setRomanceList(data.romance);
        setScifiList(data.scifi);

        // random, hard-coded stories to be rendered in top10
        const top10Stories = [];
        // add the stories you want to appear in top10
        top10Stories.push(data.all[4]);
        top10Stories.push(data.all[14]);
        top10Stories.push(data.all[58]);
        top10Stories.push(data.all[43]);
        top10Stories.push(data.all[29]);
        top10Stories.push(data.all[0]);
        top10Stories.push(data.all[35]);
        top10Stories.push(data.all[41]);
        top10Stories.push(data.all[55]);
        top10Stories.push(data.all[20]);
        setTop10List(top10Stories);

        // random, hard-coded stories to be rendered in "popular in your area"
        const popularInAreaStories = [];
        // add the stories you want to appear in "popular in your area"
        popularInAreaStories.push(data.all[51]);
        popularInAreaStories.push(data.all[43]);
        popularInAreaStories.push(data.all[14]);
        popularInAreaStories.push(data.all[29]);
        popularInAreaStories.push(data.all[36]);
        setPopularInAreaList(popularInAreaStories);

        // random, hard-coded stories to be rendered in "recently added"
        const recentStories = [];
        // add the stories you want to appear in "recently added"
        recentStories.push(data.all[0]);
        recentStories.push(data.all[11]);
        recentStories.push(data.all[42]);
        recentStories.push(data.all[3]);
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
    <StoryCard key={story._id} id={story._id} title={story.title} author={story.author} imgUrl={story.imgUrl} rating={story.rating} slug={story.slug} categories={story.categories+''} />
  );

  const popularInAreaCategory = popularInAreaList.map(story =>
    <StoryCard key={story._id} id={story._id} title={story.title} author={story.author} imgUrl={story.imgUrl} rating={story.rating} slug={story.slug} categories={story.categories+''} />
  );

  const recentCategory = recentList.map(story =>
    <StoryCard key={story._id} id={story._id} title={story.title} author={story.author} imgUrl={story.imgUrl} rating={story.rating} slug={story.slug} categories={story.categories+''} />
  );

  const allListCategory = allList.map(story =>
    <StoryCard key={story._id} id={story._id} title={story.title} author={story.author} imgUrl={story.imgUrl} rating={story.rating} slug={story.slug} categories={story.categories+''} />
  );

  const mysteryListCategory = mysteryList.map(story =>
    <StoryCard key={story._id} id={story._id} title={story.title} author={story.author} imgUrl={story.imgUrl} rating={story.rating} slug={story.slug} categories={story.categories+''} />
  );

  const eroticListCategory = eroticList.map(story =>
    <StoryCard key={story._id} id={story._id} title={story.title} author={story.author} imgUrl={story.imgUrl} rating={story.rating} slug={story.slug} categories={story.categories+''} />
  );
  
    const romanceListCategory = romanceList.map(story =>
      <StoryCard key={story._id} id={story._id} title={story.title} author={story.author} imgUrl={story.imgUrl} rating={story.rating} slug={story.slug} categories={story.categories+''} />
    );

  const scifiListCategory = scifilist.map(story =>
    <StoryCard key={story._id} id={story._id} title={story.title} author={story.author} imgUrl={story.imgUrl} rating={story.rating} slug={story.slug} categories={story.categories+''} />
  );


  return (
    <>
      <h2 style={{color:'#cc8e35'}} >Top 10:</h2>
      <Carousel responsive={responsive} draggable={false} /* infinite={true}  */removeArrowOnDeviceType={['mobile']} containerClass="carousel-container">
        {top10Category}
      </Carousel>

      <h2 style={{color:'#cc8e35'}} >Popular in your area:</h2>
      <Carousel responsive={responsive} draggable={false} infinite={true} removeArrowOnDeviceType={['mobile']} containerClass="carousel-container">
        {popularInAreaCategory}
      </Carousel>

      <h2 style={{color:'#cc8e35'}} >Recently added stories:</h2>
      <Carousel responsive={responsive} draggable={false} infinite={true} removeArrowOnDeviceType={['mobile']} containerClass="carousel-container">
        {recentCategory}
      </Carousel>

      <h2 style={{color:'#cc8e35'}} >All Stories:</h2>
      <Carousel responsive={responsive} draggable={false} infinite={true} removeArrowOnDeviceType={['mobile']} containerClass="carousel-container">
        {allListCategory}
      </Carousel>

      <h2 style={{color:'#cc8e35'}}>Mystery/Crime:</h2>
      <Carousel responsive={responsive} draggable={false} infinite={true} removeArrowOnDeviceType={['mobile']} containerClass="carousel-container">
        {mysteryListCategory}
      </Carousel>

      <h2 style={{color:'#cc8e35'}}>Erotic:</h2>
      <Carousel responsive={responsive} draggable={false} infinite={true} removeArrowOnDeviceType={['mobile']} containerClass="carousel-container">
        {eroticListCategory}
      </Carousel>

      <h2 style={{color:'#cc8e35'}}>Romance:</h2>
      <Carousel responsive={responsive} draggable={false} infinite={true} removeArrowOnDeviceType={['mobile']} containerClass="carousel-container">
        {romanceListCategory}
      </Carousel>

      <h2 style={{color:'#cc8e35'}}>Science Fiction:</h2>
      <Carousel responsive={responsive} draggable={false} infinite={true} removeArrowOnDeviceType={['mobile']} containerClass="carousel-container">
        {scifiListCategory}
      </Carousel>
    </>
    
  );
}

// draggable=false disables dragging on desktop
// infinite=true makes it infinite, it does NOT jump back to the beginning when clicking "next" at the last item
// centerMode={true} shows a bit of the next/prev cards on the side of the screen