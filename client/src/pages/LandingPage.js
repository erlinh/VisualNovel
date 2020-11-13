import React from 'react';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import BrowsingGrid from '../components/BrowsingGrid/BrowsingGrid';
import Navbar from '../components/NavBar/Navbar';
import { Jumbotron } from 'reactstrap';
import './LandingPage.css';
import FooterGrid from '../components/Footer/FooterGrid';

export default function LandingPage() {
  return (
    <div className="container col-lg-10">
      <Navbar/>
      <Jumbotron>
        {/* <h1>This is the landing page. Includes all the components that belong to the landing page.</h1> */}
        <HeroBanner name={'Reader'}/>
      </Jumbotron>
      <BrowsingGrid />
      <FooterGrid/>
  
    </div>
  );
}
