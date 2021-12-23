import React from 'react'

import '../styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import { ToastContainer, toast } from 'react-toastify';

import { Link, Route, Switch} from "react-router-dom";
import Home from "./home";
import Hub from "./hub";
import About from "./about";
import Login from "./login"
import Register from "./signup";
import CreateProduct from "./createProduct";
import MakeBuild from "./makeBuild";
// import Compat from "./compat";
// import Consumption from "./consumption";
import BestPrice from "./bestPrice";
import Community from "./community";
import UserProfile from "./userProfile";
import axios from 'axios';
import Products from './products';
import CheckBuild from "./checkBuild";
import Users from "./users"
import Modify from "./modify";

function App() {
  let baseUrl = 'http://localhost:1639/api';

  const authAxios = axios.create({
    baseURL:baseUrl,
    headers : {
      Authorization : `Bearer accessToken`
    }
  })

 

  return (
    <main>
     
     <ToastContainer />
     <Route path="/"  exact> <Home/></Route>
     <Route path="/home"  exact> <Home/></Route>
     <Route path="/hub"  exact> <Hub/></Route>
     <Route path="/login"  exact> <Login/></Route>
     <Route path="/signup"  exact> <Register/></Route>
     <Route path="/createProduct" exact> <CreateProduct/></Route>
      <Route path="/MakeBuild"  exact> <MakeBuild/></Route>
      {/* <Route path="/compat" component={Compat}/> */}
      <Route path="/modify" component={Modify}/>
        {/* <Route path="/consumption" component={Consumption}/> */}
        <Route path="/users" component={Users}/>
        <Route path="/bestPrice" component={BestPrice}/>
        <Route path="/community" component={Community}/>
      <Route path="/userProfile"  exact> <UserProfile/></Route>
      <Route path="/products"  exact> <Products/></Route>
      <Route path="/about"  exact> <About/></Route>        
      <Route path="/checkBuild" component={CheckBuild}/>
      
   
    </main>
  );
}

export default App;
