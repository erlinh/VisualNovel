import React from 'react';
import {Link} from 'react-router-dom';

const Connect =()=>{
  return(
    <div className="col col-md-auto" >
      <p className="font-heading">Connect</p>
      <ul className="mt-3" style={{listStyle:'none'}}>
        <li><Link to="/">Careers</Link> </li>
        <li className="footer-link contact-us-link"><Link to="/">Contact Us</Link></li>
      </ul>
    </div>
  );
};

export default Connect;