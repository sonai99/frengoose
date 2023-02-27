import React, { useState } from 'react'
import { NavLink} from "react-router-dom";

const SignUp = () => {
  // const history = useHistory();
  const [user,setUser] = useState({
    name:"",email:"",phone:"",work:"",password:"",confirmpassword:""
  });

  const handleInputs = (e) => {
    console.log(e);
    setUser({...user, [e.target.name]:e.target.value});
  };

  const PostData = async (e) => {
    e.preventDefault();
    const {name,email,phone,work,password,confirmpassword} = user;
    const res = await fetch("/register", {
      method:"POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        name,email,phone,work,password,confirmpassword
      })
    });

    const data = await res.json();
    if(data.status === 422 || !data){
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else{
      window.alert("Succesfull Registration");
      console.log("Succesfull Registration");
      // history.push("/login");
    }
  }

  return (
    <>
      <h2 class="text-center">Signup Form</h2>
      <div class="d-flex flex-column container">
        <form method='POST'>
<label class="form-label" for="form3Example1c">Name</label>
    <input  
    type="text"
    name='name'
    value={user.name}
    onChange={handleInputs}
    />

<label class="form-label" for="form3Example3c">Email</label>
    <input  
    type="email"
    name='email'
    value={user.email}
    onChange={handleInputs}
    />

<label class="form-label" for="form3Example4c">Phone</label>
    <input  
    type="text"
    name='phone'
    value={user.phone}
    onChange={handleInputs}
    />

<label class="form-label" for="form3Example4cd">Work</label>
    <input  
    type="text"
    name='work'
    value={user.work}
    onChange={handleInputs}
    />

<label class="form-label" for="form3Example4cd">Password</label>
    <input  
    type="password"
    name='password'
    value={user.password}
    onChange={handleInputs}
    />

<label class="form-label" for="form3Example4cd">Confirm Password</label>
    <input  
    type="password"
    name='confirmpassword'
    value={user.confirmpassword}
    onChange={handleInputs}
    />
    </form>
    <div class="d-flex flex-column mt-3">
    <button type="button" class="btn btn-primary col" onClick={PostData} >Register</button>
    <p>Already Registered? <NavLink class="text-center" to="/login">Sign in</NavLink></p>
</div>
</div>
</>
  )
}

export default SignUp