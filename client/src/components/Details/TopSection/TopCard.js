import React from 'react';
import {ButtonInfo, ButtonReadMore, ButtonBuy} from './Buttons';
import '../TopSection/TopCard.css';
const TopCard =()=>{
  return(
    <>
      <div className="media body topSection__bg">
        <div className="container">
          <div className="topSection__row text-light">
            <div className="topSection__CardImg ">
              <img src="https://via.placeholder.com/250x350" alt="img"/>
            </div>
            <div className="media-body topSection__p">
              <h5 className="mt-0">Title of the Book</h5>
              <p> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
              </p>
              <h6 className="mt-0">Author</h6>
              <p> Cras sit amet nibh libero.
              </p>
              <h6 className="mt-0">Description</h6>
              <p> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    Cras purus odio, vestibulum in vulputate at, 
                    tempus viverra turpis. 
                    Fusce condimentum nunc ac nisi vulputate fringilla. 
              </p>
              <h6 className="mt-0">Categories</h6>
              <p> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
              </p>
              <h6 className="mt-0 pb-3"> rating: 4.5 </h6>
              <h6 className="mt-0 pb-3"> IMBD: <i className="fas fa-star" style={{color:'yellow'}}></i> <i className="fas fa-star" style={{color:'yellow'}}>

              </i> <i className="fas fa-star" style={{color:'yellow'}}></i></h6>

              <ButtonInfo  />
              <ButtonReadMore />
              <ButtonBuy />
                
            </div>
          </div>
        </div>
      </div>
       
    </>
  );
};

export default TopCard;