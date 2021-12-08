import React, { useState, useEffect } from 'react'
import logo6 from '../images/sim.png';
import logo4 from '../images/follow.png';

import '../styles/App.css';
import ActionCard from '../components/ActionAreaCard'
import { Link } from "react-router-dom";
import Nav from '../components/navbar/Navbar'
// import NavSearch from '../components/NavSearch'

const About = () => {
    const [cardInvis, setCardInvis] = useState(true);

        return (
            <div>
                <Nav name="About"/>
                {/* <NavSearch /> */}
        <div className="Main">
          <div className="AboutPage">
            <div>
                {/* <Link to="/products"> */}
                    <ActionCard name="Who are we?" description="We are a two-man team consisting of a design eccentric who we call Ryder, and a logic enthusiast who goes by the name Araan. Our goal is to
                    bring a platform to the people that lets them perform simple tasks that, surprisingly, aren't awailable online. This is the project that we made for our Web-based Application course and we hope you like it!" source={logo6} cardTrigger={cardInvis} setTrigger={setCardInvis}/>
                {/* </Link> */}
            </div>
            <div>
                {/* <Link to="/products"> */}
                    <ActionCard name="Want to follow us?" description="We don't have any projects yet but when we make them we'll be sure to add a link here." source={logo4} cardTrigger={cardInvis} setTrigger={setCardInvis}/>
                {/* </Link> */}
            </div>
          </div>
        </div>
        </div>
  )

}

export default About;