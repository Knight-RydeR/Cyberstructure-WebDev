import React, { Component } from 'react'
import logo from '../images/ssss.png';
import '../styles/App.css';
import { Link } from "react-router-dom";
import Nav from '../components/navbar/Navbar'

class Home extends Component {
    render() {
        return (
        <div>
            <Nav name="HUB"/>
            <header className="App-header">
              <h1>CyberStructure - User Profile</h1>
              <img src={logo} /*className="App-logo"*/ alt="logo" />
              <p>
               Logged in as *ENTER NAME HERE*
              </p>
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