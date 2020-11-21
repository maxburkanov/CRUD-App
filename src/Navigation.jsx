import React from "react";
import {NavLink} from 'react-router-dom';

import "./App.css";

export default ({isLogged, handleLoggout})=>{
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
        <li>
        { isLogged && <NavLink to="/login" onClick={handleLoggout} activeClassName="active-nav">Log out</NavLink>}
        </li>
        <li>
        <NavLink to="/movies" activeClassName="active-nav">Movies</NavLink>
        </li>
      </ul>
    </div>
  )
}