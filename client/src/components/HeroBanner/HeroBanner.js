import React from 'react';
import { Jumbotron } from 'reactstrap';

export default function HeroBanner({name}) {
  return (
    <div className=" container">
    <Jumbotron>
      <h1>Welcome, {name}! <br /> The Story of your choice</h1>
      </Jumbotron>
    </div>
  );
}
