import React, {useState, useEffect} from 'react';
import instance from '../axios';
import TopCard from '../components/Details/TopSection/TopCard';
import {useParams} from 'react-router-dom';
import FooterGrid from '../components/Footer/FooterGrid';
import NavBar from '../components/NavBar/NavBar';
import CarouselLists from '../components/Details/MiddleSection/CarouselLists';
 

const DetailsPage=()=>{
   
  const[storiesDetails, setStoriesDetails]=useState([]);
  const [loading, setLoading]=useState(false);
  const slug= useParams().slug;
  useEffect(() => {
    async function fetchData () {
    
      try { 
        setLoading(true);
        const {data} = await instance.get(`/stories/${slug}`);
        //console.log(data);
        setStoriesDetails(data);
        setLoading(false);
        
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();

  },[slug]);

  if(loading){
    return (
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border text-success" role="status">
              <span className="sr-only">Loading...</span>
          </div>
        </div>);
  }else{
    return(
      <>
        <NavBar/>
        <div className="col-lg-11 container">
          <TopCard key={storiesDetails._id} id={storiesDetails._id} title={storiesDetails.title} author={storiesDetails.author} imgUrl={storiesDetails.imgUrl} content={storiesDetails.content} rating={storiesDetails.rating} slug={storiesDetails.slug} categories={storiesDetails.categories+''} />
          <CarouselLists />
          <div className="bg-danger">
            <hr />
          </div>
          <FooterGrid />
        </div>
       
      </>
    );
  }
  
};

export default DetailsPage;