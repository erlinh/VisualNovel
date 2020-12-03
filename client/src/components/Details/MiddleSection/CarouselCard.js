import React from 'react';
import { Link} from 'react-router-dom';

const CarouselCard=({imgUrl, slug})=>{
  return(
    <>

      <Link to= {`/stories/${slug}`}>
        <img style={{maxHeight:'250px', minWidth:'200px'}} src={imgUrl} alt="Cover of the story" />
      </Link>
     
    
    </>
  );
};

export default CarouselCard;