import React from 'react'

export const DropdownHUB = (props) => {
    if (props.type == "createProduct")
    {
        return (
            <div>
                    <div className="dropdown">
                    <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {props.name}
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" >Motherboard</a>
                        <a className="dropdown-item" >Processor</a>
                        <a className="dropdown-item" >RAM</a>
                        <a className="dropdown-item" >Power Supply</a>
                        <a className="dropdown-item" >Storage</a>
                        <a className="dropdown-item" >Graphic Card</a>
                        <a className="dropdown-item" >Cooler</a>
                        <a className="dropdown-item" >Fans</a>
                        <a className="dropdown-item" >Casing</a>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                    <div className="dropdown">
                    <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {props.name}
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="/products">Products</a>
                        <a className="dropdown-item" href="/makeBuild">Make A Build</a>
                        <a className="dropdown-item" href="/compat">Compatibility</a>
                        <a className="dropdown-item" href="/consumption">Consumption</a>
                        <a className="dropdown-item" href="/bestPrice">Best Price</a>
                        <a className="dropdown-item" href="/about">About</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/hub">Go to Home</a>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default DropdownHUB;