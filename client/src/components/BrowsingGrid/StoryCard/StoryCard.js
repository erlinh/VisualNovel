import React from 'react';
import { Link} from 'react-router-dom';
import {
  Card,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import './StoryCard.css';

const overlayOn = () => {
  document.getElementById("overlay").style.display = "grid";
}

const overlayOff = () => {
  document.getElementById("overlay").style.display = "none";
}

const StoryCard=({id, title, author, imgUrl, rating, slug, categories})=> {
  return (
    <Card style={{width: '300px', height:'460px', backgroundColor:'black', borderRadius:'5px', border:'1px #1e272e solid', lineHeight:'1.2'}} 
      className="p-2 mr-5 text-light">
      
      <img className="pb-3" src={imgUrl} alt="Cover of the story" onClick={overlayOn}/>
      {/* <CardTitle style={{fontSize:'2rem'}}>{title}</CardTitle>
      <CardSubtitle>By {author}</CardSubtitle>
      <p>Rating: {rating}/5</p>
      <p>Categories: {categories}</p>
     
      <Link to= {`/stories/${slug}`}>
        <Button className="getDetails">Get Details</Button>
      </Link> */}
      <div id="overlay" onClick={overlayOff}>        
        <CardTitle style={{fontSize:'2rem'}}>{title}</CardTitle>
        <CardSubtitle>By {author}</CardSubtitle>
        <p>Rating: {rating}/5</p>
        <p>Categories: {categories}</p>
      
        <Link to= {`/stories/${slug}`}>
          <Button className="getDetails">Get Details</Button>
        </Link>
        {/* <Button className="btnClose" onClick={overlayOff}>Close</Button> */}
      </div>
     
    </Card>
  );
};
export {
  StoryCard
};
