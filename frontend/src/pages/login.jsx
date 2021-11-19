
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
                  


                  localStorage.setItem('accessToken',JSON.stringify(response.data.data))
                 history.push('/userProfile');

              
            }
            else{
                console.log(response)
            }
            
         })
         .catch(err=>{
             
             toast.error(`Login Failed !,error is ${err}`, {
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
                            <label for="Username" class="form-label mb-3">Username</label>
                            <input type="text" class="form-control" id="Username" placeholder="Enter your Username here"  value={username} onChange={event=>setUsername(event.target.value)}/>
                        </div>
                            <div className="mb-5">
                                <label for="exampleInputPassword1" class="form-label mb-3">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your password here" value = {password} onChange={event=>setPassword(event.target.value)}/>
                            </div>
                    </div>
                        <div>
                            <button type="submit" class="btn btn-warning mb-4" >Login</button>
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
export default Login;
