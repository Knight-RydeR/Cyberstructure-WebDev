import React, { Component } from 'react'
import logo from '../images/ss.png';
import '../styles/App.css';

class Home extends Component {
    render() {
        return (
        <div>
          <div className="App">
            <header className="App-header">
              <h1>CyberStructure</h1>
              <img src={logo} /*className="App-logo"*/ alt="logo" />
              <p style={{color: "white"}}>
                The perfect <code>place</code> for all your PC needs.
              </p>
              <a
                className="App-link"
                href="/hub"
                // target="_blank"
                // rel="noopener noreferrer"
              >
                Continue to Home
              </a>
            </header>
          </div>
        </div>
  )
}
}

export default Home;