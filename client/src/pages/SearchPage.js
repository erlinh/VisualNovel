import React, { useState } from 'react';
import SearchBox from '../components/SearchBox/SearchBox';
import SearchResults from '../components/SearchResults/SearchResults';

export default function SearchPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [foundStories, setFoundStories] = useState([]);

    const handleDataFromChild = (searchTerm, stories) => {
        setSearchTerm(searchTerm);
        setFoundStories(stories);
    }

    return (
        <div className="container col-lg-10 mt-5 pt-5">
            <h2>Search</h2>
            <SearchBox passDataToPage={handleDataFromChild} />
            <SearchResults searchTerm={searchTerm} searchResults={foundStories} />
        </div>
    )
}
