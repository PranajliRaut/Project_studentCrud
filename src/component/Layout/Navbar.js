import React from 'react'

import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand text-warning" to="Home">INFO_PORTAL</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="Home">HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="Register">REGISTER</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="Show">SHOW</NavLink>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar