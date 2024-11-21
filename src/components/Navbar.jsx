import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='nav'>
      <li >
          <Link to="home">Home</Link>
        </li>
        <li>
            <Link to="about">About</Link>
      </li> 
    </div>
  )
}

export default Navbar
