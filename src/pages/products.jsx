import React, { useState, useEffect } from 'react'
import logo6 from '../images/pro.jpg';
import Popup from "../components/Popup";
import '../styles/App.css';
import ActionCard from '../components/ActionAreaCard'
import { Link } from "react-router-dom";
import Nav from '../components/navbar/Navbar'
import { authAxios,authAxiosAdmin,authAxiosDefault,checkJWTVALID } from './axiosInstances';
import { useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router';


// import NavSearch from '../components/NavSearch'

const Products = () => {
    let history = useHistory();

    console.log(localStorage.getItem("accessToken")==null);

    if(!localStorage.getItem("accessToken")==null){
    if (!checkJWTVALID()) {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("admin");
    history.push("/products")


    }
}
    const [product, setProduct] = useState([]);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [cardInvis, setCardInvis] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);
    
    var productCategory = "";
    var productName = "";
    var productPrice = "";
    const params = useParams();


//     const Setting = (props) => {
//         // productCategory = props["category"];
//         // productName = props["name"];
//         // productPrice = props["price"];
//         console.log(props);
// }
    // useEffect( ()=>{
    //     authAxiosDefault.get(`/search/category/${params.categoryName}`).then(response=>{
    //         console.log(response.data.data)
    //         setProduct(response.data.data)

    //     }).catch(error=>console.log(error))

    // },[])
    const removeButton = (id) => {
        console.log(id);
        authAxiosAdmin.delete(`/deleteProduct/${id}`).then(response=> {
            if (response.status == 200) {
                toast.success("Deletion Successful!", {
                    position: toast.POSITION.TOP_RIGHT
                })}
                else {
                    console.log(response)
                }

        })
        //to do add api integration

    }

    const modifyButton = (id,updatedParams) => {
        //add api integration
        // authAxiosAdmin.patch(`/updateProduct/${id}`,{...updatedParams}).then(response=> {
            
        //     if (response.status == 200) {
        //         toast.success("Modification Successful!", {
        //             position: toast.POSITION.TOP_RIGHT
        //         })}
        //         else {
        //             console.log(response)
        //         }

        // })

    }

    useEffect(() => {
        authAxiosDefault.get(`/product`).then(response => {
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
                                            <ActionCard name={i.nameOfProduct} description="Data picked up from the database" source={i.imageUrl} cardTrigger={cardInvis} setTrigger={setCardInvis}/>
                                            <button className="btn btn-warning" onClick={() => {
                                                setSelectedItem(i);
                                                setButtonPopup(true);
                                                setCardInvis(false);
                                            }}>
                                                View details</button>
                                            <button className="btn btn-danger" onClick={() => {
                                                removeButton(i['_id']);
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
                                            <ActionCard name={i.nameOfProduct} description="Data picked up from the database" source={i.imageUrl} cardTrigger={cardInvis} setTrigger={setCardInvis}/>
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