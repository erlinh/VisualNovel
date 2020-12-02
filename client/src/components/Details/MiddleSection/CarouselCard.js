import React from 'react';
import { Link} from 'react-router-dom';
import {
  Card,
} from 'reactstrap';
 


const CarouselCard=({id, imgUrl, slug})=>{
    return(
        <>
        {/* <Card style={{ backgroundColor:'white', borderRadius:'5px', border:'1px #1e272e solid', lineHeight:'1.2', alignItems:"center"}} 
                    className="p-2 mr-5 text-light"> */}
                <Link to= {`/stories/${slug}`}>
                <img className="pb-3" style={{maxHeight:"250px", minWidth:"200px"}} src={imgUrl} alt="Cover of the story" />
                </Link>
     
        {/* </Card> */}
        </>
    )
}

export default CarouselCard;