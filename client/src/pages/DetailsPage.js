import React, {useState, useEffect} from 'react';
import axios from 'axios';
import instance from '../axios';
import TopCard from '../components/Details/TopSection/TopCard';
import EpisodeCard from '../components/Details/MiddleSection/EpisodeCard';
import NavBar from '../components/NavBar/Navbar';


const DetailsPage=()=>{
   //const [storiesList, setStoriesList]= useState([]);
   const[storiesList, setStoriesList]=useState([]);
   const [slug, setSlug]=useState([]);

   useEffect(() => {
     async function fetchData () {
       try {
    
     const {data} = await instance.get("/stories/:slug");
     //console.log(data);
     setStoriesList(data.all);
     setSlug(data.slug)
     console.log(setSlug);
     } catch (err) {
         console.log(err);
     }
     }
     fetchData();
     
   },[])

  return(
    <>
    <NavBar/>
    {/* <TopCard key={story._id} id={story._id} title={story.title} author={story.author} rating={story.rating} slug={story.slug} categories={story.categories+''} /> */}

    <TopCard setSlug={setSlug}/>
    <EpisodeCard episode=" One"/>
    <EpisodeCard episode=" Two"/>
    <EpisodeCard episode=" Three"/>
    <EpisodeCard episode=" Four"/>
    </>
  )
};

export default DetailsPage;