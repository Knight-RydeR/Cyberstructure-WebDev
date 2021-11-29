import React, { useState } from 'react'
import logo6 from '../images/sim.png';
import logo4 from '../images/follow.png';

import '../styles/App.css';
import ActionCard from '../components/ActionAreaCard'
import { Link } from "react-router-dom";
import Nav from '../components/navbar/Navbar'
import Drop from '../components/DropdownHUB'


const Consumption = () => {

    let [category, setCategory] = useState("");

    return (
        <div>
            <Nav name="Consumption" />
            <div className="Main">
                <div className="AboutPage">
                    <div>
                        <h1 style={{ color: "white" }}>Select Component to Use</h1>
                        <div className="compatDrop mb-3">
                            <Drop name="Select Category" type="createProduct" changeC={setCategory} catVal={category} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Consumption;