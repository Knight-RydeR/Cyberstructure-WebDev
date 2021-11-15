import React, { Component } from 'react'
import axios from 'axios'

export default class login extends Component {
    constructor (props){
        super(props);
        this.state = {
            qualityID: "Enter your unique ID here",
            password: "Enter your password here"
        };
        this.login = this.login.bind(this);
        this.qualityStore = this.qualityStore.bind(this);
        this.passStore = this.passStore.bind(this);
    }

    login()
    {
        let x = 2;
    }

    qualityStore(e)
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

    render() {
        return (
            //<React.Fragment>
                <div className="container">
                     <h1 className="offset-2 col-8 mb-5">Login Page</h1>
                <form>
                    <div className="row">
                        <div className="offset-2 col-8 mb-4">
                            <label for="Email" class="form-label">Name</label>
                            <input type="text" class="form-control" id="Email" placeholder="Enter your unique ID here"  onChange={this.qualityStore}/>
                        </div>
                            <div className="offset-2 col-8 mb-5">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your password here" onChange={this.passStore}/>
                            </div>
                    </div>
                        <div className="row">
                            <button type="submit" class="btn btn-info col-2 offset-5 mb-4" onClick={this.login}>Login</button>
                            <h5 className="offset-5 mb-4">Not registered?</h5>
                            <a class="btn btn-info col-2 offset-5" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Click here to register now!" href="/signup" role="button">Sign-up.</a>
                        </div>
                        <div>
                            
                        </div>
                </form>
                </div>
            //</React.Fragment>
            
        ) 
    }
}

