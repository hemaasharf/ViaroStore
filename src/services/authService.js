import axios from "axios"


export async function login(authDetails){
  const response = await axios.post(`${process.env.REACT_APP_HOST}/login`, authDetails);
  return response;
}

export async function register(authDetail){
    const response = await axios.post(`${process.env.REACT_APP_HOST}/register`, authDetail);
    return response;
}

export function logout(){
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("cbid");
}