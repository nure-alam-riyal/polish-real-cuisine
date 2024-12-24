import axios from "axios";
import { useEffect, useState } from "react";
import FoodCard from "../Components/FoodCard";
import { Link } from "react-router-dom";
import Slider from "../Components/Slider";
import WecomeMyResturant from "../Components/WecomeMyResturant";







const Home = () => {
    const [toppurchesfood,setTopPurchesFoods]=useState([])
    useEffect(()=>{
        axios.get('https://resturant-management-server-side.vercel.app/foods')
        .then(res=>setTopPurchesFoods(res.data))
    },[])
    return (
        <div>
            <section>
                <Slider></Slider>
            </section>
            <section>
            <div> <div className="flex justify-center items-center text-center  mt-6 mb-10">
                    <div className="md:w-2/3">
                    {/* <Slide> */}
                        <h2 className="font-bold   text-3xl">Top Food Item</h2>
                        <p className="my-4"> A highly popular or frequently consumed dish or ingredient, often celebrated for its taste, nutritional value, or cultural significance in a specific context.</p>
                        {/* </Slide> */}
                     </div>
                </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                             toppurchesfood.map(food=><FoodCard key={food._id} food={food}></FoodCard>)

                    }
                </div>
                <div className="text-center"><Link className="btn my-5 w-10/12 mx-auto bg-blue-300 " to='/allfoods'>Show All</Link></div>
            </section>
            <div>
                <WecomeMyResturant></WecomeMyResturant>
            </div>
        </div>
    );
};

export default Home;