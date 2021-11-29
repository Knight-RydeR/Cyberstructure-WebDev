import React, { Component } from 'react'
import logo6 from '../images/sim.png';
import logo4 from '../images/follow.png';

import '../styles/App.css';
import ActionCard from '../components/ActionAreaCard'
import { Link } from "react-router-dom";
import Nav from '../components/navbar/Navbar'
import Drop from '../components/DropdownHUB'


class Community extends Component {
    render() {
        return (
            <div>
                <Nav name="Community" />
                <div>
                    <h1>This PAGE IS UNDER construction</h1>
                </div>
            </div>
        )
    }
}

export default Community;