import { data } from 'autoprefixer';
import React from 'react';

const BookingTable = ({booking,handleDelete,handleToUpadte}) => {
    const {_id,email,date,service,img,update}=booking;

    
    return (
        
         
      <tr>
        <th>
        <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-square">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
        </th>
        <td>
         
            <div className="avatar">
              <div className="rounded h-24 w-24">
                <img
                  src={img}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          
        </td>
        <td>
          {email}
        </td>
        <td>{date}</td>
        <td>{service}</td>
        <th>
          { update === 'confirm' ?  <span className='font-bold text-primary'>Confirmed</span>:
            
            <button className='btn' onClick={()=>handleToUpadte(_id)}> please confirm</button>}
        </th>
      </tr>
     
       
    );
};

export default BookingTable;