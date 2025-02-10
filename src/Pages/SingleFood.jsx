import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import { FaBangladeshiTakaSign, FaUser } from "react-icons/fa6";
import { SiOrigin } from "react-icons/si";
import { MdCategory } from "react-icons/md";

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

    <div className="flex items-center gap-2 ">
                 
                   <h2 className="card-title  text-xl"> {foodName}</h2>
                   </div>
    <div className="flex items-center gap-2 text-orange-500">
                   <MdCategory />
                   <p className='text-blue-400'>{foodCategory}</p>
                   </div>
    <p className=" text-lg text-black font-semibold flex items-center gap-2"><span className="opacity-60 font-semibold font-Handlee"><FaUser/></span>  {ownerName}</p>
    <p className=" text-lg text-black font-semibold flex items-center gap-2"><span className="opacity-60 font-semibold font-Handlee"><SiOrigin className="text-yellow-200" /></span>  {foodOrigin}</p>
    <p className=" text-lg text-black font-semibold flex items-center gap-2"><span className="opacity-60 font-semibold font-Handlee">Food Quantity</span> : {foodQuantity}</p>
    <p className=" text-lg text-black font-semibold flex items-center gap-2 "><span className="opacity-60 font-semibold font-Handlee">Price</span> : {Price} < FaBangladeshiTakaSign className="text-lg" /></p>
    <p className=" text-lg text-black font-semibold flex items-center gap-2"><span className="opacity-60 font-semibold font-Handlee">Purchase Count</span> : {purchaseCount}</p>
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