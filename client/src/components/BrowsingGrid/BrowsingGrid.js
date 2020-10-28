import React from 'react';
import StoryCards from './StoryCards/StoryCards';

import './BrowsingGrid.css';

// import {Col, Row} from 'reactstrap';

export default function BrowsingGrid() {
  return (
    <>
      <h3>All Stories:</h3>
      <div className="browsing-grid-wrapper">
        <StoryCards category="all"/>
      </div>

      <h3>Fantasy:</h3>
      <div className="browsing-grid-wrapper">
        <StoryCards category="fantasy"/>
      </div>

      <h3>Timeless Classics:</h3>
      <div className="browsing-grid-wrapper">
        <StoryCards category="classics"/>
      </div>

      <h3>Teen Literature:</h3>
      <div className="browsing-grid-wrapper">
        <StoryCards category="teen"/>
      </div>

      <h3>For Children:</h3>
      <div className="browsing-grid-wrapper">
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