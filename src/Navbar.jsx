import React from "react";
import {Link } from "react-router-dom";
import './index.css';

function Navbar() {
  return (
      <nav id ="navbar">
        <ul>
          <li>
          <Link to="/"><button class="button">Home</button></Link>
          </li>
          <li>
          <Link to="/Recommend"><button class="button">Recommend</button></Link>
          </li>
          <li>
          <Link to="/View"><button class="button">View</button></Link>
          </li>
        </ul>
      </nav>
  );
}

export default Navbar;