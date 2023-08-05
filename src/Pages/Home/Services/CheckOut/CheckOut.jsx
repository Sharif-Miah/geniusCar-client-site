import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const { _id, title, img, price } = useLoaderData();
  console.log(img);
  return (
    <div>
      <div>
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

        <form className="my-10 border-4 border-zinc-200 px-10 py-24">
          <div className="flex">
            <input
              type="text"
              placeholder="First Name"
              className="input input-bordered input-md w-full mx-6"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered input-md w-full mx-6"
            />
          </div>
          <div className="flex mt-6">
            <input
              type="number"
              placeholder="Your phone"
              className="input input-bordered input-md w-full mx-6"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered input-md w-full mx-6"
            />
          </div>
          <textarea className="textarea textarea-bordered h-48 w-full ml-3 mt-6 " placeholder="Bio"></textarea>
          <button className="btn bg-red-500 w-full text-white border  border-red-500 hover:border-red-500 hover:bg-red-500 mt-3">Order Confirm</button>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
