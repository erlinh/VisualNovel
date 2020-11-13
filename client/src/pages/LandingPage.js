import React from 'react';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import BrowsingGrid from '../components/BrowsingGrid/BrowsingGrid';
import { Jumbotron } from 'reactstrap';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className="container col-lg-10">
      <Jumbotron>
        {/* <h1>This is the landing page. Includes all the components that belong to the landing page.</h1> */}
        <HeroBanner name={'Reader'}/>
      </Jumbotron>
      <BrowsingGrid />
    </div>
  );
}
