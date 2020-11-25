import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Collapse, Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import './TextSettings.css';

const TextSettings = ({passTextSize, passBgColor}) => {

  // whole settings submenu
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // text size dropdown
  const [sizeDropdownOpen, setSizeOpen] = useState(false);
  const toggleSizeDropdown = () => setSizeOpen(!sizeDropdownOpen);

  // text color dropdown
  const [colorDropdownOpen, setColorOpen] = useState(false);
  const toggleColorDropdown = () => setColorOpen(!colorDropdownOpen);

  // option handlers: text size, bg color, font, margins, line height
  const changeTextSize = (newSize) => {
    passTextSize(newSize);
  };
 
  const changeBgColor = (newColor) => {
    passBgColor(newColor);
  };

  return (
    <div>
      <Button color="light" onClick={toggle} className="settingsBtn"><i className="fas fa-cog"></i></Button>
      <Collapse isOpen={isOpen}>

        <div className="textSettingsContainer">
         
          {/* This dropdown menus are intended for the reader to adjust the page view into their liking */}
          <ButtonDropdown isOpen={sizeDropdownOpen} toggle={toggleSizeDropdown}>
            <DropdownToggle color="light">
                    Aa
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>
                <p>Text size</p>
              </DropdownItem>
              <DropdownItem onClick={() => changeTextSize('small')}> 
                <p>Small</p>
              </DropdownItem>
              <DropdownItem onClick={() => changeTextSize('regular')}> 
                <p>Regular</p>
              </DropdownItem>
              <DropdownItem onClick={() => changeTextSize('big')}> 
                <p>Big</p>
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>

          <ButtonDropdown isOpen={colorDropdownOpen} toggle={toggleColorDropdown}>
            <DropdownToggle color="light">
                    Color
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>
                <p>Background color</p>
              </DropdownItem>
              <DropdownItem onClick={() => changeBgColor('white')}> 
                <p>White</p>
              </DropdownItem>
              <DropdownItem onClick={() => changeBgColor('offwhite')}> 
                <p>Off-White</p>
              </DropdownItem>
              <DropdownItem onClick={() => changeBgColor('yellow')}> 
                <p>Yellow</p>
              </DropdownItem>
              <DropdownItem onClick={() => changeBgColor('blue')}> 
                <p>Blue</p>
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
              {/* <DropdownItem> 
                <p>Color</p>
              </DropdownItem>
              <DropdownItem> 
                <p>Font</p>
              </DropdownItem>
              <DropdownItem> 
                <p>Margins</p>
              </DropdownItem> */}

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
