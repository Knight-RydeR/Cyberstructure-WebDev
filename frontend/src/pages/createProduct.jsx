import React, { useState } from 'react'
import logo6 from '../images/sim.png';
import logo4 from '../images/follow.png';
import { useHistory } from 'react-router-dom';
import axios from "axios";

import '../styles/App.css';
import ActionCard from '../components/ActionAreaCard'
import { Link } from "react-router-dom";
import Nav from '../components/navbar/Navbar'
import Drop from '../components/DropdownHUB'


const CreateProduct = () => {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let history = useHistory();
    // if (localStorage.getItem('accessToken')) history.push('/userProfile');
    // let baseUrl = 'http://localhost:1639/api';
    // let defaultReq = axios.create({
    //     baseURL: baseUrl,
    // });

    const login = (e) => {
        e.preventDefault();
        // defaultReq.post('/login', {
        // username, password
        // }).then(response => {

        //     if (response.status == 200) {
        //         toast.success("Login Successful !", {
        //             position: toast.POSITION.TOP_RIGHT
        //         });

        //         localStorage.setItem('accessToken', JSON.stringify(response.data.data))
        //         history.push('/userProfile');

        //     }
        //     else {
        //         console.log(response)
        //     }
        // })
        //     .catch(err => {
        //         toast.error(`Login Failed !,error is ${err}`, {
        //             position: toast.POSITION.TOP_RIGHT
        //         });
        //     });
    }

    return (
        <div>
            <Nav name="Create Product" />
            <div className="Main">
                <div className="AboutPage">
                    <div>
                        <h1 style={{ color: "white" }}>Select Product to Add</h1>
                        <div className="compatDrop mb-3">
                            <Drop name="Select Component" type="createProduct" />
                        </div>
                        <div className="AppLogin">
                            <form onSubmit={login}>
                                <div>
                                    <div className="mb-3">
                                        <label for="Username" class="form-label mb-3" style={{color: "white"}} >Name</label>
                                        <input type="text" class="form-control" id="Username" placeholder="Enter Product Name here" value={username} onChange={event => setUsername(event.target.value)} />
                                    </div>

                                    <div className="mb-3">
                                        <label for="Username" class="form-label mb-3" style={{color: "white"}}>Price</label>
                                        <input type="text" class="form-control" id="Username" placeholder="Enter Product Price here" value={username} onChange={event => setUsername(event.target.value)} />
                                    </div>

                                    <div className="mb-3">
                                        <label for="Username" class="form-label mb-3" style={{color: "white"}}>Username</label>
                                        <input type="text" class="form-control" id="Username" placeholder="Enter Product here" value={username} onChange={event => setUsername(event.target.value)} />
                                    </div>

                                    <div className="mb-3">
                                        <label for="Username" class="form-label mb-3" style={{color: "white"}}>Username</label>
                                        <input type="text" class="form-control" id="Username" placeholder="Enter Product here" value={username} onChange={event => setUsername(event.target.value)} />
                                    </div>

                                    <div className="mb-4">
                                        <h3 style={{color: "gold"}}>Add image entry point here</h3>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" class="btn btn-warning mb-4" >Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateProduct;