import React, {useState, useEffect} from 'react';
import instance from '../axios';
import TopCard from '../components/Details/TopSection/TopCard';
import CarouselCard from '../components/Details/MiddleSection/CarouselCard';
import EpisodeCard from '../components/Details/MiddleSection/EpisodeCard';
import {useParams} from 'react-router-dom';
import FooterGrid from '../components/Footer/FooterGrid';
import NavBar from '../components/NavBar/NavBar';

const DetailsPage=()=>{
   
  const[storiesDetails, setStoriesDetails]=useState([]);
  const slug= useParams().slug;
  useEffect(() => {
    async function fetchData () {
      try { 
        const {data} = await instance.get(`/stories/${slug}`);
        console.log(data);
        setStoriesDetails(data);
        
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();

  },[slug]);

  return(
    <>
      <NavBar/>
      <TopCard key={storiesDetails._id} id={storiesDetails._id} title={storiesDetails.title} author={storiesDetails.author} imgUrl={storiesDetails.imgUrl} content={storiesDetails.content} rating={storiesDetails.rating} slug={storiesDetails.slug} categories={storiesDetails.categories+''} />
      {/* <EpisodeCard episode=" One"/>
      <EpisodeCard episode=" Two"/>
      <EpisodeCard episode=" Three"/>
      <EpisodeCard episode=" Four"/> */}
      {/* <CarouselCard /> */}
      <div className="col-lg-10 container">
        <div className="bg-danger">
          <hr />
        </div>
        <FooterGrid />
      </div>
     
    </>
  );
};

export default DetailsPage;