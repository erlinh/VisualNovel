import React from 'react';
import { Media, Button } from 'reactstrap';

const EpisodeCard = (props) => {
  return (
    <Media className="container col-lg-6" style={{marginTop:'80px', fontSize:'13px'}}>
      <Media left href="#">
        <Media object src="https://picsum.photos/110" alt="Generic placeholder image" />
      </Media>
      <Media body className="pl-4">
        <Media heading className="text-danger">
          Episode:{props.episode}
        </Media>
        <Button style={{backgroundColor:'red', borderRadius:'15px',margin:'5px'}}>Read More</Button>
        <Button style={{backgroundColor:'#00d8d6', borderRadius:'15px',margin:'5px'}}>Info</Button>
        <p className="text-light">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
         Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p> 
      </Media>
    </Media>
  );
};

export default EpisodeCard;