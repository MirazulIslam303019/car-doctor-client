import React from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";


const Adrees = () => {
    return (
        <div className=' bg-black rounded-xl'>
            <div className='flex justify-center text-white py-20 gap-10 '>

                <div className='flex items-center'>
                    <span > <FaCalendarAlt className='w-10 h-8 me-5'></FaCalendarAlt> </span>
                    <div>
                            <p>We are open monday-friday</p>
                            <h2 className="text-3xl">7:00 am - 9:00 pm</h2>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span> <IoCall className='w-10 h-8 me-5'></IoCall> </span>
                    <div>
                            <p>We are open monday-friday</p>
                            <h2 className="text-3xl">7:00 am - 9:00 pm</h2>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span> <FaLocationDot className='w-10 h-8 me-5'></FaLocationDot> </span>
                    <div>
                            <p>We are open monday-friday</p>
                            <h2 className="text-3xl">7:00 am - 9:00 pm</h2>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Adrees;