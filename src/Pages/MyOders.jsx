import { useEffect, useState } from "react";
import noData from '../assets/lottie/NodataLottie.json'
import useAuthContext from "../Context/AuthContext";
import axios from "axios";
import { FcDeleteDatabase } from "react-icons/fc";
import { format } from "date-fns";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../Context/useAxiosSecure";


const MyOders = () => {
    const [myOrderFoods, setMyOrdwerFoods] = useState([])
    const { user } = useAuthContext()
    const instanceAxios=useAxiosSecure()
    useEffect(() => {
        MyOrderFoods()
        
    }, [user])
    const MyOrderFoods=()=>{
        instanceAxios.get(`/puchaseFoods/${user?.email}`).then(res => {
            setMyOrdwerFoods(res.data)
     })}
   
    const handleDelete=id=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://resturant-management-server-side.vercel.app/purchaseFood/${id}`,).then(()=>{
                    // console.log(res.data)
                   MyOrderFoods()
                   Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                })
             
            }
          });
       
        
    }
    // console.log(myFoods)
    return (
        <div>
            <Helmet>
    <title>MyOrders |Riyal`s Cuisine</title>
</Helmet>
                    <h1 className="text-4xl text-center font-bold my-10">MY Order FOODS </h1>
                  {
                    myOrderFoods.length ?
                    <div>
                    <div className="overflow-x-auto">
                        <table className="table text-center">
                            {/* head */}
                            <thead className="text-2xl font-bold ">
                                <tr>
                                    <th>NO.</th>
                                    <th>Image</th>
                                    <th>Food Name</th>
                                    <th>Price</th>
                                    <th>Buying Time</th>
                                    <th>Owner Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myOrderFoods?.map((food, index) =>
                                        <tr key={food._id}>
                                            <th>
                                                <label>
                                                    {index + 1}
                                                </label>
                                            </th>
                                            <td>
                                                
                                                        <div className=" flex justify-center">
                                                            <img className="w-16 h-16 rounded-full"
                                                                src={food?.foodPhoto}
                                                                alt={food?.foodName} />
                                                        </div>
                                                  
                                            </td>
                                            <td>
                                                {food?.foodName}
                                            </td>
                                            <td>{
                                                food?.price}</td>
                                            <td>
                                                
                                                <div>{format(new Date(food?.buyingTime),'Pp')}</div>
                                            </td>
                                            <td>{food?.ownerName}</td>
                                            <td className="flex justify-center items-center">
                                                <div onClick={()=>handleDelete(food?._id)}><FcDeleteDatabase className="text-3xl  "></FcDeleteDatabase></div>
                                            </td>
                                        </tr>)
                                }
    
                            </tbody>
    
                        </table>
                    </div>
    
                </div>
                    :
                    <div>
                        <h1 className="text-3xl text-center font-semibold">You Have No Order</h1>
                        <p className="text-center text-xl font-medium text-green-400">please Order samethings</p>
                        <Lottie animationData={noData}></Lottie>
                    </div>
                  }
                  
                </div>
    );
};

export default MyOders;