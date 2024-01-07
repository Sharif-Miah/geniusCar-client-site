import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import img from "../../../assets/images/banner/banner1.jpg";
// import BookingTable from "./BookingTable";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useBooking from "../../../Hooks/useBooking";
import Swal from "sweetalert2";
import { AiTwotoneDelete } from "react-icons/ai";

const Booking = () => {
  const [booking, refetch] = useBooking();
  console.log(booking);

  const handleDeleteBooking = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://genius-car-farhan-sharif.vercel.app/booking/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your Order is Deleted",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };

  const handleUpdateStatus = (id) => {
    fetch(`https://genius-car-farhan-sharif.vercel.app/booking/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Order is Confirm",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

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
          <thead className="bg-primary text-white">
            <tr>
              <th>#</th>
              <th>Order</th>
              <th>Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {booking.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask rounded w-24 h-24">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.service}</div>
                      <div className="text-sm">{item.date}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <h4 className="font-bold text-md">{item.custerName}</h4>
                  <span className="">{item.phone}</span>
                </td>
                <td>{item.email}</td>
                <td>{item.price}</td>
                <th>
                  {item.status === "confirm" ? (
                    <span className="font-bold text-primary">Confirmed</span>
                  ) : (
                    <button
                      onClick={() => handleUpdateStatus(item._id)}
                      className="btn btn-outline btn-primary btn-xs"
                    >
                      Please Confirm
                    </button>
                  )}
                </th>
                <td>
                  <button
                    onClick={() => handleDeleteBooking(item._id)}
                    className="btn text-2xl text-black btn-square bg-red-500 hover:bg-red-500"
                  >
                    <AiTwotoneDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;

// (

//   <BookingTable
//     key={booking._id}
//     booking={booking}
//     index={index}
//     handleDeleteBooking={handleDeleteBooking}
//     handleUpdateStatus={handleUpdateStatus}
//   />
// )

// {booking.map((booking, index) =>
//   <tr key={booking._id}>
//     <td>{index + 1}</td>
//     <td>
//       <div className="flex items-center space-x-3">
//         <div className="avatar">
//           <div className="mask rounded w-24 h-24">
//             <img
//               src={booking.img}
//               alt="Avatar Tailwind CSS Component"
//             />
//           </div>
//         </div>
//         <div>
//           <div className="font-bold">{service}</div>
//           <div className="text-sm">{date}</div>
//         </div>
//       </div>
//     </td>
//     <td>
//       <h4 className="font-bold text-md">{custerName}</h4>
//       <span className="">{booking.phone}</span>
//     </td>
//     <td>{booking.email}</td>
//     <td>{booking.price}</td>
//     <th>
//       {booking.status === "confirm" ? (
//         <span className="font-bold text-primary">Confirmed</span>
//       ) : (
//         <button
//           onClick={() => handleUpdateStatus(_id)}
//           className="btn btn-outline btn-primary btn-xs"
//         >
//           Please Confirm
//         </button>
//       )}
//     </th>
//     <td>
//       <button
//         onClick={() => handleDeleteBooking(_id)}
//         className="btn text-2xl text-black btn-square bg-red-500 hover:bg-red-500"
//       >
//         <AiTwotoneDelete />
//       </button>
//     </td>
//   </tr>
// )}
