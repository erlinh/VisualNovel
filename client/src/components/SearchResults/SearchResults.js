import React from 'react';
import { Link} from 'react-router-dom';
import { Button , Card } from 'reactstrap';
import './SearchResults.css';
 

export default function SearchResults({searchTerm, searchResults}) {
  // console.log(searchResults);

  const storiesToDisplay = searchResults.map(story => {
    return (
      <div key={story.slug} className="search-res-card mb-2 d-flex">
        <img src={story.imgUrl} alt="book cover" />
        <div className="pl-3">
          <h3>{story.title}</h3>
          <p>By {story.author}</p>
          <p>Rating: {story.rating}/5</p>
          <Link to= {`/stories/${story.slug}`}>
            <Button color="primary">Read More</Button>
          </Link>
        </div>
      </div>);
  });


  return (
    <div>
      {searchResults.length === 0 ?
        <h4>No search results.</h4>
        :
        <div>
          <h4>We found {searchResults.length} items for "{searchTerm}":</h4>
          {storiesToDisplay}
        </div>
      }
    </div>
  );
}
