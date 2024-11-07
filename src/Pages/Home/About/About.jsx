import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import pars from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero  min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className='lg:w-1/2 relative'>
    <img
      src={person}
      className="w-3/4 rounded-lg shadow-2xl" />
    <img
      src={pars}
      className=" w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
      
    </div>
    <div className='lg:w-1/2'>
    <p className='text-red-700 font-semibold'>About Us</p>
      <h1 className="text-5xl font-bold ">We are qualified <br /> & of experience <br /> in this field</h1>
      <p className="py-6 mb-2 text-zinc-400">
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
       by injected humour, or randomised words which don't look even slightly believable. 
      </p>
      <p className='text-zinc-400 mb-5'>the majority have suffered alteration in some form, by injected humour,
         or randomised words which don't look even slightly believable. </p>
      <button className="btn btn-error">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;