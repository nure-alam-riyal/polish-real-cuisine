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

            },{
                path:'food/:id',
                element:<SingleFood></SingleFood>,
                loader:({params})=>fetch(`http://localhost:1507/food/${params.id}`)

            },{
                path:'/purchase/:id',
                element:<PurcheasePages></PurcheasePages>,
                loader:({params})=>fetch(`http://localhost:1507/food/${params.id}`)

            },{
                path:"/update/:id",
                element:<UpdateFoodadded></UpdateFoodadded>,
                loader:({params})=>fetch(`http://localhost:1507/food/${params.id}`)
            }
        ]
    }
])
export default router