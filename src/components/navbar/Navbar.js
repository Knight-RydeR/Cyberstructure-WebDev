import React from 'react'
// import { Nav } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Drop from "../DropdownHUB"
import logo from '../../images/ssss.png';
import logoMini from '../../images/ss.png';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router';

const Navbar = (props) => {
  let history = useHistory();
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("loggedIn");
    localStorage.removeItem('admin');
    toast.success("Logout Successful!", {
      position: toast.POSITION.TOP_RIGHT
    });

    history.push("/")
  }

  if(localStorage.getItem("loggedIn") == "1")
  {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="HeadingSpaced">
            {props.name}
          </div>
          <div className="navbar-nav mr-auto">
            <li className="nav-item ">
              <Drop name="Navigate"/>
            </li>
            {/* <li>
            <input className="form-control" type="search" placeholder="Search" aria-label="Search"></input>
            </li> */}
            <li className="nav-item navImage" style={{ right: "5%" }}>
              <button className="btn btn-warning" onClick={logout}>Logout</button>
            </li>
            <li className="nav-item">
              <Link to={"/userProfile"}>
              <img className="navImage" src={logo} /*className="App-logo"*/ alt="logo" />
              </Link>
            </li>
          </div>
        </nav>
      </div>
    )
  }
else {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="HeadingSpaced">
          {props.name}
        </div>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Drop name="Navigate" />
          </li>
          {/* <li>
            <input className="form-control" type="search" placeholder="Search" aria-label="Search"></input>
          </li> */}
          <li className="nav-item navImage" style={{ right: "6%"}}>
              <Link to={"/signup"} className="nav-link">
                Register
              </Link>
            </li>
            <li className="nav-item navImage" style={{ right: "1%" }}>
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
        </div>
      </nav>
    </div>
  )
}
}

export default Navbar;
