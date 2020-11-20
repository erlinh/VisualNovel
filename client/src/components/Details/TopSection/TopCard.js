import React, {useState, useEffect} from 'react';
import '../TopSection/TopCard.css';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const TopCard =({id, title, author, rating, slug, categories})=>{
  
  return(
    <div className="media body topSection__bg">
      <div className="container">
        <div className="topSection__row text-light">
          <div className="topSection__CardImg ">
            <img src="https://picsum.photos/250/350" alt="img"/>
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
            <h6 className="mt-0 pb-3"> IMBD: <i className="fas fa-star" style={{color:'yellow'}}></i> <i className="fas fa-star" style={{color:'yellow'}}>

            </i> <i className="fas fa-star" style={{color:'yellow'}}></i></h6>
            <Button style={{backgroundColor:'red', borderRadius:'15px',marginRight:'5px'}}><Link to="/text" className="linkToText">Read More</Link></Button>
            <Button style={{backgroundColor:'black', borderRadius:'15px',marginRight:'5px'}}>Info</Button>
            <Button style={{backgroundColor:'blue', borderRadius:'15px',marginRight:'5px'}}>Buy</Button>
              
          </div>
        </div>
      </div>
    </div>
     

  );  
};

export default TopCard;