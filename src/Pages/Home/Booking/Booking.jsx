import  { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import img from "../../../assets/images/banner/banner1.jpg";
import BookingTable from "./BookingTable";

const Booking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/booking?email=${user?.email}`
  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('car-access-token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        console.log(data);
      });
  }, [url]);

  const handleDeleteBooking = id => {
    const proced = confirm('Are you sure want to Delete Booking!')
    if(proced){
      fetch(`http://localhost:5000/booking/${id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount > 0){
          const reamingBooking = bookings.filter(booking => booking._id !== id)
          setBookings(reamingBooking)
        }
        
      })
    }
  }

  const handleUpdateStatus = id => {
    
    fetch(`http://localhost:5000/booking/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                }
            })


    }

  return (
    <div>
      <div className=" relative w-full my-24">
        <div className="img-gradient">
          <img src={img} className="w-full h-80 rounded-2xl" alt="" />
        </div>
        <div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/4 ">
            <h1 className=" text-lg lg:text-4xl mt-48 ml-20 text-white font-bold">
              Service Details
            </h1>
          </div>
          <div className=" absolute flex justify-end  transform -translate-y-1/2 left-1/2 bottom-0">
            <p className="text-white bg-red-600 px-8 py-1 mt-[-34px] text-sm clip-path">
              Home/Bookings
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                Delete
              </th>
              <th>Order</th>
              <th>Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
                bookings.map(booking => <BookingTable key={booking._id}
                   booking={booking} 
                   handleDeleteBooking={handleDeleteBooking}
                   handleUpdateStatus={handleUpdateStatus}
                />)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
