import axios from "axios";
import {useRouter  } from "next/router";

const baseUrl = "https://job-portal-api-b7jn.onrender.com/api"
let token ;
export const getToken = ()=>{
  const router = useRouter();
  if (typeof window !== 'undefined') {
 const authToken = localStorage.getItem("authToken");  
  token = authToken;

  if(token){
    console.log(router.route)
    if(router.route == '/'){
      return;
    }else{
      router.replace('/')
    }
  }else{
   
    router.replace('/login')
  }
  return authToken;
}
    
 
}

export const getJobs = async (page) =>{
    try {
      const response = await axios.get(baseUrl+'/jobs/all-jobs' ,{headers : {'Authorization': `Bearer ${token}`},params:{"page":page , "limit": 6}} );
      return response;
    } catch (error) {
     return error;
    }
}

export const loginRequest = async ({email, password}) =>{
  try {
    const response = await axios.post(baseUrl+'/auth/login' ,{email , password} );
    localStorage.setItem("authToken" , response.data.token)
    console.log(response)

    return response;
  } catch (error) {
    return error;
  }
}


export const registerRequest = async ({name, email, password}) =>{
  try {
    const response = await axios.post(baseUrl+'/auth/register' ,{name,email , password} );
    console.log(response)
    return response;
  } catch (error) {
    return error;
  }
}
export const getUserData = async () =>{
    try {
      const response = await axios.get(baseUrl+'/users' ,{headers : {'Authorization': `Bearer ${token}`}} );
      console.log(response);
      return response;
    } catch (error) {
     return error;
    }
}
