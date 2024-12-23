import axios from "axios";
import useAuthContext from "../Context/AuthContext";
import { useLoaderData, useParams } from "react-router-dom";
import toast from "react-hot-toast";


const UpdateFoodadded = () => {
    const {id}=useParams()
    const {
        description,Price,
        foodQuantity,
        foodOrigin,foodPhoto,foodName,purchaseCount,foodCategory,
        }=useLoaderData()
    const {user}=useAuthContext()
    const UpdateData=e=>{
        e.preventDefault()
        const formdata=new FormData(e.target)
        const addedInfo=Object.fromEntries(formdata.entries())
        addedInfo.Price=parseFloat(addedInfo.Price)
        addedInfo.foodQuantity=parseFloat(addedInfo.foodQuantity)
      
         addedInfo.purchaseCount=purchaseCount
        axios.put(`http://localhost:1507/update/${id}`,addedInfo)
        .then(res=>{if(res.data){
                  toast.success('Updated successfull')
        }})  
          
    }
    return (
        <div className="flex justify-center">

            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
                <h1 className="text-5xl font-bold text-center">Update Food</h1>
                <form onSubmit={UpdateData} className="card-body">
                    <div className="lg:flex gap-6">
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text">Food Name </span>
                            </label>
                            <input type="text" defaultValue={foodName} name="foodName" placeholder="Food Name " className="input input-bordered" required />
                        </div>
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text">Food Category </span>
                            </label>
                            <input type="text" defaultValue={foodCategory} name="foodCategory" placeholder="Food Category " className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="lg:flex gap-6">
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text">Food Image</span>
                            </label>
                            <input type="url" name="foodPhoto" defaultValue={foodPhoto} placeholder="Food Image (URL)" className="input input-bordered" required />
                        </div>
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text">Food Origin (Country)</span>
                            </label>
                            <input type="text" name="foodOrigin" defaultValue={foodOrigin} placeholder="Food Origin (Country)" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="lg:flex gap-6">
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" name="foodQuantity" defaultValue={foodQuantity} placeholder="Quantity" className="input input-bordered" required />
                        </div>
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name="Price" defaultValue={Price} placeholder="Price" className="input input-bordered" required />
                        </div>
                        </div>
                        <div className="lg:flex gap-6">
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} readOnly name="ownerEmail" placeholder="Email (owner)" className="input input-bordered" required />
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} readOnly name="ownerName" placeholder="Name (owner)" className="input input-bordered" required />

                    </div>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">A short description of the food item ( ingredients, making procedure, etc. )</span>
                        </label>
                        <textarea cols='5' defaultValue={description} className="border p-2 rounded-lg" rows='5' name="description" placeholder="A short description of the food item ( ingredients, making procedure, etc. )"></textarea>

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update Item</button>
                    </div>

                </form>

            </div>

        </div>
    );
};

export default UpdateFoodadded;