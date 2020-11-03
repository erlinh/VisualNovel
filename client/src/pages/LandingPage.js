import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import BrowsingGrid from '../components/BrowsingGrid/BrowsingGrid';
import { Jumbotron } from 'reactstrap';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <Jumbotron>
        <h1>This is the landing page. Includes all the components that belong to the landing page.</h1>
        <HeroBanner name={'Reader'}/>
      </Jumbotron>
      <BrowsingGrid />
    </>
  );
}
