import React, { useState } from 'react'

export const DropdownHUB = (props) => {
    const [categoryName, setCategory] = useState("");
    if (props.type == "createProduct") {
        return (
            <div>
                <div>
                    {/* <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {props.name}
                    </button> */}
                    <div className="dropdown">
                        <select
                            value={categoryName}
                            onChange={(e)=>setCategory(e.target.value)}
                        >
                            <option className="dropdown-item" value="Motherboard">Motherboard</option >
                            <option className="dropdown-item" value="Processor">Processor</option >
                            <option className="dropdown-item" value="RAM">RAM</option >
                            <option className="dropdown-item" value="Power Supply">Power Supply</option >
                            <option className="dropdown-item" value="Storage">Storage</option >
                            <option className="dropdown-item" value="Graphic Card">Graphic Card</option >
                            <option className="dropdown-item" value="Cooler">Cooler</option >
                            <option className="dropdown-item" value="Fans">Fans</option >
                            <option className="dropdown-item" value="Casing">Casing</option >
                        </select>
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