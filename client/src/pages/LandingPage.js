import React, {useState} from 'react';
import NavBar from '../components/NavBar/NavBar';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import BrowsingGrid from '../components/BrowsingGrid/BrowsingGrid';
import { Jumbotron } from 'reactstrap';
import './LandingPage.css';

export default function LandingPage() {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchboxInputChange = (event) => {
    console.log('new search value is: ' + event.target.value);
    setSearchInput(event.target.value);
  };

  const searchByPhrase = (phrase) => {
    console.log('trying to look for: ' + phrase);
  };


  return (
    <>
      <NavBar searchInputOnChange={handleSearchboxInputChange} searchPhrase={searchInput} triggerSearch={() => searchByPhrase(searchInput)}/>
      <Jumbotron>
        <h1>This is the landing page. Includes all the components that belong to the landing page.</h1>
        <HeroBanner name={'Reader'}/>
      </Jumbotron>
      <BrowsingGrid />
    </>
  );
}
