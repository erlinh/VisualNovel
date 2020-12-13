import React, {useState} from 'react';
import { Button } from 'reactstrap';
import instance from '../../axios';

export default function SearchBox(props) {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchboxInputChange = (event) => {
    // console.log('new search value is: ' + event.target.value);
    setSearchInput(event.target.value);
  };
  
  const searchByPhrase = async (phrase) => {
    //console.log('trying to look for: ' + phrase);
      
    try {
      // get the stories
      const response = await instance.get(`/search/${phrase}`);
      const foundStories = response.data;
      // console.log(searchInput, foundStories);

      // pass them to parent component - SearchPage
      props.passDataToPage(searchInput, foundStories);
    } catch (error) {
      console.log(`error when trying to search for "${phrase}": ` + error.message);
    }
  };
    
  const submitSearchForm = (e) => {
    e.preventDefault();
    searchByPhrase(searchInput);
  };
  return (
    <div className="searchbox">
      <form onSubmit={submitSearchForm}>
        <input type="text" onChange={handleSearchboxInputChange}/>
        <Button color="primary" type="submit">Search</Button>
      </form>
    </div>
  );
}
