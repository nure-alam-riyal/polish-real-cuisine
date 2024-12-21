import { Link } from 'react-router-dom';
import google from '../../assets/google.png'
import useAuthContext from '../../Context/AuthContext';

const LogIn = () => {
  const {googleLogin, userLogin}=useAuthContext()
    const handleLogIn=e=>{
        e.preventDefault()
        const form=e.target
        const email=form.email.value
        const password=form.password.value
        console.log(email,password)
        userLogin(email,password)
        .then( result=>{
            console.log(result.user)
          }
        )
        .catch(err=>console.log(err.message))
    }
    const hangleGoogleLogIn=()=>{
      googleLogin()
      .then(result=>{
        console.log(result.user)
      })
      .catch(error=>{
        console.log(error.massage)
      })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          
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
      <p><Link to='/register'> Registration</Link></p>
    </div>
  </div>
</div>
    );
};

export default LogIn;