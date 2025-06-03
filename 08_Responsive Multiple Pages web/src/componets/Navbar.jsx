import React from 'react'
import { NavLink } from 'react-router-dom'
import "../App.css"

const Navbar = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className='grid navbar-grid'>
            <div className='logo'>
              <h1>World Atlas</h1>
            </div>
           <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/Contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/country">Country</NavLink>
              </li>
            </ul>
           </nav>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar
