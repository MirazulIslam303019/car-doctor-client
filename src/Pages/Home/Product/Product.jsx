import React from 'react';
import img1 from '../../../assets/images/products/1.png'
import img2 from '../../../assets/images/products/2.png'
import img3 from '../../../assets/images/products/3.png'
import img4 from '../../../assets/images/products/4.png'
import img5 from '../../../assets/images/products/5.png'
import img6 from '../../../assets/images/products/6.png';
import { AiFillStar } from "react-icons/ai";

const Product = () => {
    return (
        <div className='text-center my-10'>
            <p className='font-bold text-red-700 text-center '>Popular Products</p>
            <h1 className="text-5xl font-semibold">Browse Our Products</h1>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10 ">
    <img
      src={img1}
      alt="Shoes"
      className="rounded-xl bg-base-300 " />
  </figure>
  <div className="card-body items-center text-center">
  <div className='flex text-yellow-500'>
   <span><AiFillStar></AiFillStar></span>
    <span><AiFillStar></AiFillStar></span>
    <span><AiFillStar></AiFillStar></span>
    <span><AiFillStar></AiFillStar></span>
    <span><AiFillStar></AiFillStar></span>
    <span><AiFillStar></AiFillStar></span>
   </div>
    <h2 className="card-title">Car Engine Plug</h2>
    <p className='text-red-700'>$20.00</p>
    
  </div>
</div>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={img2}
      alt="Shoes"
      className="rounded-xl bg-base-300" />
  </figure>
  <div className="card-body items-center text-center">
  <div className='flex text-yellow-500'>
   <span><AiFillStar></AiFillStar></span>
    <span><AiFillStar></AiFillStar></span>
    <span><AiFillStar></AiFillStar></span>
    <span><AiFillStar></AiFillStar></span>
    <span><AiFillStar></AiFillStar></span>
    <span><AiFillStar></AiFillStar></span>
   </div>
    <h2 className="card-title">Car Engine Plug</h2>
    <p className='text-red-700'>$20.00</p>
    
  </div>
</div>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={img3}
      alt="Shoes"
      className="rounded-xl bg-base-300" />
  </figure>
  <div className="card-body items-center text-center">
  <div className='flex text-yellow-500'>
   <span><AiFillStar></AiFillStar></span>
    <span><AiFillStar></AiFillStar></span>
    <span><AiFillStar></AiFillStar></span>
    <span><AiFillStar></AiFillStar></span>
    <span><AiFillStar></AiFillStar></span>
    <span><AiFillStar></AiFillStar></span>
   </div>
    <h2 className="card-title">Car Engine Plug</h2>
    <p className='text-red-700'>$20.00</p>
    
  </div>
</div>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={img4}
      alt="Shoes"
      className="rounded-xl bg-base-300" />
  </figure>
  <div className="card-body items-center text-center">
  <div className='flex text-yellow-500'>
   <span><AiFillStar></AiFillStar></span>
    <span><AiFillStar></AiFillStar></span>
    <span><AiFillStar></AiFillStar></span>
    <span><AiFillStar></AiFillStar></span>
    <span><AiFillStar></AiFillStar></span>
    <span><AiFillStar></AiFillStar></span>
   </div>
    <h2 className="card-title">Car Engine Plug</h2>
    <p className='text-red-700'>$20.00</p>
    
  </div>
</div>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={img5}
      alt="Shoes"
      className="rounded-xl bg-base-300" />
  </figure>
  <div className="card-body items-center text-center">
  <div className='flex text-yellow-500'>
   <span><AiFillStar></AiFillStar></span>
    <span><AiFillStar></AiFillStar></span>
    <span><AiFillStar></AiFillStar></span>
    <span><AiFillStar></AiFillStar></span>
    <span><AiFillStar></AiFillStar></span>
    <span><AiFillStar></AiFillStar></span>
   </div>
    <h2 className="card-title">Car Engine Plug</h2>
    <p className='text-red-700'>$20.00</p>
    
  </div>
</div>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={img6}
      alt="Shoes"
      className="rounded-xl bg-base-300" />
  </figure>

  <div className="card-body items-center text-center">
   <div className='flex text-yellow-500'>
   <span><AiFillStar></AiFillStar></span>
    <span><AiFillStar></AiFillStar></span>
    <span><AiFillStar></AiFillStar></span>
    <span><AiFillStar></AiFillStar></span>
    <span><AiFillStar></AiFillStar></span>
    <span><AiFillStar></AiFillStar></span>
   </div>
    <h2 className="card-title">Car Engine Plug</h2>
    <p className='text-red-700'>$20.00</p>
    
  </div>
</div>
        </div>
        <div>
            <button className='btn btn-error'>More Products</button>
        </div>
        </div>
    );
};

export default Product;