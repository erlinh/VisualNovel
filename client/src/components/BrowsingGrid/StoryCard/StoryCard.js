import React from 'react';
//mport ButtonReadMore from '../../Details/TopSection/Buttons';
import {
  Card,
  CardTitle, CardSubtitle
} from 'reactstrap';
import './StoryCard.css';

export default function StoryCard({id, title, author, rating, categories, ButtonReadMore}) {
  return (
    <Card/*  style={{width: "100px"}} className="mx-3" */>
      <CardTitle>Title: {title}</CardTitle>
      <CardSubtitle>By {author}</CardSubtitle>
      <p>This is a story card.</p>
      <p>ID: {id}</p>
      <p>Rating: {rating}/5</p>
      
      {/* <p>Categories: {categories}</p> */}
    </Card>
  );
}
