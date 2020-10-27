import React from 'react';

import {
  Card,
  CardTitle, CardSubtitle
} from 'reactstrap';

export default function StoryCard({id, title, author, rating, categories}) {
  return (
    <Card>
      <CardTitle>Title: {title}</CardTitle>
      <CardSubtitle>By {author}</CardSubtitle>
      <p>This is a story card.</p>
      <p>ID: {id}</p>
      <p>Rating: {rating}/5</p>
      <p>Categories: {categories}</p>
    </Card>
  );
}
