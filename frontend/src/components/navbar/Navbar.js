import React from 'react'
// import { Nav } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
            {props.name}
          <div className="navbar-nav mr-auto">

            <li className="nav-item">
              <Link to={"/signup"} className="nav-link">
                Register
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
          </div>
        </nav>
    </div>
  )
}

export default Navbar;
