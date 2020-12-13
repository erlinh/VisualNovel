import React from 'react';
import '../TopSection/TopCard.css';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const TopCard =({title, author, imgUrl, rating, slug, categories})=>{
  
  return(
    <div className="media body topSection__bg ">
      <div className="container">
        <div className="topSection__row text-light">
          <div className="topSection__CardImg ">
            <img src={imgUrl} alt="Book cover"/>
            <Link to={`/stories/${slug}/content`} className="linkToText topSection__button pt-2 text-center"><Button style={{backgroundColor:'green', borderRadius:'15px',marginRight:'5px'}}>Read More</Button></Link>
          </div>

          <div className="media-body topSection__p">
            <h5 className="mt-0">{title}</h5>
            <p> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
            </p>
            <h6 className="mt-0">Author:{author}</h6>
            <p> Cras sit amet nibh libero.
            </p>
            <h6 className="mt-0">Description</h6>
            <p> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                  Cras purus odio, vestibulum in vulputate at, 
                  tempus viverra turpis. 
                  Fusce condimentum nunc ac nisi vulputate fringilla. 
            </p>
            <h6 className="mt-0">Categories:{categories}</h6>
            <p> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
            </p>
            <h6 className="mt-0 pb-3"> rating:{rating} /5</h6>
            <Link to={`/stories/${slug}/content`} className="linkToText"><Button style={{backgroundColor:'green', borderRadius:'15px',marginRight:'5px'}}>Read More</Button></Link>
            
              
          </div>
        </div>
      </div>
    </div>
     

  );  
};

export default TopCard;