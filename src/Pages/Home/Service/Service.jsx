import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [services,setServices]=useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:1000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
       
    }
    ,[])
    return (
        <div className=''>
           <div className='text-center'> 
           <p className='text-red-700 font-bold'> Service</p>
           <h1 className="text-5xl font-semibold mb-2">Our Service Area</h1>
           <p>the majority have suffered alteration in some form, by injected humour,
             or randomised <br /> words which don't look even slightly believable. </p>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service=><ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
           </div>
           <div className='flex justify-center my-20'>
           <button className="btn btn-outline btn-error  ">More Services</button>
           </div>
        </div>
    );
};

export default Service;