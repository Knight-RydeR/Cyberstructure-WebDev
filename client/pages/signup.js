import React, { Component } from 'react'
import axios from 'axios'

export default class signup extends Component {
    constructor (props){
        super(props);
        this.state = {
            vendorID:"Enter your unique ID here",
            password:"Enter your password here",
            nick:"Enter your username here"
        };
        this.login = this.login.bind(this);
        this.vendorStore = this.vendorStore.bind(this);
        this.passStore = this.passStore.bind(this);
        this.nickStore = this.nickStore.bind(this);
    }

    login()
    {
        let x = 2;
    }

    vendorStore(e)
    {
        this.setState({
            vendorID: e.target.value
        })
    }

    passStore(e)
    {
        this.setState({
            password: e.target.value
        })
    }

    nickStore(e)
    {
        this.setState({
            nick: e.target.value
        })
    }

    render() {
        return (
            //<React.Fragment>
            
                <div className="container">
                <form>
                    <div className="row">
                        <h1 className="offset-2 col-8 mb-5">Signup Page</h1>
                        <div className="offset-2 col-8 mb-4">
                            <label for="Email" class="form-label">Name</label>
                            <input type="text" class="form-control" id="Email" placeholder={this.state.vendorID} value={this.state.vendorID} onChange={this.vendorStore}/>
                        </div>
                        <div className="offset-2 col-8 mb-4">
                            <label for="Email" class="form-label">Username</label>
                            <input type="text" class="form-control" id="Email" placeholder={this.state.vendorID} value={this.state.vendorID} onChange={this.nickStore}/>
                        </div>
                        {/* <div className="offset-2 col-8 mb-4">
                            <label for="Email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="Email" placeholder={this.state.vendorID} value={this.state.vendorID} onChange={this.vendorStore}/>
                        </div>
                        <div className="offset-2 col-8 mb-4">
                            <label for="Email" class="form-label">Contact Number</label>
                            <input type="text" class="form-control" id="Email" placeholder={this.state.vendorID} value={this.state.vendorID} onChange={this.vendorStore}/>
                        </div> */}
                        <div className="offset-2 col-8 mb-4">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your password here"  onChange={this.passStore}/>
                        </div>
                        <div className="offset-2 col-8 mb-5">
                            <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your password here" onChange={this.vendorStore}/>
                        </div>
                    </div>
                        <div className="row">
                            <button type="submit" class="btn btn-info col-2 offset-5 mb-4" onClick={this.login}>Register</button>
                        </div>
                        <div>
                            
                        </div>
                </form>
                </div>
            //</React.Fragment>
            
        ) 
    }
}

