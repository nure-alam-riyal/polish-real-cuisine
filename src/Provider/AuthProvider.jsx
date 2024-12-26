import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from 'firebase/auth';
import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react';
import auth from '../FireBase/FireBase';
import toast from 'react-hot-toast';
import axios from 'axios';

export const DataContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider()
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)

    }
    const LogOut = () => {
        signOut(auth).then(() => {
            
            toast.success('successfully Log out')
        })
            .catch(err => {
                toast.error(err.meassage)
            })
    }
    useEffect(() => {
        const unsubScribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if(currentUser){
                const user={email:currentUser?.email}
                axios.post('https://resturant-management-server-side.vercel.app/jwt',user,
                {withCredentials:true}
            ).then(res=>{
                    setLoading(false)
                console.log(res.data)})
                
                
            }
           else{
            axios.post('https://resturant-management-server-side.vercel.app/logout',{},{
                withCredentials:true
            }).then(res=>{
                setLoading(false)
                console.log(res.data)
            })
           }
            // console.log(currentUser)


            return () => unsubScribe()
        })
    }, [])
    const info = {
        user,
        loading,
        createUser,
        userLogin,
        LogOut,
        googleLogin
    }
    return (
        <div>
            <DataContext.Provider value={info}>
                {children}
            </DataContext.Provider>
        </div>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.any
}
export default AuthProvider;