import React from 'react';
import { Link } from 'react-router-dom';
import '../Footer.css';

const Learn=()=>{
  return(
    <div className="col col-md-auto mr-md-8">
      <p className="font-heading">Learn</p>
      <ul className="mt-3" style={{listStyle:'none'}}>
        <li><Link className="footer__links" to="/">How It Works</Link></li>
        <li><Link className="footer__links" to="#">Blog</Link></li>
        <li><Link className="footer__links"  to="#">About Us</Link></li>
        <li><Link className="footer__links" to="/">Help</Link></li>
      </ul>
    </div>
  );
};

export default Learn;