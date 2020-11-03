import React from 'react';
import { Button } from 'reactstrap';

export default function SearchBox(props) {
  return (
    <div className="searchbox">
      <input type="text" onChange={props.searchInputOnChange}/>
      <Button color="primary" onClick={props.triggerSearch}>Search</Button>
    </div>
  );
}
