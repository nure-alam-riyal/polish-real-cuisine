import axios from "axios";
import useAuthContext from "./AuthContext";
import { useEffect } from "react";

const instanceAxios = axios.create({
    baseURL: 'https://resturant-management-server-side.vercel.app',
    withCredentials:true
  });
const useAxiosSecure = () => {
    const {LogOut}=useAuthContext()

   useEffect(()=>{
    
    axios.interceptors.response.use(function (response) {
        return response;
      }, function (error) {
        if(error.status===401|| error.status===403){
            return LogOut()
        }
        return Promise.reject(error);
      });
   },[])


    return instanceAxios
};

export default useAxiosSecure;