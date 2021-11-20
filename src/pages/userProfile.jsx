import React, { useState } from 'react'
import logo from '../images/ssss.png';
import '../styles/App.css';
import { Link } from "react-router-dom";
import Nav from '../components/navbar/Navbar'
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router';

import { ToastContainer, toast } from 'react-toastify';

const Home = ()=> {
  let history = useHistory();
  const logout = ()=>{
    localStorage.removeItem("accessToken");
    toast.success("Logout Successful !", {
      position: toast.POSITION.TOP_RIGHT
    });
    
    history.push("/login")
  }
  if(!localStorage.getItem("accessToken")){
    history.push("/login");
    return "Hello"
}


else{

  var token = JSON.parse(localStorage.getItem('accessToken'));
var decoded = jwt_decode(token);
console.log(decoded);

    
        return (
        <div>
            <Nav name="HUB"/>
            <header className="App-header">
              <h1>CyberStructure - User Profile</h1>
              <img src={logo} /*className="App-logo"*/ alt="logo" />
              <p>
               Logged in as {decoded.nick}
              </p>
                   <p  style={{color: "white"}} className="mb-4">Logout?</p>
              <button className="btn btn-warning" onClick={logout}>Logout</button>
              <p  style={{color: "white"}} className="mb-4">Check community builds?</p>
              <a class="btn btn-warning mb-3" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Click here to register now!" href="/community" role="button">Community</a>
              <p  style={{color: "white"}} className="mb-4">Check your builds?</p>
              <a class="btn btn-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Click here to register now!" href="/checkBuild" role="button">My Builds</a>
         
            </header>
        </div>
  )
        }
}

export default Home;