import React from 'react'
// import { Nav } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Drop from "../DropdownHUB"
import logo from '../../images/ssss.png';

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="HeadingSpaced">
            {props.name}
            </div>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Drop name="Navigate"/>
              </li>
            <li className="nav-item navImage" style={{right:"8%"}}>
              <Link to={"/signup"} className="nav-link">
                Register
              </Link>
            </li>

            <li className="nav-item navImage" style={{right:"4.5%"}}>
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
            <img className="navImage" src={logo} /*className="App-logo"*/ alt="logo" />
            </li>
          </div>
        </nav>
    </div>
  )
}

export default Navbar;
