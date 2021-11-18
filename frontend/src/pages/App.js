import React from 'react'

import '../styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
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
// import CheckBuild from "./checkBuild";

function App() {
  return (
    <div>
      <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/Home" exact component={Home}/>
        <Route path="/hub" component={Hub}/>
        <Route path="/about" component={About}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Register}/>
        {/* <Route path="/products" component={Products}/> */}
        <Route path="/makeBuild" component={MakeBuild}/>
        {/* <Route path="/compat" component={Compat}/> */}
        {/* <Route path="/consumption" component={Consumption}/>
        <Route path="/bestPrice" component={BestPrice}/>
        <Route path="/community" component={Community}/> */}
        <Route path="/userProfile" component={UserProfile}/>
        {/* <Route path="/checkBuild" component={CheckBuild}/> */}
      </Switch>
    </Router>
    </div>
  );
}

export default App;
