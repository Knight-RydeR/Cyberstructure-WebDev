import { authAxios,authAxiosAdmin,authAxiosDefault,checkJWTVALID } from './axiosInstances';
import React, { useState, useEffect } from 'react'
import Popup from "../components/Popup";
import logo from '../images/pc.jpg';
import '../styles/App.css';
import ActionCard from '../components/ActionAreaCard'
import { Link } from "react-router-dom";
import Nav from '../components/navbar/Navbar'
import Drop from '../components/DropdownHUB'
import jwt_decode from "jwt-decode";


const CheckBuild = () => {
    const [build, setBuild] = useState([]);
    const [product, setProduct] = useState([]);
    let [filtered,setFiltered] = useState([]);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [cardInvis, setCardInvis] = useState(true);
    const [search,setSearch] = useState("");
    const [selectedItem, setSelectedItem] = useState(null);
    
    
    // let count = 1;

    useEffect(() => {
        var token = JSON.parse(localStorage.getItem('accessToken'));
        console.log(token);
      
            var decoded = jwt_decode(token);
            console.log(decoded)
            authAxiosDefault.get(`/getUserBuild/${decoded.username}`).then(response => {
                console.log(response.data.data);
                setBuild(response.data.data)
        
            }).catch(error => console.log(error))
            

        
        },[])
        
        
    
    

        return (
            <div>
                <Nav name="Check my Builds" />
                {selectedItem && <Popup type="community" trigger={buttonPopup} setTrigger={setButtonPopup} setCard={setCardInvis} /*category={selectedItem.category} name={selectedItem.nameOfProduct} price={selectedItem.price}*/ CPU={selectedItem.Processor} MB={selectedItem.Motherboard} RAM={selectedItem.Ram} PSU={selectedItem.PSU} HD={selectedItem.Storage} GPU={selectedItem.GPU} COOL={selectedItem.Cooler} FANS={selectedItem.Fans} CS={selectedItem.Case} rate={selectedItem.buildRating}>
                </Popup>}
                {/* <input className="form-control" type="search" value={search} placeholder="Search" aria-label="Search" onChange={(event)=>
                    {
                        
                        
                        if(event.target.value==""){ 
                            setSearch(event.target.value);
                            setFiltered(product);}
                        else{
                            console.log(product[0].nameOfProduct.startsWith("B"));
                        let tempArray = product.filter(e=>e['nameOfProduct'].toLowerCase().startsWith(event.target.value.trim().toLowerCase()));
                        console.log(tempArray);
                        
                        setFiltered([...tempArray])
                        setSearch(event.target.value)
                        }
                        }}></input> */}

                <div className="Main">
          <div className="Hub-CardArea">
          {
                            
                            build.length > 0 && build.map(i => {
                                return (
                                    <div>
                                        {/* <Link to="/products" style={{textDecoration: "none"}}> */}
                                            <ActionCard name={i.userName} description="" source={logo} cardTrigger={cardInvis} setTrigger={setCardInvis}/>
                                            <button className="btn btn-warning" onClick={() => {
                                                setSelectedItem(i);
                                                setButtonPopup(true);
                                                setCardInvis(false);
                                            }}>
                                                View details</button>
                                    </div>
                                );
                            })
                        }
          </div>
        </div>
            </div>
        )
}

export default CheckBuild;