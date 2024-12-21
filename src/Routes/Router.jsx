import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home";
import LogIn from "../Pages/AuthenticationPages/LogIn";
import Registration from "../Pages/AuthenticationPages/Registration";
import MyFoods from "../Pages/MyFoods";
import MyOders from "../Pages/MyOders";
import Gallary from "../Pages/Gallary";
import AllFoods from "../Pages/AllFoods";
import AddFood from "../Pages/AddFood";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <LogIn></LogIn>
            },
            {
                path: 'register',
                element: <Registration></Registration>
            },{
                  path:'myfoods',
                  element:<MyFoods></MyFoods>
            },
            {path:'myorders',
                element:<MyOders></MyOders>

            },
            {
                path:"gallery",
                element:<Gallary></Gallary>

            },{
                path:"allfoods",
                element:<AllFoods></AllFoods>

            },{
                path:'addfood',
                element:<AddFood></AddFood>

            }
        ]
    }
])
export default router