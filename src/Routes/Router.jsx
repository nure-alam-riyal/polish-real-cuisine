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
import SingleFood from "../Pages/SingleFood";
import PurcheasePages from "../Pages/PurcheasePages";
import UpdateFoodadded from "../Pages/UpdateFoodadded";
import PrivateRouter from "./PrivateRouter";

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
                  element:<PrivateRouter><MyFoods></MyFoods></PrivateRouter>
            },
            {path:'myorders',
                element:<PrivateRouter><MyOders></MyOders></PrivateRouter>

            },
            {
                path:"gallery",
                element:<Gallary></Gallary>

            },{
                path:"allfoods",
                element:<AllFoods></AllFoods>

            },{
                path:'addfood',
                element:<PrivateRouter><AddFood></AddFood></PrivateRouter>

            },{
                path:'food/:id',
                element:<SingleFood></SingleFood>,
                loader:({params})=>fetch(`https://resturant-management-server-side.vercel.app/food/${params.id}`)

            },{
                path:'/purchase/:id',
                element:<PrivateRouter><PurcheasePages></PurcheasePages></PrivateRouter>,
                loader:({params})=>fetch(`https://resturant-management-server-side.vercel.app/food/${params.id}`)

            },{
                path:"/update/:id",
                element:<PrivateRouter><UpdateFoodadded></UpdateFoodadded></PrivateRouter>,
                loader:({params})=>fetch(`https://resturant-management-server-side.vercel.app/food/${params.id}`)
            }
        ]
    }
])
export default router