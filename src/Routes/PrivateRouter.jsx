
import PropTypes from 'prop-types'
import useAuthContext from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
const PrivateRouter = ({ children }) => {
    const location=useLocation()
    const { user,  loading } = useAuthContext()
    if (loading) {
       return <div className='flex justify-center items-center h-[600px]'>
            <span className="loading loading-bars text-red-100 loading-xs"></span>
            <span className="loading loading-bars text-red-400 loading-sm"></span>
            <span className="loading loading-bars text-red-700 loading-md"></span>
            <span className="loading loading-bars text-red-950 loading-lg"></span>
        </div>
    }
    if (user)
        return children
    else
      return  <Navigate state={location?.pathname} to='/login'></Navigate>
};
PrivateRouter.propTypes = {
    children: PropTypes.any
}
export default PrivateRouter;