import React, { Component } from "react";
import {NavLink} from 'react-router-dom';

export const NavBar = () => {
  console.log("Navbar - render");
  return (
    <nav  className="navbar navbar-expand-lg navbar-light bg-light mr-auto">
      <NavLink className="navbar-brand" to=''>
        Vidly
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-item nav-link" to='/movies' >
              Movies <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-item nav-link" to='/customers'>
              Customers
            </NavLink>
          </li>
          <li className="nav-item nav-item">
            <NavLink className="nav-link" to='/rentals'>
              Rentals
            </NavLink>
          </li>
          <li className="nav-item nav-item">
            <NavLink
              className="nav-item nav-link"
              to='/login'
              tabindex="-1"
              aria-disabled="true"
            >
              Login
            </NavLink>
          </li>
          <li className="nav-item nav-item">
            <NavLink className="nav-link" to='/register'>
              Register
            </NavLink>
          </li>
        </div>
      </div>
    </nav>
  );
};
