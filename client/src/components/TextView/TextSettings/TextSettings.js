import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Collapse, Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import './TextSettings.css';

const TextSettings = ({passTextSize}) => {

  // whole settings submenu
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // text size dropdown
  const [sizeDropdownOpen, setSizeOpen] = useState(false);
  const toggleDropDown = () => setSizeOpen(!sizeDropdownOpen);

  // text size
  const changeTextSize = (newSize) => {
    passTextSize(newSize);
  };

  return (
    <div>
      <Button color="light" onClick={toggle} className="settingsBtn"><i className="fas fa-cog"></i></Button>
      <Collapse isOpen={isOpen}>

        <div className="textSettingsContainer">
         

          {/* This dropdown menu is intended for the reader to adjust the page view into their liking */}
          <ButtonDropdown isOpen={sizeDropdownOpen} toggle={toggleDropDown}>
            <DropdownToggle color="light">
                    Aa
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>
                <p>Text modifiers</p>
              </DropdownItem>

              <DropdownItem> 
                <p>Text Size</p>
              </DropdownItem>
              <DropdownItem onClick={() => changeTextSize('small')}> 
                <p>-- Small</p>
              </DropdownItem>
              <DropdownItem onClick={() => changeTextSize('regular')}> 
                <p>-- Regular</p>
              </DropdownItem>
              <DropdownItem onClick={() => changeTextSize('big')}> 
                <p>-- Big</p>
              </DropdownItem>

              <DropdownItem> 
                <p>Color</p>
              </DropdownItem>
              <DropdownItem> 
                <p>Font</p>
              </DropdownItem>
              <DropdownItem> 
                <p>Margins</p>
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>

          {/* A search function could be implemented here. Kindle has this feature. */}
          <Button color="light"><i className="fas fa-search"></i></Button>    

          {/* Functionality to add a bookmark on a page could be implemented here. Kindle has this feature. */}
          <Button color="light"><i className="fas fa-bookmark"></i></Button>        

          <Link to="/">Home</Link>

        </div>
      </Collapse>
    </div>



 
    
    
  );
};

export default TextSettings;
