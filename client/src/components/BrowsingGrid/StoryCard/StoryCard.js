import React from 'react';
import { Link} from 'react-router-dom';
import {
  Card,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import './StoryCard.css';

const overlayOn = (id) => {
  document.getElementById(id).style.display = "grid";
}

const overlayOff = (id) => {
  document.getElementById(id).style.display = "none";
}

const StoryCard=({id, title, author, imgUrl, rating, slug, categories})=> {
  return (
    <Card style={{width: '300px', height:'460px', backgroundColor:'black', borderRadius:'5px', border:'1px #1e272e solid', lineHeight:'1.2'}} 
      className="p-2 mr-5 text-light">
      <img className="pb-3" src={imgUrl} alt="Cover of the story" onClick={() => overlayOn(id)}/>
     
      <div id={id} onClick={() => overlayOff(id)} className="overlay">
        <img className="overlayImg" src={imgUrl} alt="Cover of the story"/>         
        <CardTitle style={{fontSize:'2rem'}}>{title}</CardTitle>
        <CardSubtitle>By {author}</CardSubtitle>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis elementum nulla ac pulvinar. Proin facilisis malesuada erat, sit amet semper mauris finibus id. Vivamus vitae ex quis nulla viverra.</p>
        <p>Rating: {rating}/5</p>        
        <p>Categories: {categories}</p>
      
        <Link to= {`/stories/${slug}`}>
          <Button className="getDetails">Get Details</Button>
        </Link>
        
      </div>
     
    </Card>
  );
};
export {
  StoryCard
};
