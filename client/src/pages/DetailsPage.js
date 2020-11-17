import React, {useState, useEffect} from 'react';
import instance from '../axios';
import TopCard from '../components/Details/TopSection/TopCard';
import EpisodeCard from '../components/Details/MiddleSection/EpisodeCard';
import NavBar from '../components/NavBar/NavBar';
import {useParams} from 'react-router-dom';
import FooterGrid from '../components/Footer/FooterGrid';

const DetailsPage=()=>{
   
  const[storiesDetails, setStoriesDetails]=useState([]);
  const slug= useParams().slug;
  useEffect(() => {
    async function fetchData () {
      try {
        const {data} = await instance.get(`/stories/${slug}`);
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
      <TopCard key={storiesDetails._id} id={storiesDetails._id} title={storiesDetails.title} author={storiesDetails.author} rating={storiesDetails.rating} slug={storiesDetails.slug} categories={storiesDetails.categories+''} />
      <EpisodeCard episode=" One"/>
      <EpisodeCard episode=" Two"/>
      <EpisodeCard episode=" Three"/>
      <EpisodeCard episode=" Four"/>
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