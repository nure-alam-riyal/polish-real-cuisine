import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../assets/google.png'
import useAuthContext from '../../Context/AuthContext';
import toast from 'react-hot-toast';
import Lottie from 'lottie-react';
import lottieLogin from '../../assets/lottie/lottieLogin.json'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';

const LogIn = () => {
  const navigate=useNavigate()
  const location = useLocation()
  const from = location?.state || '/'
  const [eye, setEye] = useState(true)
  const { googleLogin, userLogin } = useAuthContext()
  const handleLogIn = e => {
  
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    // console.log(email, password)
    userLogin(email, password)
      .then(() => {
        toast.success('login successfully')
        navigate(from)
      }
      )
      .catch(err => toast.error(err.message))
  }
  const hangleGoogleLogIn = () => {
    googleLogin()
      .then(() => {
        navigate(from)
        // console.log(result.user)
        toast.success('login successfully with google')
      })
      .catch(error => {
        toast.error(error.message)
      })
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
         
         <Lottie className='lg:ml-10' animationData={lottieLogin}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-5xl text-center font-bold py-4">Login now!</h1>
          <form onSubmit={handleLogIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type={`${eye?'password':'text'}`} name="password" placeholder="password" className="input input-bordered" required />
              <div onClick={()=>setEye(!eye)} className="absolute right-4 top-12">{
             eye?<FaEye></FaEye>:<FaEyeSlash></FaEyeSlash>
                           }</div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>

          </form>
          <div className="divider mx-8 text-center divider-warning">OR</div>
          <div onClick={hangleGoogleLogIn} className="flex btn bg-orange-100 mx-8 my-4  items-center justify-center">
            <img className='W-12 h-12' src={google} alt="" />
            <div className="">Login With Google</div>
          </div>
          <p className='text-center my-4'> Are you new? Please <Link className='text-green-400 hover:btn' to='/register'> Registration</Link> here</p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;