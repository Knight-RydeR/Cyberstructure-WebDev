import React, { Component } from 'react'
import logo1 from '../images/about.png';
import logo2 from '../images/best.jpg';
import logo3 from '../images/comp.jpg';
import logo4 from '../images/cons.jpg';
import logo5 from '../images/makeA.jpg';
import logo6 from '../images/pro.jpg';

import '../styles/App.css';
import ActionCard from '../components/ActionAreaCard'
import { Link } from "react-router-dom";
import Nav from '../components/navbar/Navbar'
// import NavSearch from '../components/NavSearch'

class Hub extends Component {
    render() {
        return (
            <div>
                <Nav name="HUB"/>
                {/* <NavSearch /> */}
        <div className="Main">
          <div className="Hub-CardArea">
            <div>
                <Link to="/products">
                    <ActionCard name="Products" description="This place lets you check for information about any specific item." source={logo6}/>
                </Link>
            </div>
            <div>
                <Link to="/makeBuild">
                    <ActionCard name="Make Build" description="The Heaven for PC enthusiasts. Come here to design your own PC." source={logo5}/>
                </Link>
            </div>
            <div>
                <Link to="/compat">
                    <ActionCard name="Compatibility" description="Willing to upgrade something but don't know about compatibility? We've got your back." source={logo3}/>
                </Link>
            </div>
            <div>
                <Link to="/consumption">
                    <ActionCard name="Consumption" description="Not sure if your PC is getting enough power? Tell us the build and we'll tell you the consumption!" source={logo4}/>
                </Link>
            </div>
            <div>
                <Link to="/bestPrice">
                    <ActionCard name="Best Price" description="Looking to buy a new component? Come here, let us bring to you the best deals available!" source={logo2}/>
                </Link>
            </div>
            <div>
                <Link to="/about">   
                    <ActionCard name="About" description="Like the site? Check this page out for more information about us!" source={logo1}/>
                </Link>
            </div>
          </div>
        </div>
        </div>
  )
}
}

export default Hub;