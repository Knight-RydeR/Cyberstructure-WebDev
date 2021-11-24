import React, { Component } from 'react'
import logo6 from '../images/sim.png';
import logo4 from '../images/follow.png';

import '../styles/App.css';
import ActionCard from '../components/ActionAreaCard'
import { Link } from "react-router-dom";
import Nav from '../components/navbar/Navbar'
import Drop from '../components/DropdownHUB'


class CreateProduct extends Component {
    render() {
        return (
            <div>
                <Nav name="Compatibility" />
                <div className="Main">
                    <div className="Hub-CardArea">
                        <div>
                            <ActionCard name="Choose first component" source={logo6} />
                            <div className="compatDrop">
                                <Drop name="Select Component"/>
                            </div>
                        </div>
                        <div>
                            <ActionCard name="Choose second component" source={logo6} />
                            <div className="compatDrop">
                                <Drop name="Select Component"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateProduct;