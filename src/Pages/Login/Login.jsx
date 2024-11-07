import React, { useContext } from 'react';
import login from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';

const Login = () => {

    const {signIn}=useContext(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();
    console.log(location)
    const handleToLogin=event=>{
        event.preventDefault();
        const form=event.target;
       
        const email=form.email.value;
        const password=form.password.value;

       

        signIn(email,password)
        .then(result=>{
          const loggedInData=result.user;
          console.log(loggedInData)
          const user={ email };
        
          // get access token
          axios.post('http://localhost:1000/jwt',user,{withCredentials:true})
          .then(res=>{
            console.log(res.data)
            if(res.data.SUCCESS){
              navigate(location?.state ? location?.state : '/')
            }
          })
        })
        .catch(error=>console.log(error))



    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content lg:flex-row">
          <div className=" mr-12 w-1/2">
            
           <img src={login} alt="" />
          </div>
          <div className="card bg-base-100 w-full p-10 max-w-sm shrink-0 shadow-2xl">
            <form className="card body" onSubmit={handleToLogin}>
              <div className="form-control">
              <h1 className="text-5xl font-bold text-center">Login</h1>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className='font-bold text-center my-5'>New car doctor ? 
                <Link className='text-red-700' to="signUp"> sign Up</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;