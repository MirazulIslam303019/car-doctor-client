import { Link } from "react-router-dom";
import signUpImg from '../assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const SignUp = () => {
    const {createUser}=useContext(AuthContext);
    const handleToSignUp=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;

        console.log(name,email,password)

        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
        })
       .catch(error=>{
        console.error(error);
       })
    }
    
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content lg:flex-row">
          <div className=" mr-12 w-1/2">
            
           <img src={signUpImg} alt="" />
          </div>
          <div className="card bg-base-100 w-full p-10 max-w-sm shrink-0 shadow-2xl">
            <form className="card body" onSubmit={handleToSignUp} >
              <div className="form-control">
              <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
              
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">confirm Password</span>
                </label>
                <input type="password" placeholder="confirm password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className='font-bold text-center my-5'>Already have an account ? 
                <Link className='text-red-700' to="/login"> Login</Link></p>
          </div>
        </div>
      </div>
    );
};


export default SignUp;