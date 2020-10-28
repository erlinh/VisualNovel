import React from 'react';
import StoryCards from './StoryCards/StoryCards';


// import {Col, Row} from 'reactstrap';

export default function BrowsingGrid() {
  return (
    <>
      <div>
        <h3>All Stories:</h3>
        <StoryCards category="all"/>
      </div>

      <div>
        <h3>Fantasy:</h3>
        <StoryCards category="fantasy"/>
      </div>

      <div>
        <h3>Timeless Classics:</h3>
        <StoryCards category="classics"/>
      </div>

      <div>
        <h3>Teen Literature:</h3>
        <StoryCards category="teen"/>
      </div>

      <div>
        <h3>For Children:</h3>
        <StoryCards category="children"/>
      </div>
    </>
  );
}

{/* <Row>
  <Col xs="3"><StoryCard /></Col>
  <Col xs="3"><StoryCard /></Col>
  <Col xs="3"><StoryCard /></Col>
  <Col xs="3"><StoryCard /></Col>
</Row>
<Row>
  <Col xs="3"><StoryCard /></Col>
  <Col xs="3"><StoryCard /></Col>
  <Col xs="3"><StoryCard /></Col>
  <Col xs="3"><StoryCard /></Col>
</Row> */}