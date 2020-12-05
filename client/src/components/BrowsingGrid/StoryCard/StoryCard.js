import React from 'react';
import { Link} from 'react-router-dom';
import {
  Card,
  CardTitle, CardSubtitle, Button, UncontrolledPopover, PopoverBody
} from 'reactstrap';

import './StoryCard.css';

const StoryCard=({id, title, author, imgUrl, rating, slug, categories})=> {

  return (
    <Card style={{backgroundColor:'black', borderRadius:'5px', /*border:'1px #1e272e solid',*/ lineHeight:'1.2'}} 
      className="p-2 mr-5 text-light" >
      <Button className="popoverBtn">
        <img className="pb-3" src={imgUrl} alt="Cover of the story"  id= {'Popover-' + id}/>
      </Button>
     
      <UncontrolledPopover trigger= "legacy" target={'Popover-' + id} hideArrow={true} placement="auto">
        <PopoverBody className="overlayContent">
          <img className="overlayImg" src={imgUrl} alt="Cover of the story"/> 
          <div className="overlayText">       
            <CardTitle style={{fontSize:'1.5rem'}}>{title}</CardTitle>
            <CardSubtitle>By {author}</CardSubtitle>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis elementum nulla ac pulvinar. Proin facilisis malesuada erat, sit amet semper mauris finibus id.</p>
            <p>{rating}/5</p>        
            <p>{categories}</p>
        
            <Link to= {`/stories/${slug}`}>
              <Button className="getDetailsBtn">Get Details</Button>
            </Link>
          </div>
        </PopoverBody>
      </UncontrolledPopover>
              
    </Card>
  );
};
export {
  StoryCard
};
