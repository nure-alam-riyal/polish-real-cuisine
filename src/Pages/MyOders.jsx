import { useEffect, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import useAuthContext from "../Context/AuthContext";
import axios from "axios";
import { FcDeleteDatabase } from "react-icons/fc";


const MyOders = () => {
    const [myOrderFoods, setMyOrdwerFoods] = useState([])
    const { user } = useAuthContext()
    useEffect(() => {
        axios.get(`http://localhost:1507/puchaseFoods/${user?.email}`).then(res => {
            setMyOrdwerFoods(res.data)
        })
    }, [user])
    // console.log(myFoods)
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
                                                    <div>{food?.buyingTime}</div>
                                                </td>
                                                <td>{food?.ownerName}</td>
                                                <td className="flex justify-center items-center">
                                                    <FcDeleteDatabase className="text-3xl  "></FcDeleteDatabase>
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

export default MyOders;