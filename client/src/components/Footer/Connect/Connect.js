import React from 'react';
import {Link} from 'react-router-dom';
import '../Footer.css';

const Connect =()=>{
  return(
    <div className="col col-md-auto" >
      <p className="font-heading">Connect</p>
      <ul className="mt-3" style={{listStyle:'none'}}>
        <li><Link className="footer__links"  to="#">Careers</Link> </li>
        <li ><Link className="footer__links">Contact Us</Link></li>
      </ul>
    </div>
  );
};

export default Connect;