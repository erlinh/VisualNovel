import React, { useState } from 'react';
import SearchBox from '../components/SearchBox/SearchBox';
import SearchResults from '../components/SearchResults/SearchResults';
import NavBar from '../components/NavBar/NavBar';
import FooterGrid from '../components/Footer/FooterGrid';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [foundStories, setFoundStories] = useState([]);

  const handleDataFromChild = (searchTerm, stories) => {
    setSearchTerm(searchTerm);
    setFoundStories(stories);
  };

  return (
    <div className="container col-lg-10 mt-5 pt-5">
      <NavBar/>
      <h2>Search</h2>
      <SearchBox passDataToPage={handleDataFromChild} />
      <SearchResults searchTerm={searchTerm} searchResults={foundStories} />

      <div className="bg-danger">
        <hr />
      </div>
      <FooterGrid/>
    </div>
  );
}
