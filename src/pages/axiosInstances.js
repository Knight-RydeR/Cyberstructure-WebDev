import axios from 'axios'


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
  baseURL:baseUrl,
 
})
