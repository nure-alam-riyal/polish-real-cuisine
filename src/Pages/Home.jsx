import axios from "axios";
import { useEffect, useState } from "react";
import FoodCard from "../Components/FoodCard";
import { Link } from "react-router-dom";
import Slider from "../Components/Slider";
import WecomeMyResturant from "../Components/WecomeMyResturant";
import NavBar from "../Components/NavBar";
import logo from '../assets/bgImages/logo.png'
import MenuSection from "../Components/MenuSection";
import { Slide } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import SectionHeader from "../Components/SectionHeader";
import SalesPromotion from "../Components/SalesPromotion";
import SeasonalDelights from "../Components/SeasonalDelights";







const Home = () => {
    const [toppurchesfood,setTopPurchesFoods]=useState([])
    useEffect(()=>{
        axios.get('https://resturant-management-server-side.vercel.app/foods')
        .then(res=>setTopPurchesFoods(res.data))
    },[])
    return (
        <div>
            <Helmet>
    <title>Riyal`s Cuisine</title>
</Helmet>
           <div className="hidden"> <NavBar></NavBar></div>
            <section>
                <Slider></Slider>
            </section>
            <section>
            <SectionHeader title={'Top Food Item'} subTitle={'A highly popular or frequently consumed dish or ingredient, often celebrated for its taste, nutritional value, or cultural significance in a specific context.'}></SectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {
                             toppurchesfood.slice(0,4).map(food=><FoodCard key={food._id} food={food}></FoodCard>)

                    }
                </div>
                <div className="text-center"><Link className="btn my-5 w-10/12 mx-auto bg-blue-300 " to='/allfoods'>Show All</Link></div>
            </section>
            <div>
                <WecomeMyResturant></WecomeMyResturant>
            </div>
            <div>
                <MenuSection></MenuSection>
            </div>
            <section>
                <SeasonalDelights></SeasonalDelights>
            </section>
          
            <section className="bg-slate-50 my-5 rounded-lg">
                <div> <div className="flex justify-center items-center text-center py-3  mt-6 mb-10">
                    <div className="md:w-2/3 text-center">
                        <div className="flex justify-center my-2"><img className="w-40 h-32 object-cover rounded-full" src={logo} alt="" /></div>
                        <p className="text-4xl font-bold font-Handlee text-emerald-950">SubScribe to our website</p>
                    </div>
                </div>
                </div>
                <div className="w-11/12 md:w-2/3 lg:w-1/2 pb-10 mx-auto">
                    <div><input className="border w-full p-4 my-2 rounded-lg" type="email" name="" id="" placeholder="Enter your Email" /></div>
                    <div><textarea className="border w-full p-4 rounded-lg" name="" id="" cols="5" placeholder="Your Comments" rows="5"></textarea></div>
                </div>
                <div className="text-center pb-5"><button className="btn font-semibold bg-blue-400">Subscibe</button></div>

            </section>
        </div>
    );
};

export default Home;