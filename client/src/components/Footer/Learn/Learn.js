import React from 'react';
import { Link } from 'react-router-dom';

const Learn=()=>{
  return(
    <div className="col col-md-auto mr-md-8">
      <p className="font-heading">Learn</p>
      <ul className="mt-3" style={{listStyle:'none'}}>
        <li><Link class="#" to="/">How It Works</Link></li>
        <li><Link class="#" to="#">Blog</Link></li>
        <li><Link to="#">About Us</Link></li>
        <li><Link class="analytics-track-link" target="_blank" to="#">Help</Link></li>
      </ul>
    </div>
  );
};

export default Learn;