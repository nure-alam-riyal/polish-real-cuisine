import axios from "axios";
import { useEffect, useState } from "react";
import FoodCard from "../Components/FoodCard";


const AllFoods = () => {
    const [toppurchesfood,setTopPurchesFoods]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:1507/allfoods')
        .then(res=>setTopPurchesFoods(res.data))
    },[])
    return (
       <section>
                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                           {
                                    toppurchesfood?.map(food=><FoodCard key={food._id} food={food}></FoodCard>)
       
                           }
                       </div>
                   </section>
    );
};

export default AllFoods;