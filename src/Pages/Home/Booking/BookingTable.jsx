import React from "react";

const BookingTable = ({ booking, handleDeleteBooking, handleUpdateStatus }) => {
  const { _id, img, service, date, custerName, phone, email, price, status } =
    booking;
  return (
    <tr>
      <th>
        <button
          onClick={() => handleDeleteBooking(_id)}
          className="btn btn-xs btn-circle"
        >
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
        {status === "confirm" ? (
          <span className="font-bold text-primary">Confirmed</span>
        ) : (
          <button
            onClick={() => handleUpdateStatus(_id)}
            className="btn btn-ghost btn-xs"
          >
            Please Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingTable;
