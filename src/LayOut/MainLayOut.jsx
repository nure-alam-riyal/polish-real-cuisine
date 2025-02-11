import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
const MainLayOut = () => {
    return (
        <div>            
            <NavBar></NavBar>
            <div className="w-11/12 mx-auto">
               <div className="mt-24">
               <Outlet></Outlet>
               </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;