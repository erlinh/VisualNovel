import React from 'react';
import { Link} from 'react-router-dom';
import { Button} from 'reactstrap';
import './SearchResults.css';
 

export default function SearchResults({searchTerm, searchResults}) {
  // console.log(searchResults);

  const storiesToDisplay = searchResults.map(story => {
    return (
      <div key={story.slug} className="search-res-card mb-2 d-flex">
        <img src={story.imgUrl} alt="book cover" />
        <div className="pl-3">
          <h4>{story.title}</h4>
          <p>By {story.author}</p>
          <p>Rating: {story.rating}/5</p>
          <Link to= {`/stories/${story.slug}`}>
            <Button className="topSection__button">Read More</Button>
          </Link>
        </div>
      </div>);
  });
  return (
    <div className="col-lg-10 col-sm-12 mx-auto">
      {searchResults.length === 0 ?
        <p>No search results.</p>
        :
        <div >
          <p>We found {searchResults.length} items for "{searchTerm}":</p>
          {storiesToDisplay}
        </div>
      }
    </div>
  );
}
