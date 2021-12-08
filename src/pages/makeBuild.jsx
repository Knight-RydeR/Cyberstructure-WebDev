import logo1 from '../images/about.png';
import logo2 from '../images/case.jpg';
import logo3 from '../images/cooler.jpg';
import logo4 from '../images/cpu.jpg';
import logo5 from '../images/fan.jpg';
import logo6 from '../images/gpu.jpg';
import logo7 from '../images/motherboard.jpg';
import logo8 from '../images/psu.jpg';
import logo9 from '../images/RAM.jpg';
import logo10 from '../images/sdd.jpg';

import { authAxios } from './axiosInstances';
import '../styles/App.css';
import React, {useState,useEffect} from 'react'

import ActionCard from '../components/ActionAreaCard'
import { Link } from "react-router-dom";
import Nav from '../components/navbar/Navbar'
import Drop from '../components/Dropdown'
// import NavSearch from '../components/NavSearch'

const MakeBuild = ()=> {

    const [cardInvis, setCardInvis] = useState(true);
        // useEffect( ()=>{
        
        // },[])
   
        return (
            <div>
                <Nav name="Make Build "/>
                {/* <NavSearch /> */}
        <div className="Main">
          <div className="Hub-CardArea">
            <div>
                    <ActionCard name="Motherboard" description="Choose your motherboard." source={logo7} cardTrigger={cardInvis} setTrigger={()=>setCardInvis(true)}/>
                    <Drop />
            </div>
            <div>
                    <ActionCard name="Processor" description="Choose your processor." source={logo4} cardTrigger={cardInvis} setTrigger={setCardInvis}/>
                    <Drop />
            </div><div>
                    <ActionCard name="RAM" description="Choose your RAM." source={logo9} cardTrigger={cardInvis} setTrigger={setCardInvis}/>
                    <Drop />
            </div><div>
                    <ActionCard name="Power Supply" description="Choose your Power Supply." source={logo8} cardTrigger={cardInvis} setTrigger={setCardInvis}/>
                    <Drop />
            </div><div>
                    <ActionCard name="Storage" description="Choose your Storage device." source={logo10} cardTrigger={cardInvis} setTrigger={setCardInvis}/>
                    <Drop />
            </div><div>
                    <ActionCard name="Graphic Card" description="Choose your Graphic card." source={logo6} cardTrigger={cardInvis} setTrigger={setCardInvis}/>
                    <Drop />
            </div><div>
                    <ActionCard name="Cooler" description="Choose your Cooler." source={logo3} cardTrigger={cardInvis} setTrigger={setCardInvis}/>
                    <Drop />
            </div><div>
                    <ActionCard name="Fans" description="Choose your Fans." source={logo5} cardTrigger={cardInvis} setTrigger={setCardInvis}/>
                    <Drop />
            </div><div>
                    <ActionCard name="Casing" description="Choose your Casing." source={logo2} cardTrigger={cardInvis} setTrigger={setCardInvis}/>
                    <Drop />
            </div>
          </div>
        </div>
        </div>
  )
}


export default MakeBuild;