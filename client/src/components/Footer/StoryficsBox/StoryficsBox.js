import React from 'react';
import {Link} from 'react-router-dom';

const StoryficsBox=()=>{
  return(
    <div className="col-lg-2 col-md-auto">
      <p className="font-heading">Storyfics Box</p>
      <ul className="mt-3" style={{listStyle:'none'}}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="#">Titles</Link></li>
        <li><Link to="#">Press</Link></li>
        <li><Link to="#">Redeem</Link></li>
        <li><Link class="analytics-track-link" to="#">Gift</Link></li>
      </ul>
    </div>

  );
   
};
export default StoryficsBox;