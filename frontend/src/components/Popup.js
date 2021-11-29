import { React, useState } from 'react'
import "../styles/Popup.css"

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => {
                    props.setTrigger(false)
                    props.setCard(true)}
                }
                >close</button>
                <div>
                    <h3>{props.category}</h3>
                    <br></br> 
                    <h3>{props.name}</h3>
                    <br></br> 
                    <h3>{props.price}</h3>
                    <br></br> 
                </div>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default Popup
