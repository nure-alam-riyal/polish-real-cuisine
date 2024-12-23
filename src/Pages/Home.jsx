import axios from "axios";
import { useEffect, useState } from "react";
import FoodCard from "../Components/FoodCard";
import { Link } from "react-router-dom";
import Slider from "../Components/Slider";







const Home = () => {
    const [toppurchesfood,setTopPurchesFoods]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:1507/foods')
        .then(res=>setTopPurchesFoods(res.data))
    },[])
    return (
        <div>
            <section>
                <Slider></Slider>
            </section>
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                             toppurchesfood.map(food=><FoodCard key={food._id} food={food}></FoodCard>)

                    }
                </div>
                <div className="text-center"><Link className="btn my-5 w-10/12 mx-auto bg-blue-300 " to='/allfoods'>Show All</Link></div>
            </section>
        </div>
    );
};

export default Home;