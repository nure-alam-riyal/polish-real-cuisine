import { Link, NavLink } from "react-router-dom";
import useAuthContext from "../Context/AuthContext";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from "react-tooltip";
import logo from '../assets/bgImages/logo.png'
import Themenanging from "./Themenanging";
import { motion } from 'framer-motion'

const NavBar = () => {
    const {user, LogOut}=useAuthContext()
    const links2=<>
      <li className="px-4 text-xl font-semibold"><NavLink to='/myfoods'> My Foods</NavLink></li>
      <li className="px-4 text-xl font-semibold"><NavLink to='/addfood'> Add Food</NavLink></li>
      <li className="px-4 text-xl font-semibold"><NavLink to='/myorders'>My Order</NavLink></li>
   </>
             
    const links = 
    <>
       <li className="px-4 text-xl font-semibold"> <NavLink className=""  to='/'>        Home</NavLink></li>
       <li className="px-4 text-xl font-semibold"> <NavLink className=""  to='/allfoods'>All Foods</NavLink></li>
       <li className="px-4 text-xl font-semibold"> <NavLink className=""  to='/gallery'> Gallery</NavLink></li>
       <li className="px-4 text-xl font-semibold"><Themenanging></Themenanging></li>
  </>
    return (
       <div className="flex justify-center">
         <div className="navbar mx-auto w-11/12 opacity-80 backdrop-blur-lg fixed z-50 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex="0"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className="flex items-center gap-2">
                    <img className="w-14 h-14 hidden md:flex rounded-full" src={logo} alt="" />
                <motion.div
                animate={{color:["#ff0000", "#00ff00", "#0000ff", "#ff0000","#1233g","#fcdb03","#db03fc","#0390fc","#24fc03"],
                    transition:{duration:20,repeat:Infinity}
                }}
                className=" text-2xl font-bold font-Handlee">Riyal`s Cuisine</motion.div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal  px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?
                    <div className="flex items-center gap-2">
                        <div className="dropdown dropdown-end">
      <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <img id="riyal" className="w-12 h-12 rounded-full" referrerPolicy="no-referrer" src={user?.photoURL} alt="userName" />
        </div>
      </div>
      <Tooltip position='left' anchorSelect="#riyal">
        <h3 className="text-center">{user?.displayName}</h3>
        <p className="text-center">{user?.email}</p>
      </Tooltip>
      <ul
        tabIndex="0"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
        {links2}
      </ul>
    </div>
                        
                        <Link onClick={ LogOut} className="btn font-bold text-lg bg-blue-300" to='login'>Log Out</Link></div>
                    :
                    <div><Link className="btn text-lg font-bold bg-blue-300" to='login'>Log In</Link></div>
                }
            </div>
        </div>
       </div>
    );
};

export default NavBar;