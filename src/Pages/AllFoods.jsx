import axios from "axios";
import { useEffect, useState } from "react";
import FoodCard from "../Components/FoodCard";
import { FaSearch } from "react-icons/fa";
import { Helmet } from "react-helmet";


const AllFoods = () => {
    const [search,setSearch]=useState('')
    const [toppurchesfood,setTopPurchesFoods]=useState([])
    
    useEffect(()=>{
        axios.get('https://resturant-management-server-side.vercel.app/allfoods')
        .then(res=>setTopPurchesFoods(res.data))
    },[])
   useEffect(()=>{
    // const handleSearch=e=>{
        // console.log(e.target.value)
        axios.get(`https://resturant-management-server-side.vercel.app/allfoods?name=${search}`)
               .then(res=>setTopPurchesFoods(res.data))
       
        //    }
   },[search])
//    console.log(search)
    return (
       <section>
        <Helmet>
    <title>AllFoods |Riyal`s Cuisine</title>
</Helmet>
        <div className="bg-allfoodsbg mb-20 bg-cover h-[300px]">
            <div className="w-full h-full flex items-center justify-center text-center">
                         <div className="text-center text-green-700 md:w-10/12 lg:w-8/12">
                            <h1 className="text-center text-4xl font-bold">Track Every Order in Real Time to Enhance Service Quality</h1>
                            <p className="my-5 text-white">Exceed customer expectations by optimizing operations, enhancing service quality, and creating unforgettable moments that keep diners returning for more.</p>
                           
                         </div>
                         </div>
            </div>
            <div className="my-6">
                <div className="flex md:w-1/3 mx-auto justify-center relative"><input onChange={(e)=>setSearch(e?.target?.value)} className="p-3  w-full border rounded-lg" type="search" name="" id="" placeholder="search by food name" /> <FaSearch className="absolute top-4 left-[90%] "></FaSearch> </div>
            </div>
                       <div className="grid grid-cols-1 my-10 md:grid-cols-2 lg:grid-cols-3 gap-5">
                           {
                                    toppurchesfood?.map(food=><FoodCard key={food._id} food={food}></FoodCard>)
       
                           }
                       </div>
                   </section>
    );
};

export default AllFoods;