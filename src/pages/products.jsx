import React, { useState, useEffect } from 'react'
import logo6 from '../images/pro.jpg';
import { authAxios } from './axiosInstances';
import Popup from "../components/Popup";
import '../styles/App.css';
import ActionCard from '../components/ActionAreaCard'
import { Link } from "react-router-dom";
import Nav from '../components/navbar/Navbar'
import axios from 'axios';
import { useParams } from 'react-router';
// import NavSearch from '../components/NavSearch'

const Products = () => {
    const [product, setProduct] = useState([]);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [cardInvis, setCardInvis] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);
    
    var productCategory = "";
    var productName = "";
    var productPrice = "";
    const params = useParams();
    let baseUrl = 'http://localhost:1639/api';

    let defaultReq = axios.create({
        baseURL: baseUrl,
    });

//     const Setting = (props) => {
//         // productCategory = props["category"];
//         // productName = props["name"];
//         // productPrice = props["price"];
//         console.log(props);
// }
    // useEffect( ()=>{
    //     defaultReq.get(`/search/category/${params.categoryName}`).then(response=>{
    //         console.log(response.data.data)
    //         setProduct(response.data.data)

    //     }).catch(error=>console.log(error))

    // },[])
    const removeButton = () => {

    }

    const modifyButton = () => {

    }

    useEffect(() => {
        defaultReq.get(`/product`).then(response => {
            console.log(response.data.data)
            setProduct(response.data.data)

        }).catch(error => console.log(error))

    }, [])

    if (localStorage.getItem('admin') == '1') {
        return (
            <div>
                <Nav name="Products" />
                {selectedItem && <Popup trigger={buttonPopup} setTrigger={setButtonPopup} setCard={setCardInvis} category={selectedItem.category} name={selectedItem.nameOfProduct} price={selectedItem.price}>
                </Popup>}
                <div className="Main">
                    <div className="Product-CardArea">
                        {
                            product.length > 0 && product.map(i => {
                                return (
                                    <div>
                                        {/* <Link to="/products" style={{textDecoration: "none"}}> */}
                                            <ActionCard name={i.nameOfProduct} description="Data picked up from the database" source={logo6} cardTrigger={cardInvis} setTrigger={setCardInvis}/>
                                            <button className="btn btn-warning" onClick={() => {
                                                setSelectedItem(i);
                                                setButtonPopup(true);
                                                setCardInvis(false);
                                            }}>
                                                View details</button>
                                            <button className="btn btn-danger" onClick={() => {
                                                removeButton();
                                            }}>Remove</button>
                                            <button className="btn btn-info" onClick={() => {
                                                modifyButton();
                                            }}>Modify item detail</button>
                                        {/* </Link> */}
                                    </div>
                                );
                            })
                        }
    
    
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <Nav name="Products" />
                {selectedItem && <Popup trigger={buttonPopup} setTrigger={setButtonPopup} setCard={setCardInvis} category={selectedItem.category} name={selectedItem.nameOfProduct} price={selectedItem.price}>
                </Popup>}
                <div className="Main">
                    <div className="Product-CardArea">
                        {
                            product.length > 0 && product.map(i => {
                                return (
                                    <div>
                                        {/* <Link to="/products" style={{textDecoration: "none"}}> */}
                                            <ActionCard name={i.nameOfProduct} description="Data picked up from the database" source={logo6} cardTrigger={cardInvis} setTrigger={setCardInvis}/>
                                            <button className="btn btn-warning" onClick={() => {
                                                setSelectedItem(i);
                                                setButtonPopup(true);
                                                setCardInvis(false);
                                            }}>
                                                View details</button>
                                        {/* </Link> */}
                                    </div>
                                );
                            })
                        }
    
    
                    </div>
                </div>
            </div>
        )
    }

}

export default Products;