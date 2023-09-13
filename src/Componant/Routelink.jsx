import React from "react";
import { Link } from "react-router-dom";

function Routelink() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h2>
            <Link to="/">FitnessClub</Link>
          </h2>
        </div>

        <div className="App">
          <ul>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Service">Service</Link>
            </li>
            <li>
              <Link to="/Contact">Contact Us</Link>
            </li>

            <li>
              <Link to="/Login">Log In</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Routelink;
