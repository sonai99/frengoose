import React from 'react'
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
    <h2 class="text-center">Login Form</h2>
    <div class="d-flex flex-column container">
    <label class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <label class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
    <div class="d-flex flex-column mt-3">
    <button type="submit" class="btn btn-primary">Login</button>
    <NavLink to="/signup">Create new Account</NavLink>
    </div>
    </div>
    </>
  )
}

export default Login