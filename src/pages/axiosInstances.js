import axios from 'axios'

import jwt_decode from 'jwt-decode'
let baseUrl = 'http://localhost:1639/api/auth';
let baseUrl2 = 'http://localhost:1639/api/auth/admin';
let baseUrl3 = 'http://localhost:1639/api/';
let accessToken = JSON.parse(localStorage.getItem('accessToken')) || "";

export const authAxios = axios.create({
  baseURL:baseUrl,
  headers : {
    Authorization : `Bearer ${accessToken}`
  }
})
export const authAxiosAdmin = axios.create({
  baseURL:baseUrl2,
  headers : {
    Authorization : `Bearer ${accessToken}`
  }
})

export const authAxiosDefault = axios.create({
  baseURL:baseUrl3,
 
})

export const checkJWTVALID = ()=> {
  var token = JSON.parse(localStorage.getItem('accessToken'));
  // console.log("here")
  // console.log(token)
  if(token) {
  var {exp} = jwt_decode(token);
  if (Date.now() >= exp * 1000) {
    return false;
  }
  else return true

}
else return false;
}
