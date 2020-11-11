import React from 'react';
import { Link} from "react-router-dom"
import {
  Card,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import './StoryCard.css';

const StoryCard=({id, title, author, rating, slug, categories})=> {
  return (
    <Card style={{width: "300px", height:"450px", backgroundColor:"#130f40"}} className="p-2 text-light">
    <img className="pb-3" src="https://picsum.photos/150" alt="img" />
      <CardTitle style={{fontSize:"2rem"}}>{title}</CardTitle>
      <CardSubtitle>By {author}</CardSubtitle>
      <p>This is a story card.</p>
      <p>ID: {id}</p>
      <p>Rating: {rating}/5</p>
      <p>Categories: {categories}</p>
      <Link to= {`/stories/${slug}`}>
           <Button className="btn-danger">Read More</Button>
      </Link>
     
    </Card>
  );
}
export {
  StoryCard
}
