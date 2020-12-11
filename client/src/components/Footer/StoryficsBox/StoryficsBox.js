import React from 'react';
import {Link} from 'react-router-dom';
import '../Footer.css';

const StoryficsBox=()=>{
  return(
    <div className="col-lg-2 col-md-auto ">
      <p className="font-heading">Storyfics</p>
      <ul className="mt-3 " style={{listStyle:'none'}}>
        <li><Link   className="footer__links" to="/">Home</Link></li>
        <li><Link className="footer__links" to="#">Titles</Link></li>
        <li><Link className="footer__links"  to="#">Press</Link></li>
        <li><Link className="footer__links" to="#">Redeem</Link></li>
        <li><Link className="footer__links " to="#">Gift</Link></li>
      </ul>
    </div>

  );
   
};
export default StoryficsBox;