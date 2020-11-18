import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import './TextSettings.css';

const TextSettings = () => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} className="textSettings">
      <DropdownToggle caret>
              
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>
                  Setting go here
        </DropdownItem>
        <DropdownItem> 
          <Link to="/">Home</Link>
        </DropdownItem>
      </DropdownMenu>


    </ButtonDropdown>
    
  );
};

export default TextSettings;
