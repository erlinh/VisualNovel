import React from 'react';
import StoryCards from './StoryCards/StoryCards';

import './BrowsingGrid.css';

// import {Col, Row} from 'reactstrap';

export default function BrowsingGrid() {
  return (
    <div className="browsing-grid-wrapper">
      <StoryCards/>
    </div>
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