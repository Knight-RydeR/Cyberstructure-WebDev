import { authAxios,authAxiosAdmin,authAxiosDefault,checkJWTVALID } from '../pages/axiosInstances';
import React, { useState, useEffect } from 'react'
import "../styles/Popup.css"

function Popup(props) {
    const [build, setBuild] = useState([]);
    const [processorPrice,setProcessorPrice] = useState({})
    const [motherboardPrice,setMotherboardPrice] = useState({})
    const [gpuPrice,setGPUPrice] = useState({})
    const [coolerPrice,setCoolerPrice] = useState({})
    const [fansPrice,setFansPrice] = useState({})
    const [storagePrice,setStoragePrice] = useState({})
    const [casingPrice,setCasingPrice] = useState({})
    const [psuPrice,setPSUPrice] = useState({})
    const [ram,setRamPrice] = useState({})

    useEffect(() => {
        if(props.type == 'bestPrice'){
        authAxiosDefault.get(`/bestPrice/${props.CPU}`).then(response => {
            console.log(response.data.data)
            setProcessorPrice(response.data.data)
    
        }).catch(error => console.log(error))
        authAxiosDefault.get(`/bestPrice/${props.MB}`).then(response => {
            console.log(response.data.data)
            setMotherboardPrice(response.data.data)
    
        }).catch(error => console.log(error))
        authAxiosDefault.get(`/bestPrice/${props.PSU}`).then(response => {
            console.log(response.data.data)
            setPSUPrice(response.data.data)
    
        }).catch(error => console.log(error))
        authAxiosDefault.get(`/bestPrice/${props.HD}`).then(response => {
            console.log(response.data.data)
            setStoragePrice(response.data.data)
    
        }).catch(error => console.log(error))
        authAxiosDefault.get(`/bestPrice/${props.GPU}`).then(response => {
            console.log(response.data.data)
            setGPUPrice(response.data.data)
    
        }).catch(error => console.log(error))
        authAxiosDefault.get(`/bestPrice/${props.COOL}`).then(response => {
            console.log(response.data.data)
            setCoolerPrice(response.data.data)
    
        }).catch(error => console.log(error))
        authAxiosDefault.get(`/bestPrice/${props.FANS}`).then(response => {
            console.log(response.data.data)
            setFansPrice(response.data.data)
    
        }).catch(error => console.log(error))
        authAxiosDefault.get(`/bestPrice/${props.RAM}`).then(response => {
            console.log(response.data.data)
            setRamPrice(response.data.data)
    
        }).catch(error => console.log(error))
        authAxiosDefault.get(`/bestPrice/${props.CS}`).then(response => {
            console.log(response.data.data)
            setCasingPrice(response.data.data)
    
        }).catch(error => console.log(error))}
        else if (props.type=='con') {

        }
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
                        <h4>Best Price Rs.{processorPrice.price}, <a href={processorPrice.link}>Buy Here</a></h4>
                        <br></br> 
                        <h3>Mobo: {props.MB}</h3>
                        <h4>Best Price Rs.{motherboardPrice.price}, <a href={motherboardPrice.link}>Buy Here</a></h4>
                        <br></br> 
                        <h3>RAM: {props.RAM}</h3>
                        <h4>Best Price Rs.{ram.price}, <a href={ram.link}>Buy Here</a></h4>
                        <br></br> 
                        <h3>PSU: {props.PSU}</h3>
                        <h4>Best Price Rs.{psuPrice.price}, <a href={psuPrice.link}>Buy Here</a></h4>
                        <br></br> 
                        <h3>Drive: {props.HD}</h3>
                        <h4>Best Price Rs.{storagePrice.price}, <a href={storagePrice.link}>Buy Here</a></h4>
                        <br></br> 
                        <h3>GPU: {props.GPU}</h3>
                        <h4>Best Price Rs.{gpuPrice.price}, <a href={gpuPrice.link}>Buy Here</a></h4>
                        <br></br>
                        <h3>Cooler: {props.COOL}</h3>
                        <h4>Best Price Rs.{coolerPrice.price}, <a href={coolerPrice.link}>Buy Here</a></h4>
                        <br></br> 
                        <h3>Fans: {props.FANS}</h3>
                        <h4>Best Price Rs.{fansPrice.price}, <a href={fansPrice.link}>Buy Here</a></h4>
                        <br></br> 
                        <h3>Case: {props.CS}</h3>
                        <h4>Best Price Rs.{casingPrice.price}, <a href={casingPrice.link}>Buy Here</a></h4>
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
    
                    {/* <button className="modify-btn" onClick={() => {
                        props.setTrigger(false)
                        props.setCard(true)}
                    }
                    href="/modify">Modify</button> */}
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
