import React from 'react';
import BrowsingGrid from '../components/BrowsingGrid/BrowsingGrid';
import './LandingPage.css';
import FooterGrid from '../components/Footer/FooterGrid';
import NavBar from '../components/NavBar/NavBar';

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <div style={{minHeight:'90vh'}} className="container col-lg-10">
        <BrowsingGrid />
        <div className="bg-danger">
          <hr />
        </div>
      </div>
      <div className="col-lg-12">
        <FooterGrid/>
      </div>
    </>
  );
}
