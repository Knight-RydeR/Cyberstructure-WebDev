import React, { Component } from 'react'
import axios from 'axios'

export default class signup extends Component {
    constructor (props){
        super(props);
        this.state = {
            vendorID:"",
            password:"",
            nick:""
        };
        this.login = this.login.bind(this);
        this.vendorStore = this.vendorStore.bind(this);
        this.passStore = this.passStore.bind(this);
        this.nickStore = this.nickStore.bind(this);
    }
//vendor id username , passtore password, nickStore nick
   async login()
    {
        let x = 2;
       let d = await axios.post('http://localhost:1639/api/register',{
            username:this.state['vendorID'],password:this.state['password'],nick:this.state['nick']
        });
        console.log(d);
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
                            <label for="Email" className="form-label">Nick</label>
                            <input type="text" className="form-control" id="Email" placeholder="Nickname" value={this.state.nickStore} onChange={this.nickStore}/>
                        </div>
                        <div className="offset-2 col-8 mb-4">
                            <label for="Email" className="form-label">Username</label>
                            <input type="text" className="form-control" id="Email" placeholder="Username" value={this.state.vendorID} onChange={this.vendorStore}/>
                        </div>
                 
                        <div className="offset-2 col-8 mb-4">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your password here"  onChange={this.passStore}/>
                        </div>
                     
                    </div>
                        <div className="row">
                            <button type="submit" className="btn btn-info col-2 offset-5 mb-4" onClick={this.login}>Register</button>
                        </div>
                        <div>
                            
                        </div>
                </form>
                </div>
            //</React.Fragment>
            
        ) 
    }
}