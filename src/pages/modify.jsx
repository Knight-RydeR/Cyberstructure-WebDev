import React, { useState } from 'react'
import logo6 from '../images/sim.png';
import logo4 from '../images/follow.png';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

import '../styles/App.css';
import ActionCard from '../components/ActionAreaCard'
import { Link } from "react-router-dom";
import Nav from '../components/navbar/Navbar'
import Drop from '../components/DropdownHUB'
import { authAxios,authAxiosAdmin,authAxiosDefault,checkJWTVALID } from './axiosInstances';

const Modify = () => {
    let history = useHistory();
    if (!checkJWTVALID()) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("admin");
        history.push("/login")
    
    
        }
        
    let [username, setUsername] = useState("");
    let [price, setPrice] = useState("");
    let [category, setCategory] = useState("");
    let [power, setPower] = useState("");
    let [selectedFile, setSelectedFile] = useState({});

   
    if (localStorage.getItem('accessToken')) history.push('/modify');
    else history.push('/login')

  

    console.log(category + "2")

    const modify = {

    }
    // const create = async (e) => {
    //     e.preventDefault();
    //     console.log(`in create`);
    //     let catID;
    //    await  authAxiosAdmin.get(`/getCategory/${category}`).then(response=> {
    //         if (response.status == 200) {
    //             console.log(response)
    //             catID = response.data.data
                
    //         }
    //         else console.log(response);
            
    //     })
    //     await authAxiosAdmin.post('/createProduct', {
    //         nameOfProduct:username,
    //         price,
    //         category:catID,
    //         power,
    //         imageUrl:selectedFile
    //       }).then(response => {

    //         if (response.status == 200) {
    //             toast.success("Entry Successful!", {
    //                 position: toast.POSITION.TOP_RIGHT
    //             });

    //             history.push('/createProduct');

    //         }
    //         else {
    //             console.log(response)
    //         }
    //     })
    //         .catch(err => {
    //             toast.error(`Product Creation Failed !,error is ${err}`, {
    //                 position: toast.POSITION.TOP_RIGHT
    //             });
    //         });
    // }

    const handleFileChange =  async (e)=> {
    
            const file = e.target.files[0];
            const base64 = await convertToBase64(file);
            setSelectedFile(base64);
      
    }
        
    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      };

    return (
        <div>
            <Nav name="Update Products" />
            <div className="Main">
                <div className="AboutPage">
                    <div>
                        <h1 style={{ color: "white" }}>Select Product to Modify</h1>
                        <div className="compatDrop mb-3">
                            <Drop name="Select Category" type="createProduct" changeC={setCategory} catVal={category} />
                        </div>
                        <div className="AppLogin">
                            <form onSubmit={modify}>
                                <div>
                                    <div className="mb-3">
                                        <label for="Username" class="form-label mb-3" style={{color: "white"}} >Name</label>
                                        <input type="text" class="form-control" id="Username" placeholder="Enter Product Name here" value={username} onChange={event => setUsername(event.target.value)} />
                                    </div>

                                    <div className="mb-3">
                                        <label for="productPrice" class="form-label mb-3" style={{color: "white"}}>Price</label>
                                        <input type="text" class="form-control" id="productPrice" placeholder="Enter Product Price here" value={price} onChange={event => setPrice(event.target.value)} />
                                    </div>

                                    <div className="mb-3">
                                        <label for="productPowerRating" class="form-label mb-3" style={{color: "white"}}>Power rating</label>
                                        <input type="text" class="form-control" id="productPowerRating" placeholder="Enter Product Price here" value={power} onChange={event => setPower(event.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="productImage" class="form-label mb-3" style={{color: "white"}}>Add Image</label>
                                        <input type="file" class="form-control" id="productImage"  placeholder="Add Image" onChange={event => handleFileChange(event)} />
                                    </div>

                                    {/* <div className="mb-3">
                                        <label for="Username" class="form-label mb-3" style={{color: "white"}}>Username</label>
                                        <input type="text" class="form-control" id="Username" placeholder="Enter Product here" value={username} onChange={event => setUsername(event.target.value)} />
                                    </div> */}

                                    {/* <div className="mb-3">
                                        <label for="Username" class="form-label mb-3" style={{color: "white"}}>Username</label>
                                        <input type="text" class="form-control" id="Username" placeholder="Enter Product here" value={username} onChange={event => setUsername(event.target.value)} />
                                    </div> */}

                                    <div className="mb-4">
                                        <h3 style={{color: "gold"}}>Add image entry point here</h3>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" class="btn btn-warning mb-4" >Send Update Request</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modify;