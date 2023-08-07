import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import img from "../../../assets/images/banner/banner1.jpg";
import BookingTable from "./BookingTable";

const Booking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/booking?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        console.log(data);
      });
  }, []);

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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                bookings.map(booking => <BookingTable key={booking._id} booking={booking}/>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
