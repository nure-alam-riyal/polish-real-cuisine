
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const FoodCard = ({ food }) => {
    const { _id,
        foodQuantity,
        foodPhoto, foodName, foodCategory,
        purchaseCount } = food || {}
    return (
        <div className="card glass ">
            <figure>
                <img
                    src={foodPhoto}
                    alt="car!" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Food Name:{foodName}</h2>
                <p>Food Category:{foodCategory}</p>
                <div className='flex justify-between'><p>Purchesed:{purchaseCount}</p> <p>Quantity:{foodQuantity}</p></div>
                <div className="card-actions justify-end">
                    <Link to={`/food/${_id}`}><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};
FoodCard.propTypes = {
    food: PropTypes.object
}
export default FoodCard;