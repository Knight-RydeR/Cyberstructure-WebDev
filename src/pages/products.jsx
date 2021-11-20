import React, { useState,useEffect } from 'react'
import logo1 from '../images/about.png';
import logo2 from '../images/best.jpg';
import logo3 from '../images/comp.jpg';
import logo4 from '../images/cons.jpg';
import logo5 from '../images/makeA.jpg';
import logo6 from '../images/pro.jpg';
import { authAxios } from './axiosInstances';

import '../styles/App.css';
import ActionCard from '../components/ActionAreaCard'
import { Link } from "react-router-dom";
import Nav from '../components/navbar/Navbar'
import axios from 'axios';
import { useParams } from 'react-router';
// import NavSearch from '../components/NavSearch'

const Products = ()=>{
    const [product,setProduct] = useState([]);
    const params = useParams();
    let baseUrl = 'http://localhost:1639/api';

    let defaultReq = axios.create({
        baseURL:baseUrl,
      });
      
    // useEffect( ()=>{
    //     defaultReq.get(`/search/category/${params.categoryName}`).then(response=>{
    //         console.log(response.data.data)
    //         setProduct(response.data.data)

    //     }).catch(error=>console.log(error))

    // },[])
    useEffect( ()=>{
        defaultReq.get(`/search/allProducts`).then(response=>{
            console.log(response.data.data)
            setProduct(response.data.data)

        }).catch(error=>console.log(error))

    },[])
        return (
            <div>
                <Nav name="Products"/>
                {/* <NavSearch /> */}
        <div className="">
          <div className="Hub-CardArea">
              {
                  product.map(i => {
                      return(
<div>
                    <Link to="/products">
                        <ActionCard name={i.nameOfProduct} description="Data picked up from the database" source={logo6}/>
                    </Link>
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