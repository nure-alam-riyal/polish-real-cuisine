import {  useLoaderData } from "react-router-dom";
import useAuthContext from "../Context/AuthContext";
import axios from "axios";
import Lottie from "lottie-react";
import lottiepur from '../assets/lottie/purchase.json'
import { useState } from "react";
import toast from "react-hot-toast";


const PurcheasePages = () => {
  const [error,SetError]=useState('')
  const [errorBuyer,SetBuyerError]=useState('')
  // const [error,SetError]=useState('')
    const {user}=useAuthContext()
    const {_id,
       foodPhoto,foodName,foodQuantity,
       ownerName,ownerEmail}=useLoaderData()
        const handlePurchase=e=>{
            e.preventDefault()
            const formData=new FormData(e.target)
            const purchasedData=Object.fromEntries(formData.entries())
            purchasedData.quantity=parseFloat(purchasedData.quantity)
            purchasedData.price=parseFloat(purchasedData.price)
            purchasedData.foods_id=_id;
            purchasedData.foodPhoto=foodPhoto;
            purchasedData.ownerName=ownerName
            purchasedData.buyingTime=new Date();
               if(ownerEmail=== purchasedData?.buyerEmail){
                return SetBuyerError('owner Can not buy his own food item')
               }
               else if(parseFloat(foodQuantity)<purchasedData.quantity){
                return SetError(`Not Enough food to buy.Has ${foodQuantity}`)
               }
               else{
                axios.post('http://localhost:1507/purchased-foods',purchasedData)
                .then((res)=>{
                  if(res.data)
                    SetError('')
                  SetBuyerError('')
                  toast.success('Purchase Food')
                })
               }

        

        }
    return (
        <div className="lg:flex my-10 justify-center items-center gap-20">
          <div><Lottie className="w-96 h-96 rounded-full" animationData={lottiepur}></Lottie></div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handlePurchase} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Food Name</span>
            </label>
            <input defaultValue={foodName} type="text" placeholder="Food Name" name="foodName" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input type="text" name="price" placeholder="Price" className="input input-bordered" required />
           
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered" required />
           {
            error? 
              <p className="text-red-600 my-2 font-semibold">{error}</p>
            :<></>
           }
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Buyer Name</span>
            </label>
            <input type="text" readOnly name="buyerName" placeholder="Price" defaultValue={user?.displayName} className="input input-bordered" required />
           
          </div>
         
          <div className="form-control">
            <label className="label">
              <span className="label-text">Buyer Email</span>
            </label>
            <input type="text" name="buyerEmail" readOnly placeholder="Price"  defaultValue={user?.email} className="input input-bordered" required />
            {
            errorBuyer ? 
              <p className="text-red-600 my-2 font-semibold">{errorBuyer}</p>
            :
            <></>
           }
          </div>
          <div className="form-control mt-6">
            <button disabled={`${foodQuantity ?'':'true'}`} className="btn btn-primary">Purchased</button>
            {
              !foodQuantity&& (
                <p className="text-red-600 my-2 font-semibold">item is not available</p>
              )
            }
          </div>
        </form>
      </div>
        </div>
    );
};

export default PurcheasePages;