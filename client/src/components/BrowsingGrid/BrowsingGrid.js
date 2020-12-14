import React, { useState, useEffect } from 'react';
import StoryCards from './StoryCards/StoryCards';
import instance from '../../axios';
import './BrowsingGrid.css';

export default function BrowsingGrid() {
  const[loading, setLoading]=useState(false);
  const [wholeBooksObject, setWholeBooksObject]= useState({
    all: [],
    erotic: [],
    mystery: [],
    romance: [],
    scifi: []
  });

  const [top10, setTop10] = useState([]);
  const [popularInArea, setPopularInArea] = useState([]);
  const [recent, setRecent] = useState([]);
  const [search, setSearch]=useState('');

  useEffect(() => {
    async function fetchData () {
      try {
        setLoading(true);
        const {data} = await instance.get('/stories');
        //console.log(data);
        setWholeBooksObject(data);
        setLoading(false);

        // random, hard-coded stories to be rendered in top10
        const top10Stories = [];
        // add the stories you want to appear in top10
        top10Stories.push(data.all[4], data.all[14], data.all[58], data.all[43], data.all[29], data.all[0], data.all[35], data.all[41], data.all[55], data.all[20]);
        setTop10(top10Stories);

        // random, hard-coded stories to be rendered in "popular in your area"
        const popularInAreaStories = [];
        // add the stories you want to appear in "popular in your area"
        popularInAreaStories.push(data.all[51], data.all[43], data.all[14], data.all[29], data.all[36]);
        setPopularInArea(popularInAreaStories);

        // random, hard-coded stories to be rendered in "recently added"
        const recentStories = [];
        // add the stories you want to appear in "recently added"
        recentStories.push(data.all[0], data.all[11], data.all[42], data.all[3]);
        setRecent(recentStories);

      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  },[]);

  if(loading){
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-light" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  function InputChangeOnSearch(e){
    return(
      setSearch (e.target.value)
    ); 
  }

  const filteredStories = wholeBooksObject.all.filter(story=>{
    return(
      story.title.toLowerCase().includes(search.toLowerCase()) +
      story.author.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <>
      <div style={{backgroundColor:'black'}}>
        <div className="search__bar">
          <input type="text" placeholder="Search story..." 
            onChange={InputChangeOnSearch}/>
        </div>
        {search?<div>
          <h5 style={{color:'#cc8e35'}} >Avaliable Stories:</h5>{!search==filteredStories?<p className="text-light">No story with that search</p>:null}
          <StoryCards booksOfCategory={filteredStories} />
        </div>:null}
        <hr className="bg-danger"/>
        <div>
          <h5 style={{color:'#cc8e35'}} >Top 10:</h5>
          <StoryCards booksOfCategory={top10} />
        </div>

        <div>
          <h5 style={{color:'#cc8e35'}} >Popular in Your Area:</h5>
          <StoryCards booksOfCategory={popularInArea} />
        </div>
  
        <div>
          <h5 style={{color:'#cc8e35'}} >Recent Stories:</h5>
          <StoryCards booksOfCategory={recent} />
        </div>

        <div>
          <h5 style={{color:'#cc8e35'}} >All Stories:</h5>
          <StoryCards booksOfCategory={wholeBooksObject.all} />
        </div>

        <div>
          <h5 style={{color:'#cc8e35'}} >Mystery:</h5>
          <StoryCards booksOfCategory={wholeBooksObject.mystery} />
        </div>

        <div>
          <h5 style={{color:'#cc8e35'}} >Sci-fi:</h5>
          <StoryCards booksOfCategory={wholeBooksObject.scifi} />
        </div>

        <div>
          <h5 style={{color:'#cc8e35'}} >Romance:</h5>
          <StoryCards booksOfCategory={wholeBooksObject.romance} />
        </div>

        <div>
          <h5 style={{color:'#cc8e35'}} >Erotic:</h5>
          <StoryCards booksOfCategory={wholeBooksObject.erotic} />
        </div>
      </div>
    </>
  );
}