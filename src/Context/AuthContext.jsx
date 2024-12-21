import { useContext } from "react";
import { DataContext } from "../Provider/AuthProvider";



const useAuthContext = () => {
    
    return  useContext(DataContext)
       
};

export default useAuthContext;