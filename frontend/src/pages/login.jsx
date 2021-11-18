import React, { Component } from 'react'
import logo from '../images/ssss.png';
import '../styles/App.css';

export default class Login extends Component {
    render() {
        return (
            <div>
              <div className="AppLogin">
                <header className="App-headerLogin">
                  <h1>CyberStructure - Login</h1>
                  <img src={logo} /*className="App-logo"*/ alt="logo" />
                </header>
                <header className="App-headerLogin">
                <div className="AppLogin">
                <form>
                    <div>
                        <div className="mb-3">
                            <label for="Email" class="form-label mb-3">Nickname</label>
                            <input type="text" class="form-control" id="Email" placeholder="Enter your nickname here"  onChange={this.qualityStore}/>
                        </div>
                            <div className="mb-5">
                                <label for="exampleInputPassword1" class="form-label mb-3">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your password here" onChange={this.passStore}/>
                            </div>
                    </div>
                        <div>
                            <button type="submit" class="btn btn-warning mb-4" onClick={this.login}>Login</button>
                            <h5 className="mb-4" style={{color: "white"}}>Not registered?</h5>
                            <a class="btn btn-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Click here to register now!" href="/signup" role="button">Sign-up.</a>
                        </div>
                </form>
                </div>
                </header>
              </div>
            </div>
      )
    }
}
