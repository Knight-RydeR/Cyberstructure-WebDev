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
    useEffect(() => {
        defaultReq.get(`/search/allProducts`).then(response => {
            console.log(response.data.data)
            setProduct(response.data.data)

        }).catch(error => console.log(error))

    }, [])
    return (
        <div>
            <Nav name="Products" />
            {selectedItem && <Popup trigger={buttonPopup} setTrigger={setButtonPopup} category={selectedItem.category} name={selectedItem.nameOfProduct} price={selectedItem.price}>
            </Popup>}
            <div className="Main" style={{}}>
                <div className="Product-CardArea">
                    {
                        product.length > 0 && product.map(i => {
                            return (
                                <div>
                                    {/* <Link to="/products" style={{textDecoration: "none"}}> */}
                                        <ActionCard name={i.nameOfProduct} description="Data picked up from the database" source={logo6} />
                                        <button className="btn btn-warning" onClick={() => {
                                            setSelectedItem(i);
                                            setButtonPopup(true);
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

export default Products;