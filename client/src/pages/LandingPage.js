import React from 'react';
import BrowsingGrid from '../components/BrowsingGrid/BrowsingGrid';
import './LandingPage.css';
import FooterGrid from '../components/Footer/FooterGrid';
import NavBar from '../components/NavBar/NavBar';

export default function LandingPage() {
  return (
      
    <div className="container col-lg-10">
      <NavBar />
      <BrowsingGrid />
      <div className="bg-danger">
        <hr />
      </div>
      <FooterGrid/>
      
    </div>
  );
     
 
}
