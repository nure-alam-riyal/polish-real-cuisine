import axios from "axios";
import { useEffect, useState } from "react";
import useAuthContext from "../Context/AuthContext";
import { FaUserEdit } from "react-icons/fa";


const MyFoods = () => {
    const [myFoods, setMyFoods] = useState([])
    const { user } = useAuthContext()
    useEffect(() => {
        axios.get(`http://localhost:1507/foods/${user?.email}`).then(res => {
            setMyFoods(res.data)
        })
    }, [user])
    console.log(myFoods)
    // description,Price,
    //     foodQuantity,
    //     foodOrigin,foodPhoto,foodName,foodCategory,
    //     purchaseCount,ownerName
    return (
        <div>
            <h1 className="text-4xl text-center font-bold">MY FOODS </h1>
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
                                            <FaUserEdit className="text-3xl "></FaUserEdit>
                                        </td>
                                    </tr>)
                            }

                        </tbody>

                    </table>
                </div>

            </div>
        </div>
    );
};

export default MyFoods;