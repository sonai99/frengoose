import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li class="nav-item active">
        <NavLink class="nav-link" to="/">Home</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to="/about">About</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to="/contact">Contact</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to="/login">Login</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to="/signup">Registration</NavLink>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default Navbar