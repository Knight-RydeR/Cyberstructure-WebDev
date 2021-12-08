import React from 'react'

export const Dropdown = ({itemsArray}) => {
    return (
        <div>
            <div className="dropdown">
                <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Choose your component
                </button>
                <div className="dropdown<-menu" aria-labelledby="dropdownMenuButton">

                    {itemsArray && itemsArray.map(item=>{
                        return( <a className="dropdown-item" >{item.name}</a>)
                   }
                    )};
                    
                </div>
                </div>
        </div>
    )
}

export default Dropdown;
