import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import "./App.css";

export default (props) => {

  const [dropdownOpen, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [searchVal, setSearchVal] = useState('name'); 
  const {handleSelection, searchBy, dropdown, handleSubmitSearch} = props;

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <div >
      <form onSubmit={(e)=>{
        handleSubmitSearch(e, inputValue, searchVal)
      }}>
        <input type="text"
          className="search-input" 
          value={inputValue}
          onChange={e=>{return (
            setInputValue(e.target.value)
          )
          }} />
          <button>
            Search by {searchVal}
            <NavLink to="/customers"></NavLink>
          </button>

          <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle className='btn-secondary'  caret>
              Button Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={(e)=>{setSearchVal(dropdown[0]); handleSelection(searchVal)}}>Name</DropdownItem>
              <DropdownItem onClick={(e)=>{setSearchVal(dropdown[1]); handleSelection(searchVal)}}>State</DropdownItem>
              <DropdownItem onClick={(e)=>{setSearchVal(dropdown[2]); handleSelection(searchVal)}}>@mail</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={(e)=>{setSearchVal(dropdown[3]); handleSelection(searchVal)}}>Phone</DropdownItem>
            </DropdownMenu>
        </ButtonDropdown>
      </form>
    </div> 
  )
}


