import React from 'react'

export const DropdownHUB = (props) => {
    return (
        <div>
            <div className="dropdown">
                <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {props.name}
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="/products">Products</a>
                    <a class="dropdown-item" href="/makeBuild">Make A Build</a>
                    <a class="dropdown-item" href="/compat">Compatibility</a>
                    <a class="dropdown-item" href="/consumption">Consumption</a>
                    <a class="dropdown-item" href="/bestPrice">Best Price</a>
                    <a class="dropdown-item" href="/about">About</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="/hub">Go to Home</a>
                </div>
            </div>
        </div>
    )
}

export default DropdownHUB;