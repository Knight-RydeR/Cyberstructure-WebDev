import React from 'react'

export const Dropdown = (props) => {
    return (
        <div>
            <div class="dropdown">
                <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Choose your component
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" >Action</a>
                    <a class="dropdown-item" >Another action</a>
                    <a class="dropdown-item" >Something else here</a>
                </div>
                </div>
        </div>
    )
}

export default Dropdown;
