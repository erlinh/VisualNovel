import React from 'react';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import BrowsingGrid from '../components/BrowsingGrid/BrowsingGrid';

export default function LandingPage() {
  return (
    <div>
      <h1>this is landing page. Includes all the components belongs to landing page</h1>
      <HeroBanner />
      <BrowsingGrid />
    </div>
  );
}
