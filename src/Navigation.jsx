import React from "react";
import {NavLink} from 'react-router-dom';

import "./App.css";

export default ()=>{
  return (
    <div className="navigation-bar">
      <ul className="navigation"> 
        <li>
          <NavLink exact to="/" activeClassName="active-nav">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active-nav">About</NavLink>
        </li>
        <li>
          <NavLink to="/topics" activeClassName="active-nav">Topics</NavLink>
        </li>
        <li>
        <NavLink to="/customers" activeClassName="active-nav">Customers</NavLink>
        </li>
      </ul>
    </div>
  )
}