import React from 'react';
import { Link} from 'react-router-dom';
import './Middle.css';

const CarouselCard=({imgUrl, slug})=>{
  return(
    <>

      <Link to= {`/stories/${slug}`}>
        <img className="carouselcard" src={imgUrl} alt="Cover of the story" />
      </Link>
     
    
    </>
  );
};

export default CarouselCard;