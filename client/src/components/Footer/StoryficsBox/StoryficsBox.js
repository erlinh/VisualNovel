import React from 'react';
import {Link} from 'react-router-dom';

const StoryficsBox=()=>{
  return(
    <div className="col col-md-auto mr-md-8">
      <p className="font-heading">Storyfics Box</p>
      <ul className="mt-3" style={{listStyle:'none'}}>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="#">Titles</Link></li>
        <li><Link to="#">Press</Link></li>
        <li><Link to="#">Redeem</Link></li>
        <li><Link class="analytics-track-link" to="https://gift.serialbox.com">Gift</Link></li>
      </ul>
    </div>

  );
   
};
export default StoryficsBox;