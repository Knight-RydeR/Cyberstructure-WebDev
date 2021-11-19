import React from 'react'

export const Dropdown = (props) => {
    return (
        <div>
            <div className="dropdown">
                <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Choose your component
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" >Action</a>
                    <a className="dropdown-item" >Another action</a>
                    <a className="dropdown-item" >Something else here</a>
                </div>
                </div>
        </div>
    )
}

export default Dropdown;
