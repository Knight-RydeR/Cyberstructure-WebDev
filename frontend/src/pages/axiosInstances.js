import axios from 'axios'


let baseUrl = 'http://localhost:1639/api/auth';
let accessToken = JSON.parse(localStorage.getItem('accessToken')) || "";

export const authAxios = axios.create({
  baseURL:baseUrl,
  headers : {
    Authorization : `Bearer ${accessToken}`
  }
})