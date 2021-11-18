import React, { Component } from 'react'
import logo from '../images/ssss.png';
import '../styles/App.css';

export default class Register extends Component {
    render() {
        return (
            <div>
              <div className="AppLogin">
                <header className="App-headerLogin">
                  <h1>CyberStructure - Signup</h1>
                  <img src={logo} /*className="App-logo"*/ alt="logo" />
                </header>
                <header className="App-headerLogin">
                <div className="AppLogin">
                <form>
                    <div>
                        <div className="mb-4">
                            <label for="Email" class="form-label">Name</label>
                            <input type="text" class="form-control" id="Email" placeholder="Enter your real name here"  onChange={this.qualityStore}/>
                        </div>
                        <div className="mb-4">
                            <label for="Email" class="form-label">Nickname</label>
                            <input type="text" class="form-control" id="Email" placeholder="Enter your nickname here"  onChange={this.qualityStore}/>
                        </div>
                            <div className="mb-5">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your password here" onChange={this.passStore}/>
                            </div>
                    </div>
                        <div>
                            <button type="submit" class="btn btn-warning mb-4" onClick={this.login}>Sign up</button>
                        </div>
                </form>
                </div>
                </header>
              </div>
            </div>
      )
    }
}