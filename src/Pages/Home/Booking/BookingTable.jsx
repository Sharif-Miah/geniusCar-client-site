import React from "react";

const BookingTable = ({ booking }) => {
  const { img, service, date, custerName, phone, email, price } = booking;
  return (
    <tr>
      <th>
        <button className="btn btn-xs btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask rounded w-24 h-24">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{service}</div>
            <div className="text-sm">{date}</div>
          </div>
        </div>
      </td>
      <td>
        <h4 className="font-bold text-md">{custerName}</h4>
        <span className="">{phone}</span>
      </td>
      <td>{email}</td>
      <td>{price}</td>
      <th>
        <button className="btn  bg-red-500 text-white rounded-xl hover:bg-red-500">Pending</button>
      </th>
    </tr>
  );
};

export default BookingTable;