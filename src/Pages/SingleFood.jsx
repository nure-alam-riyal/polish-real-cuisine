import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const SingleFood = () => {
    const {_id,
        description,Price,
        foodQuantity,
        foodOrigin,foodPhoto,foodName,foodCategory,
        purchaseCount,ownerName}=useLoaderData()
    return (
       <div className="flex my-6 justify-center items-center">
        <Helmet>
    <title>SingleFood |Riyal`s Cuisine</title>
</Helmet>
         <div className="card lg:card-side md:w-2/3 bg-base-100 shadow-xl">
  <figure className="m-4" >
    <img className=" rounded-lg"
      src={foodPhoto}
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title  text-3xl"><span className="font-Handlee opacity-80">Food Name</span> : {foodName}</h2>
    <p className="text-2xl text-black font-semibold"><span className="opacity-60 font-semibold font-Handlee">Food Category</span> : {foodCategory}</p>
    <p className=" text-xl text-black font-semibold"><span className="opacity-60 font-semibold font-Handlee">Owner Name</span> : {ownerName}</p>
    <p className=" text-xl text-black font-semibold"><span className="opacity-60 font-semibold font-Handlee">Food Origin</span> : {foodOrigin}</p>
    <p className=" text-xl text-black font-semibold"><span className="opacity-60 font-semibold font-Handlee">Food Quantity</span> : {foodQuantity}</p>
    <p className=" text-xl text-black font-semibold flex items-center"><span className="opacity-60 font-semibold font-Handlee">Price</span> : {Price} < FaBangladeshiTakaSign className="text-lg" /></p>
    <p className="  text-xl text-black font-semibold"><span className="opacity-60 font-semibold font-Handlee">Purchase Count</span> : {purchaseCount}</p>
    <hr />
    <div>
        {description}
    </div>
   
    <div className="card-actions justify-end">
    <Link to={`/purchase/${_id}`}><button className="btn  btn-primary">Purchase</button></Link>
    </div>
  </div>
</div>
       </div>
       
    );
};

export default SingleFood;