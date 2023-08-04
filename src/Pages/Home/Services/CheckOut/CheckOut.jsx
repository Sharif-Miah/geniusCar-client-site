import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const { _id, title, img, price } =useLoaderData;
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
      </div>
    </div>
  );
};

export default CheckOut;
