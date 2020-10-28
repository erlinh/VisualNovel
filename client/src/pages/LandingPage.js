import React from 'react';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import BrowsingGrid from '../components/BrowsingGrid/BrowsingGrid';
import { Jumbotron } from 'reactstrap';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div>
      <Jumbotron>
        <h1>this is landing page. Includes all the components belongs to landing page</h1>
        <HeroBanner name={'Reader'}/>
      </Jumbotron>
      <BrowsingGrid />
    </div>
  );
}
