import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'

const CheckOut = () => {
  const {_id, img, price, title } = useLoaderData();
  const { user } = useContext(AuthContext);

  const switAlart = Swal.fire(
    'Good job!',
    'You Successfully Booking Orders!',
    'success'
  )

  const bookingHanndle = event => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email
    const phone = form.phone.value;
    const date = form.date.value;
    const price = form.price.value;
    const massage = form.massage.value

    const booking = {
      custerName: name,
      email,
      phone,
      date,
      price,
      img,
      service: title,
      massage,
      service_id: _id
    }

    fetch('http://localhost:5000/booking', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(booking)

    })
    .then(res => res.json())
    .then(data => {
      if(data.acknowledged){
        switAlart
      }
    })

  }

  return (
    <div className="mt-10">
      <div className=" relative w-full ">
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
              Home/Chack Out
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={bookingHanndle} className="my-10 border-4 border-zinc-200 px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input input-bordered input-md w-full mx-6"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input input-bordered input-md w-full mx-6"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input input-bordered input-md w-full mx-6"
            defaultValue={user?.email}
          />
          <input
            type="number"
            name="phone"
            placeholder="Your phone"
            className="input input-bordered input-md w-full mx-6"
          />

          <input
            type="date"
            name="date"
            placeholder="Your phone"
            className="input input-bordered input-md w-full mx-6"
          />
          <input
            type="text"
            name="price"
            placeholder="price"
            defaultValue={"$" + price}
            className="input input-bordered input-md w-full mx-6"
          />
        </div>
        <div className="flex mt-6"></div>
        <textarea
          name="massage"
          className="textarea textarea-bordered h-48 w-full ml-3 mt-6 "
          placeholder="Your Massage"
        ></textarea>

        <input
          type="submit"
          value="Order Confirm"
          className="btn bg-red-500 w-full text-white border  border-red-500 hover:border-red-500 hover:bg-red-500 mt-3"
        />
      </form>
    </div>
  );
};

export default CheckOut;
