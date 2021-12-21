import React, { useState } from 'react'
import logo from '../images/ssss.png';
import '../styles/App.css';
import { Link } from "react-router-dom";
import Nav from '../components/navbar/Navbar'
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router';

import { ToastContainer, toast } from 'react-toastify';

const UserProfile = ()=> {
  let history = useHistory();
  let accessToken = localStorage.getItem("accessToken");
  console.log(accessToken);
  const logout = ()=>{
    localStorage.removeItem("accessToken");
    localStorage.removeItem("loggedIn");
    toast.success("Logout Successful!", {
      position: toast.POSITION.TOP_RIGHT
    });
    
    history.push("/login")
  }

  // const userInfo = () => {
  //   return(
  //     <div>HELLO WORLD</div>
  //   )
  // }

  if(!accessToken){

    history.push("/login");
    return "Hello"
}
else if (accessToken==="undefined")
{
  history.push("/login");
  return "YOU GOT CAUGHT";

}
else{
  console.log("mohmadbey")
  var token = JSON.parse(localStorage.getItem('accessToken'));
var decoded = jwt_decode(token);
console.log(decoded);

    if (localStorage.getItem('admin') == '1')
    {
      return (
        <div>
            <Nav name="Profile"/>
            <header className="App-header">
              <h1>CyberStructure - User Profile</h1>
              <img src={logo} /*className="App-logo"*/ alt="logo" />
              <h2 className="mb-4">
               Logged in as {decoded.nick}
              </h2>
                   {/* <p  style={{color: "white"}} className="mb-4">Logout?</p>
              <button className="btn btn-warning" onClick={logout}>Logout</button> */}
              <p  style={{color: "white"}} className="mb-4">Check community builds?</p>
              <a className="btn btn-warning mb-3" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Click here to view builds!" href="/community" role="button">Community</a>
              <p  style={{color: "white"}} className="mb-4">Check your builds?</p>
              <a className="btn btn-warning mb-4" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Click here to view your builds!" href="/checkBuild" role="button">My Builds</a>
              <p  style={{color: "white"}} className="mb-4">Add more products?</p>
              <a className="btn btn-warning mb-4" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Click here to add products!" href="/createProduct" role="button">Add Products</a>
              <p  style={{color: "white"}} className="mb-4">Check user list?</p>
              <a className="btn btn-warning mb-4" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Click here to check users!" /*onClick= {() => {userInfo()}}*/ href="/users" role="button">User information</a>
            </header>
        </div>
  )
    } else {
      return (
        <div>
            <Nav name="Profile"/>
            <header className="App-header">
              <h1>CyberStructure - User Profile</h1>
              <img src={logo} /*className="App-logo"*/ alt="logo" />
              <h2 className="mb-4">
               Logged in as {decoded.nick}
              </h2>
                   {/* <p  style={{color: "white"}} className="mb-4">Logout?</p>
              <button className="btn btn-warning" onClick={logout}>Logout</button> */}
              <p  style={{color: "white"}} className="mb-4">Check community builds?</p>
              <a className="btn btn-warning mb-3" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Click here to register now!" href="/community" role="button">Community</a>
              <p  style={{color: "white"}} className="mb-4">Check your builds?</p>
              <a className="btn btn-warning mb-4" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Click here to register now!" href="/checkBuild" role="button">My Builds</a>
         
            </header>
        </div>
      )
    }

        }
}

export default UserProfile;