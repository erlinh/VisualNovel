import React from 'react';
import StoryCards from './StoryCards/StoryCards';
import './BrowsingGrid.css';

// import {Col, Row} from 'reactstrap';

export default function BrowsingGrid() {
  return (
    <>
      <div>
        <StoryCards  />
      </div>

      {/* <div>
        <h3>Fantasy:</h3>
        <StoryCards category="fantasy"/>
      </div>

      <div>
        <h3>Animation:</h3>
        <StoryCards category="animation"/>
      </div>
      <div>
        <h3>Cartoons:</h3>
        <StoryCards category="cartoon"/>
      </div>*/}


      {/* <div>
        <h3>Action:</h3>
        <StoryCards category="action"/>
      </div> */}

     {/* <div>
        <h3>Kids</h3>
        <StoryCards categories ="kids"/>
      </div>   */}
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