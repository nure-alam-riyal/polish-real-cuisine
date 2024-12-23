import { Link, NavLink } from "react-router-dom";
import useAuthContext from "../Context/AuthContext";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from "react-tooltip";

const NavBar = () => {
    const {user, LogOut}=useAuthContext()
    const links2=<>
      <li className="px-4"><NavLink to='/myfoods'> My Foods</NavLink></li>
      <li className="px-4"><NavLink to='/addfood'> Add Food</NavLink></li>
      <li className="px-4"><NavLink to='/myorders'>My Order</NavLink></li>
   </>
             
    const links = <>
       <li className="px-4"> <NavLink className=""  to='/'>        Home</NavLink></li>
       <li className="px-4"> <NavLink className=""  to='/allfoods'>All Foods</NavLink></li>
       <li className="px-4"> <NavLink className=""  to='/gallery'> Gallery</NavLink></li>
            </>
    return (
        <div className="navbar mx-auto w-11/12 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div>
                    <img src="" alt="" />
                <div className="btn btn-ghost text-xl">Riyal`s Cuisine</div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?
                    <div className="flex items-center gap-2">
                        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <img id="riyal" className="w-12 h-12 rounded-full" referrerPolicy="no-referrer" src={user?.photoURL} alt="userName" />
        </div>
      </div>
      <Tooltip position='left' anchorSelect="#riyal">
        <h3 className="text-center">{user?.displayName}</h3>
        <p className="text-center">{user?.email}</p>
      </Tooltip>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links2}
      </ul>
    </div>
                        
                        <Link onClick={ LogOut} className="btn bg-blue-300" to='login'>Log Out</Link></div>
                    :
                    <div><Link className="btn bg-blue-300" to='login'>Log In</Link></div>
                }
            </div>
        </div>
    );
};

export default NavBar;