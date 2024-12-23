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
        <div className="bg-allfoodsbg mb-20 bg-cover h-[300px]">
            <div className="w-full h-full flex items-center justify-center text-center">
                         <div className="text-center text-green-700 md:w-10/12 lg:w-8/12">
                            <h1 className="text-center text-4xl font-bold">Track Every Order in Real Time to Enhance Service Quality</h1>
                            <p className="my-5 text-white">Exceed customer expectations by optimizing operations, enhancing service quality, and creating unforgettable moments that keep diners returning for more.</p>
                           
                         </div>
                         </div>
            </div>
                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                           {
                                    toppurchesfood?.map(food=><FoodCard key={food._id} food={food}></FoodCard>)
       
                           }
                       </div>
                   </section>
    );
};

export default AllFoods;