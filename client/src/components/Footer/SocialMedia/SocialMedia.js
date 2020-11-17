import React from 'react';
import {Link} from 'react-router-dom';
 
const SocialMedia=()=>{
  return(
    <div className="col col-md-auto mr-md-8 ">
      <p className="font-heading">Get Social</p>
      <ul className="mt-3" style={{listStyle:'none'}}>
        <li><Link class="pt-2" to="#"><i className="fab fa-facebook" style={{fontSize:"25px"}}></i></Link></li>
        <li><Link class="pt-2" to="#"><i className="fab fa-twitter" style={{fontSize:"25px"}}></i></Link></li>
        <li><Link to="#"><i className="fab fa-instagram" style={{fontSize:"25px"}}></i></Link></li>
      </ul>
    </div>
  );
};

export default SocialMedia;