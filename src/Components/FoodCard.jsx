import { MdCategory } from "react-icons/md";
import PropTypes from 'prop-types'
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
const FoodCard = ({ food }) => {
    const { _id,
        foodQuantity,
        foodPhoto, foodName, foodCategory,
        purchaseCount } = food || {}
    return (
        <div className="card glass ">
           <Fade direction='down'>
           <figure>
                <img className='w-full h-80 rounded-lg' referrerPolicy='no-referrer'
                    src={foodPhoto}
                    alt={foodName}/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{foodName}</h2>
                <div className="flex items-center gap-2 text-orange-500">
                <MdCategory />
                <p className='text-blue-400'>{foodCategory}</p>
                </div>
               
                <div className='flex justify-between'><p>Purchesed:{purchaseCount}</p> <p>Quantity:{foodQuantity}</p></div>
                <div className="card-actions justify-end">
                    <Link to={`/food/${_id}`}><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
           </Fade>
        </div>
    );
};
FoodCard.propTypes = {
    food: PropTypes.object
}
export default FoodCard;