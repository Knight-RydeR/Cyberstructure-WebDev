import React from 'react'

import '../styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from 'react-toastify';

import { Link, Route, Switch} from "react-router-dom";
import Home from "./home";
import Hub from "./hub";
import About from "./about";
import Login from "./login"
import Register from "./signup";
// import Products from "./products";
import MakeBuild from "./makeBuild";
// import Compat from "./compat";
// import Consumption from "./consumption";
// import BestPrice from "./bestPrice";
// import Community from "./community";
import UserProfile from "./userProfile";
import axios from 'axios';
// import CheckBuild from "./checkBuild";

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
     <Route path="/"  exact> <Home/></Route>
     <Route path="/hub"  exact> <Hub/></Route>
     <Route path="/login"  exact> <Login/></Route>
     <Route path="/signup"  exact> <Register/></Route>
        {/* <Route path="/products" component={Products}/> */}
        <Route path="/MakeBuild"  exact> <MakeBuild/></Route>
        {/* <Route path="/compat" component={Compat}/> */}
        {/* <Route path="/consumption" component={Consumption}/>
        <Route path="/bestPrice" component={BestPrice}/>
        <Route path="/community" component={Community}/> */}
      <Route path="/userProfile"  exact> <UserProfile/></Route>        {/* <Route path="/checkBuild" component={CheckBuild}/> */}
      
   
    </main>
  );
}

export default App;
