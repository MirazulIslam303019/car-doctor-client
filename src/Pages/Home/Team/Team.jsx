import React from 'react';

import team1 from '../../../assets/images/team/1.jpg'
import team2 from '../../../assets/images/team/2.jpg'
import team3 from '../../../assets/images/team/3.jpg'

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Team = () => {
    return (
        <div className='my-20'>
            <div className='text-center'>
            <p className='text-red-700 font-bold'>Team</p>
            <h1 className="text-5xl font-semibold">Meet Our Team</h1>
            <p className=''>the majority have suffered alteration in some form, by injected humour, or randomised <br />
             words which don't look even slightly believable. </p>
            </div>

             <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
             <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={team1}
      alt="Shoes"
      className="rounded-xl bg-base-300" />
  </figure>
  <div className="card-body items-center text-center">
  
    <h2 className="card-title">Car Engine Plug</h2>
    <p className='text-red-700'>Engine Expert</p>
    <div className='flex gap-3'>
        <span> <FaFacebook className='w-8 h-10'></FaFacebook> </span>
        <span> <FaTwitter className='w-8 h-10'></FaTwitter> </span>
        <span> <FaLinkedin className='w-8 h-10'></FaLinkedin> </span>
        <span> <FaInstagramSquare className='w-8 h-10'></FaInstagramSquare> </span>
    </div>
    
  </div>
</div>
             <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={team2}
      alt="Shoes"
      className="rounded-xl bg-base-300" />
  </figure>
  <div className="card-body items-center text-center">
  
    <h2 className="card-title">Car Engine Plug</h2>
    <p className='text-red-700'>Engine Expert</p>
    <div className='flex gap-3'>
        <span> <FaFacebook className='w-8 h-10'></FaFacebook> </span>
        <span> <FaTwitter className='w-8 h-10'></FaTwitter> </span>
        <span> <FaLinkedin className='w-8 h-10'></FaLinkedin> </span>
        <span> <FaInstagramSquare className='w-8 h-10'></FaInstagramSquare> </span>
    </div>
    
  </div>
</div>
             <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={team3}
      alt="Shoes"
      className="rounded-xl bg-base-300" />
  </figure>
  <div className="card-body items-center text-center">
 
    <h2 className="card-title">Car Engine Plug</h2>
    <p className='text-red-700'>Engine Expert</p>
    <div className='flex gap-3'>
        <span> <FaFacebook className='w-8 h-10'></FaFacebook> </span>
        <span> <FaTwitter className='w-8 h-10'></FaTwitter> </span>
        <span> <FaLinkedin className='w-8 h-10'></FaLinkedin> </span>
        <span> <FaInstagramSquare className='w-8 h-10'></FaInstagramSquare> </span>
    </div>
    
  </div>
</div>
             </div>
        </div>
    );
};

export default Team;