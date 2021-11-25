
import logo from '../images/ssss.png';
import '../styles/App.css';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import axios from "axios";
import { useHistory } from 'react-router-dom';

const Signup = () => {
  let [username, setUsername] = useState("");
  let [nick, setnick] = useState("");
  let [password, setPassword] = useState("");
  let history = useHistory();
  if (localStorage.getItem('accessToken')) history.push('/');
  let baseUrl = 'http://localhost:1639/api';
  let defaultReq = axios.create({
    baseURL: baseUrl,
  });

  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  const register = (e) => {
    e.preventDefault();

    defaultReq.post('/register', {
      username, nick, password

    }).then(response => {

      if (response.status == 200) {
        toast.success("Registration Successful!", {
          position: toast.POSITION.TOP_RIGHT
        });
        history.push('/login');

      }
      else {
        console.log(response)
      }
    })
      .catch(err => {

        toast.error(`Registration Failed !,error is ${err}`, {
          position: toast.POSITION.TOP_RIGHT
        });
      });
  }

  return (
    <div>
      <div className="AppLogin">
        <header className="App-headerLogin">
          <h1>CyberStructure - Signup</h1>
          <img src={logo} /*className="App-logo"*/ alt="logo" />
        </header>
        <header className="App-headerLogin">
          <div className="AppLogin">
            <form onSubmit={register}>
              <div>
                <div className="mb-4">
                  <label for="username" class="form-label">Username</label>
                  <input type="text" class="form-control" id="username" placeholder="Enter your real name here" value={username} onChange={event => setUsername(event.target.value)} />
                </div>
                <div className="mb-4">
                  <label for="nick" class="form-label">Nick</label>
                  <input type="text" class="form-control" id="nick" placeholder="Enter your nick here" value={nick} onChange={event => setnick(event.target.value)} />
                </div>
                <div className="mb-5">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your password here" value={password} onChange={event => setPassword(event.target.value)} />
                </div>
              </div>
              <div>
                <button type="submit" class="btn btn-warning mb-4" >Sign up</button>
              </div>


            </form>
          </div>
        </header>
      </div>
    </div>

  );
};
export default Signup;