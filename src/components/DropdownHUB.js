import React, { useState } from 'react'

export const DropdownHUB = ({type,changeC,catVal,name,products}) => {
    if (type == "createProduct") {
        return (
            <div>
                <div>
                    {/* <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {props.name}
                    </button> */}
                    <div className="dropdown">
                        <select
                            value={catVal}
                            onChange={(e)=>{
                                console.log(e.target.value + " XD");
                                changeC(e.target.value);
                            }}
                        >
                            <option className="dropdown-item" value="" selected disabled hidden >Choose here</option>
                            <option className="dropdown-item" value="Motherboard">Motherboard</option >
                            <option className="dropdown-item" value="Processor">Processor</option >
                            <option className="dropdown-item" value="Ram">RAM</option >
                            <option className="dropdown-item" value="PSU">Power Supply</option >
                            <option className="dropdown-item" value="Storage">Storage</option >
                            <option className="dropdown-item" value="GPU">Graphic Card</option >
                            <option className="dropdown-item" value="Cooler">Cooler</option >
                            <option className="dropdown-item" value="Fans">Fans</option >
                            <option className="dropdown-item" value="Case">Casing</option >
                        </select>
                    </div>
                </div>
            </div>
        )
    }

    else if (type == "makeBuild") {
        return(
            <div>
                <div className="dropdown">
                        <select
                            value={catVal}
                            onChange={(e)=>{
                                console.log(e.target.value + " XD");
                                changeC(e.target.value);
                            }}
                        >
                            <option className="dropdown-item" value="" selected disabled hidden >Choose here</option>
                            { 
                            products.length >0 && products.map(el =><option className="dropdown-item" value={el.nameOfProduct}>{el.nameOfProduct}</option >)
                            }
                        </select>
                    </div>
            </div>
        )
    }

    else {
        return (
            <div>
                <div className="dropdown">
                    <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {name}
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