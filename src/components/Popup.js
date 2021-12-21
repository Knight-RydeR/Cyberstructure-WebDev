import { authAxios,authAxiosAdmin,authAxiosDefault,checkJWTVALID } from '../pages/axiosInstances';
import React, { useState, useEffect } from 'react'
import "../styles/Popup.css"

function Popup(props) {
    const [build, setBuild] = useState([]);

    useEffect(() => {
        authAxiosDefault.get(`/bestPrice`).then(response => {
            console.log(response.data.data)
            setBuild(response.data.data)
    
        }).catch(error => console.log(error))
        }, [])

    if (props.type == "community") {
        return (props.trigger) ? (
            <div className="popup">
                <div className="popup-inner">
                    <button className="close-btn" onClick={() => {
                        props.setTrigger(false)
                        props.setCard(true)}
                    }
                    >Close</button>
    
                    {/* <button className="modify-btn" onClick={() => {
                        props.setTrigger(false)
                        props.setCard(true)}
                    }
                    >Modify</button> */}
                    <div>
                        <img src={props.image} className="icon-images"/>
                        {/* <h3>{props.category}</h3>
                        <br></br>  */}
                        <h3>CPU: {props.CPU}</h3>
                        <br></br> 
                        <h3>Mobo: {props.MB}</h3>
                        <br></br> 
                        <h3>RAM: {props.RAM}</h3>
                        <br></br> 
                        <h3>PSU: {props.PSU}</h3>
                        <br></br> 
                        <h3>Drive: {props.HD}</h3>
                        <br></br> 
                        <h3>GPU: {props.GPU}</h3>
                        <br></br>
                        <h3>Cooler: {props.COOL}</h3>
                        <br></br> 
                        <h3>Fans: {props.FANS}</h3>
                        <br></br> 
                        <h3>Case: {props.CS}</h3>
                        <br></br>
                        <h3>Rating: {props.rate}</h3>
                        <br></br>
                    </div>
                    { props.children }
                </div>
            </div>
        ) : "";
    }
    else if (props.type == 'bestPrice'){
        return (props.trigger) ? (
            <div className="popup">
                <div className="popup-inner">
                    <button className="close-btn" onClick={() => {
                        props.setTrigger(false)
                        props.setCard(true)}
                    }
                    >Close</button>
                    { /*USE THESE NAMES TO FIND PRICES, THEN REPLACE NAMES WIH PRICES*/ }
                    <div>
                        <img src={props.image} className="icon-images"/>
                        <h3>CPU: {props.CPU}</h3>
                        <br></br> 
                        <h3>Mobo: {props.MB}</h3>
                        <br></br> 
                        <h3>RAM: {props.RAM}</h3>
                        <br></br> 
                        <h3>PSU: {props.PSU}</h3>
                        <br></br> 
                        <h3>Drive: {props.HD}</h3>
                        <br></br> 
                        <h3>GPU: {props.GPU}</h3>
                        <br></br>
                        <h3>Cooler: {props.COOL}</h3>
                        <br></br> 
                        <h3>Fans: {props.FANS}</h3>
                        <br></br> 
                        <h3>Case: {props.CS}</h3>
                        <br></br>
                        <h3>Rating: {props.rate}</h3>
                        <br></br>
                    </div>
                    { props.children }
                </div>
            </div>
        ) : "";
    }
    else if (props.type == 'con'){
        return (props.trigger) ? (
            <div className="popup">
                <div className="popup-inner">
                    <button className="close-btn" onClick={() => {
                        props.setTrigger(false)
                        props.setCard(true)}
                    }
                    >Close</button>
    
                    {/* <button className="modify-btn" onClick={() => {
                        props.setTrigger(false)
                        props.setCard(true)}
                    }
                    >Prices</button> */}
                    <div>
                        <img src={props.image} className="icon-images"/>
                        {/* <h3>{props.category}</h3>
                        <br></br>  */}
                        <h3>CPU: {props.CPU}</h3>
                        <br></br> 
                        <h3>Mobo: {props.MB}</h3>
                        <br></br> 
                        <h3>RAM: {props.RAM}</h3>
                        <br></br> 
                        <h3>PSU: {props.PSU}</h3>
                        <br></br> 
                        <h3>Drive: {props.HD}</h3>
                        <br></br> 
                        <h3>GPU: {props.GPU}</h3>
                        <br></br>
                        <h3>Cooler: {props.COOL}</h3>
                        <br></br> 
                        <h3>Fans: {props.FANS}</h3>
                        <br></br> 
                        <h3>Case: {props.CS}</h3>
                        <br></br>
                        <h3>Rating: {props.rate}</h3>
                        <br></br>
                    </div>
                    { props.children }
                </div>
            </div>
        ) : "";
    }
    else {
        return (props.trigger) ? (
            <div className="popup">
                <div className="popup-inner">
                    <button className="close-btn" onClick={() => {
                        props.setTrigger(false)
                        props.setCard(true)}
                    }
                    >Close</button>
    
                    <button className="modify-btn" onClick={() => {
                        props.setTrigger(false)
                        props.setCard(true)}
                    }
                    >Modify</button>
                    <div>
                        <img src={props.image} className="icon-images"/>
                        {/* <h3>{props.category}</h3>
                        <br></br>  */}
                        <h3>Name: {props.name}</h3>
                        <br></br> 
                        <h3>Price: {props.price}/- PKR</h3>
                        <br></br> 
                        <h3>Power: {props.rating} Watts</h3>
                        <br></br> 
                    </div>
                    { props.children }
                </div>
            </div>
        ) : "";
    }
    
}

export default Popup
