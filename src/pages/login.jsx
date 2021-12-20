
import logo from '../images/ssss.png';
import '../styles/App.css';
import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwt_decode from "jwt-decode";



import axios from "axios";
import { useHistory } from 'react-router-dom';

const Login =  ()=> {
    let [username,setUsername] = useState("");
    let [password,setPassword] = useState("");
     let history = useHistory();
     if(localStorage.getItem('accessToken')) history.push('/userProfile');
     let baseUrl = 'http://localhost:1639/api';
     let defaultReq = axios.create({
        baseURL:baseUrl,
      });
      

    

     const login=  (e)=> {
        e.preventDefault();
    
         defaultReq.post('/login',{
             username,password

         }).then(response=>{
         
        
             
            if(response.status==200){
             
                toast.success("Login Successful !", {
                    position: toast.POSITION.TOP_RIGHT
                  });
                  
                  var token = response.data.data;
                  var decoded = jwt_decode(token);
                  if (decoded.isAdmin) localStorage.setItem('admin', '1');

                  localStorage.setItem('accessToken',JSON.stringify(response.data.data))
                  localStorage.setItem('loggedIn',"1")
                 history.push('/userProfile');

              
            }
            else{
                console.log(response)
            }
            
         })
         .catch(err=>{
             
             toast.error(`Login Failed! Error is ${err}`, {
                position: toast.POSITION.TOP_RIGHT
              });
         });
        

     }
  
        return (
            <div>
              <div className="AppLogin">
                <header className="App-headerLogin">
                  <h1>CyberStructure - Login</h1>
                  <img src={logo} /*className="App-logo"*/ alt="logo" />
                </header>
                <header className="App-headerLogin">
                <div className="AppLogin">
                <form onSubmit={login}>
                    <div>
                        <div className="mb-3">
                            <label htmlFor="Username" className="form-label mb-3">Username</label>
                            <input type="text" className="form-control" id="Username" placeholder="Enter your Username here"  value={username} onChange={event=>setUsername(event.target.value)}/>
                        </div>
                            <div className="mb-5">
                                <label htmlFor="exampleInputPassword1" className="form-label mb-3">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your password here" value = {password} onChange={event=>setPassword(event.target.value)}/>
                            </div>
                    </div>
                        <div>
                            <button type="submit" className="btn btn-warning mb-4" >Login</button>
                            <h5 className="mb-4" style={{color: "white"}}>Not registered?</h5>
                            <a className="btn btn-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Click here to register now!" href="/signup" role="button">Sign-up.</a>
                        </div>
                </form>
                </div>
                </header>
              </div>
            </div>
      )
    
}
export default Login;
