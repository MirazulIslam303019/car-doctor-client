import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import BookingTable from './BookingTable';
import axios from 'axios';

const Bookings = () => {
    const {user}=useContext(AuthContext);
    const [bookings,setBookings]=useState([ ]);
    const url=`http://localhost:1000/checkOut?email=${user?.email}`;
    useEffect(()=>{
       axios.get(url,{withCredentials:true})
       .then(res=>{
        setBookings(res.data)
       })

    },[])


    const handleDelete=id=>{
      const proced= confirm('you can delete this data');
        if(proced){
            fetch(`http://localhost:1000/checkOut/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount>0){
                    alert('delete Succesfully')
                    const remaining=bookings.filter(booking=>booking._id !==id)
                    setBookings(remaining)
                }
            })
        }
    }

    const handleToUpadte=id=>{
      fetch(`http://localhost:1000/checkOut/${id}`,{
        method:'PATCH',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({update:'confirm'})
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.modifiedCount>0){
          const remaining=bookings.filter(booking=>booking._id !==id);
          const updated=bookings.find(booking=>booking._id===id);
          updated.update='confirm'
          const newBookings=[updated,...remaining];

          setBookings(newBookings)
        }
      })
    }
    return (
        <div>
            <h1 className="text-5xl">Bookings: {bookings.length}</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Img</th>
        <th>Email</th>
        <th>Date</th>
        <th>Service</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
      {
        bookings.map(booking=><BookingTable
        key={booking._id}
        booking={booking}
        bookings={bookings}
        setBookings={setBookings}
        handleDelete={handleDelete}
        handleToUpadte={handleToUpadte}
        
        ></BookingTable>)
      }
    
     
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default Bookings;