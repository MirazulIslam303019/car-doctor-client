import  { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const CheckOut = () => {

  
    const {user}=useContext(AuthContext)
    const service=useLoaderData();
    const {_id,title,price,img}=service;

    const handleBookService=event=>{
      event.preventDefault();
      const from=event.target;
      const name=from.name.value;
      const date=from.date.value;
      const email=user?.email;

      const order={
        customerName:name,
        img,
        email,
        date,
        service:title,
        service_id:_id,
        price:price,

      }
      console.log(order);

      fetch('http://localhost:1000/checkOut',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(order)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
      })
    }
    return (
        <div>
            <h1>service:{title}</h1>
            <div>
            <form className="card-body" onSubmit={handleBookService}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" name='name' defaultValue={user?.displayName} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name='date'  className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" defaultValue={user?.email} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due amount</span>
          </label>
          <input type="text" defaultValue={'$'+price} className="input input-bordered" required />
          
        </div>
        </div>
        <div className="form-control mt-6">
          <input type="submit" value="submit" className='btn btn-primary btn-block' />
        </div>
      </form>
            </div>
        </div>
    );
};

export default CheckOut;