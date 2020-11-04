import React, {useState} from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';

export default function SearchBox() {
    const [searchInput, setSearchInput] = useState('');

    const handleSearchboxInputChange = (event) => {
      console.log('new search value is: ' + event.target.value);
      setSearchInput(event.target.value);
    };
  
    const searchByPhrase = async (phrase) => {
      console.log('trying to look for: ' + phrase);

      try {
        const foundStories = await axios.get(`${process.env.REACT_APP_API_URL}/stories`);
        console.log(foundStories);
      } catch (error) {
        console.log('error when trying to search: ' + error.message);
      }
    };

  return (
    <div className="searchbox">
      <input type="text" onChange={handleSearchboxInputChange}/>
      <Button color="primary" onClick={() => searchByPhrase(searchInput)}>Search</Button>
    </div>
  );
}
