// import React from "react";
// import { AiTwotoneDelete } from "react-icons/ai";

// const BookingTable = ({ booking, index, handleDeleteBooking, handleUpdateStatus }) => {
//   const { _id, img, service, date, custerName, phone, email, price, status } =
//     booking;
//   return (
//     <tr>
//       <td>{index+1}</td>
//       <td>
//         <div className="flex items-center space-x-3">
//           <div className="avatar">
//             <div className="mask rounded w-24 h-24">
//               <img src={img} alt="Avatar Tailwind CSS Component" />
//             </div>
//           </div>
//           <div>
//             <div className="font-bold">{service}</div>
//             <div className="text-sm">{date}</div>
//           </div>
//         </div>
//       </td>
//       <td>
//         <h4 className="font-bold text-md">{custerName}</h4>
//         <span className="">{phone}</span>
//       </td>
//       <td>{email}</td>
//       <td>{price}</td>
//       <th>
//         {status === "confirm" ? (
//           <span className="font-bold text-primary">Confirmed</span>
//         ) : (
//           <button
//             onClick={() => handleUpdateStatus(_id)}
//             className="btn btn-outline btn-primary btn-xs"
//           >
//             Please Confirm
//           </button>
//         )}
//       </th>
//       <td>
//         <button
//           onClick={() => handleDeleteBooking(_id)}
//           className="btn text-2xl text-black btn-square bg-red-500 hover:bg-red-500"
//         >
//           <AiTwotoneDelete />
//         </button>
//       </td>
//     </tr>
//   );
// };

// export default BookingTable;
