import React from 'react';
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id,title,img,price}=service;
    return (
        <div className="card bg-base-100 w-96 shadow-xl mt-10">
  <figure className="px-10 pt-10">
    <img
      src={img}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body  text-left">
    <h2 className="card-title">{title}</h2>
    <div className='flex justify-between'>
    <p className=' text-red-700 font-semibold'> Price: ${price}</p>
      <Link to={`/checkOut/${_id}`}> <button><GoArrowRight></GoArrowRight></button></Link>
    </div>
    
  </div>
</div>
    );
};

export default ServiceCard;