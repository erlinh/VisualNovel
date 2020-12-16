import React, { useState } from 'react';
import SearchBox from '../components/SearchBox/SearchBox';
import SearchResults from '../components/SearchResults/SearchResults';
import NavBar from '../components/NavBar/NavBar';
import FooterGrid from '../components/Footer/FooterGrid';
import './SearchPage.css';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [foundStories, setFoundStories] = useState([]);

  const handleDataFromChild = (searchTerm, stories) => {
    setSearchTerm(searchTerm);
    setFoundStories(stories);
  };

  return (
    <div className="container col-lg-12 mt-5 pt-4">
      <NavBar/>
      <div style={{minHeight:'80vh'}}>
        <SearchBox passDataToPage={handleDataFromChild} />
        <SearchResults searchTerm={searchTerm} searchResults={foundStories} />
      </div>
      <div className="searchPage__hr">
        <hr />
      </div>
      <FooterGrid/>
    </div>
  );
}
