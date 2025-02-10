import { Link, useNavigate } from "react-router-dom";
import google from '../../assets/google.png'
import useAuthContext from "../../Context/AuthContext";
import { updateProfile } from "firebase/auth";
import auth from "../../FireBase/FireBase";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import lottieregister from '../../assets/lottie/lootieregister.json'
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Registration = () => {
  const navigate=useNavigate()
  const [eye, setEye] = useState(true)
  const { googleLogin, createUser } = useAuthContext()
  const handleregister = e => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const photo = form.photo.value
    const email = form.email.value
    const password = form.password.value
    const passA = /(?=.*[A-Z])/
    const passa = /(?=.*[a-z])/
    const pass6 = /.{6,}/
    if (!passA.test(password)) {
      toast.error('Password need one UpperCase Later')
      return
    }
    else if (!passa.test(password)) {
      toast.error('Password need one LowerCase Later')
      return
    }
    else if (!pass6.test(password)) {
      toast.error('Password  need at least 6  character and One Number')
      return
    }
    else {
      createUser(email, password)
        .then(() => {
          // console.log(result.user)
          updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          }).then(() => {
            navigate('/')
            toast.success('registertion successfully')

            // ...
          }).catch(() => {
            // An error occurred
            // ...
            
          });
        })
        .catch(err => toast.error(err.message))
    }

  }
  const hangleGoogleLogIn = () => {
    googleLogin()
      .then(() => {
        // console.log(result.user)
        navigate('/')
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
          <h1 className="text-5xl text-center py-4 font-bold">Registration now!</h1>
          <Lottie className="lg:ml-20" animationData={lottieregister}> </Lottie>
          <p className='text-center my-8 text-3xl'> Are you already exist? <br /> please<Link className='text-green-400 hover:btn' to='/login'> LogIn </Link> here</p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

          <form onSubmit={handleregister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="url" name="photo" placeholder="Photo URL" className="input input-bordered" required />
            </div>
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
              <input type={`${eye ? 'password' : 'text'}`} name="password" placeholder="password" className="input input-bordered" required />
              <div onClick={() => setEye(!eye)} className="absolute right-4 top-12">{
                eye ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
              }</div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Registration</button>
            </div>

          </form>
          <div className="divider mx-8 text-center divider-warning">OR</div>
          <div onClick={hangleGoogleLogIn} className="flex btn bg-orange-100 mx-8 my-4  items-center justify-center">
            <img className='W-12 h-12' src={google} alt="" />
            <div className="">Login With Google</div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Registration;