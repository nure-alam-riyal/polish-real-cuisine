import axios from "axios";
import { useEffect, useState } from "react";
import useAuthContext from "../Context/AuthContext";
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import nodata from '../assets/lottie/NodataLottie.json'
import { Helmet } from "react-helmet";


const MyFoods = () => {
    const [myFoods, setMyFoods] = useState([])
    const { user } = useAuthContext()
    useEffect(() => {
        axios.get(`https://resturant-management-server-side.vercel.app/foods/${user?.email}`).then(res => {
            setMyFoods(res.data)
        })
    }, [user])
    // console.log(myFoods)
    // description,Price,
    //     foodQuantity,
    //     foodOrigin,foodPhoto,foodName,foodCategory,
    //     purchaseCount,ownerName
    return (
        <div>
            <Helmet>
    <title>Myfoods|Riyal`s Cuisine</title>
</Helmet>
            <h1 className="text-4xl text-center my-4 font-bold">MY Added FOOD Items</h1>
            {
                myFoods.length ?
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
                                <th>Purchase Count</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myFoods?.map((food, index) =>
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
                                            food?.Price}</td>
                                        <td>
                                            <button className="btn btn-ghost btn-xs">{food?.purchaseCount}</button>
                                        </td>
                                        <td className="flex justify-center items-center">
                                            <Link to={`/update/${food?._id}`} className='hover:btn'><FaUserEdit className="text-3xl "></FaUserEdit></Link>
                                        </td>
                                    </tr>)
                            }

                        </tbody>

                    </table>
                </div>

            </div>
                :
                <div>
                <h1 className="text-3xl text-center font-semibold">You Have No Added Food</h1>
                <p className="text-center text-xl font-medium text-green-400">You can add samethings</p>
                <Lottie animationData={nodata}></Lottie>
            </div>
            }
        </div>
    );
};

export default MyFoods;