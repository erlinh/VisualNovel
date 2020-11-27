import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Collapse, Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import './TextSettings.css';

const TextSettings = ({isReadingNavOpen, passTextSize, passBgColor, passFont, passMargins, passSpacing}) => {

  // text size dropdown
  const [sizeDropdownOpen, setSizeOpen] = useState(false);
  const toggleSizeDropdown = () => setSizeOpen(!sizeDropdownOpen);

  // text color dropdown
  const [colorDropdownOpen, setColorOpen] = useState(false);
  const toggleColorDropdown = () => setColorOpen(!colorDropdownOpen);

  // font dropdown
  const [fontDropdownOpen, setFontOpen] = useState(false);
  const toggleFontDropdown = () => setFontOpen(!fontDropdownOpen);
 
  // margins dropdown
  const [marginsDropdownOpen, setMarginsOpen] = useState(false);
  const toggleMarginsDropdown = () => setMarginsOpen(!marginsDropdownOpen);
 
  // line height dropdown
  const [spacingDropdownOpen, setSpacingOpen] = useState(false);
  const toggleSpacingDropdown = () => setSpacingOpen(!spacingDropdownOpen);

  // option handlers: text size, bg color, font, margins, line height
  const changeTextSize = (newSize) => {
    passTextSize(newSize);
  };
 
  const changeBgColor = (newColor) => {
    passBgColor(newColor);
  };

  const changeFont = (newFont) => {
    passFont(newFont);
  };

  const changeMargins = (newMargins) => {
    passMargins(newMargins);
  };

  const changeSpacing = (newSpacing) => {
    passSpacing(newSpacing);
  };

  return (
    <div>
      <Collapse isOpen={isReadingNavOpen}>

        <div className="textNavTop textSettingsContainer">
         
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

          <ButtonDropdown isOpen={fontDropdownOpen} toggle={toggleFontDropdown}>
            <DropdownToggle color="light">
                    Font
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>
                <p>Font</p>
              </DropdownItem>
              <DropdownItem onClick={() => changeFont('serif')}> 
                <p>Serif</p>
              </DropdownItem>
              <DropdownItem onClick={() => changeFont('sans-serif')}> 
                <p>Sans-Serif</p>
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>

          <ButtonDropdown isOpen={marginsDropdownOpen} toggle={toggleMarginsDropdown}>
            <DropdownToggle color="light">
                    Margins
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>
                <p>Margins</p>
              </DropdownItem>
              <DropdownItem onClick={() => changeMargins('0')}> 
                <p>None</p>
              </DropdownItem>
              <DropdownItem onClick={() => changeMargins('1')}> 
                <p>Small</p>
              </DropdownItem>
              <DropdownItem onClick={() => changeMargins('2')}> 
                <p>Medium</p>
              </DropdownItem>
              <DropdownItem onClick={() => changeMargins('3')}> 
                <p>Big</p>
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>

          <ButtonDropdown isOpen={spacingDropdownOpen} toggle={toggleSpacingDropdown}>
            <DropdownToggle color="light">
                    Spacing
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header>
                <p>Spacing</p>
              </DropdownItem>
              <DropdownItem onClick={() => changeSpacing('0')}> 
                <p>Small</p>
              </DropdownItem>
              <DropdownItem onClick={() => changeSpacing('1')}> 
                <p>Regular</p>
              </DropdownItem>
              <DropdownItem onClick={() => changeSpacing('2')}> 
                <p>Big</p>
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>

        </div>
      </Collapse>

      <Collapse isOpen={isReadingNavOpen} >
      <div className="textNavBottom textSettingsContainer">

          {/* A search function could be implemented here. Kindle has this feature. */}
          <Button color="light"><i className="fas fa-search"></i></Button>    

          {/* Functionality to add a bookmark on a page could be implemented here. Kindle has this feature. */}
          <Button color="light"><i className="fas fa-bookmark"></i></Button>  

          {/* Add "Back to details page" instead fo the bookmark? */}      

          <Link to="/"><Button color="light"><i className="fas fa-home"></i></Button> </Link>

      </div>
      </Collapse>
    </div>
  );
};

export default TextSettings;
