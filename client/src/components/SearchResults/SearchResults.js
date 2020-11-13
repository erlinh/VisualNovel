import React from 'react';

export default function SearchResults({searchTerm, searchResults}) {
    // console.log(searchResults);

    const storiesToDisplay = searchResults.map(story => {
        return (
        <div key={story.slug}>
            id={story.slug} author={story.author} title={story.title}
        </div>)
    })


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
    )
}
