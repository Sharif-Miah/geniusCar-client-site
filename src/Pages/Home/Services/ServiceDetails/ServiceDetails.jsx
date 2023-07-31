import React from "react";
import { useLoaderData } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { title, img } = useLoaderData();
  return (
    <div>
      <div className="my-10">
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
            <div className="absolute flex justify-end  transform -translate-y-1/2 left-1/2 bottom-0">
              <p className="text-white bg-red-600 px-8 py-1 mt-[-34px] text-sm clip-path">
                Home/Service Details
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="card lg:card-side bg-base-100 ">
            <figure className="w-3/4">
              <img src={img} alt="Album" className="h-96" />
            </figure>
            <div className="card-body w-1/4">
              <h2 className="text-2xl font-bold">Services</h2>
              <div>
                <div className="flex justify-between bg-red-600 py-3 px-2 rounded">
                  <p className="font-semibold text-white text-md">
                    Full Car Repair.
                  </p>
                  <button className="text-white text-2xl">
                    <FiArrowRight />
                  </button>
                </div>
                <div className="flex justify-between  py-3 px-2 rounded my-2">
                  <p className="font-semibold  text-md">
                  Engine Repair
                  </p>
                  <button className="text-red-500 text-2xl">
                    <FiArrowRight />
                  </button>
                </div>
                <div className="flex justify-between  py-3 px-2 rounded my-2">
                  <p className="font-semibold  text-md">
                  Automatic Services
                  </p>
                  <button className="text-red-500 text-2xl">
                    <FiArrowRight />
                  </button>
                </div>
                <div className="flex justify-between  py-3 px-2 rounded my-2">
                  <p className="font-semibold  text-md">
                  Engine Oil Change
                  </p>
                  <button className="text-red-500 text-2xl">
                    <FiArrowRight />
                  </button>
                </div>
                <div className="flex justify-between  py-3 px-2 rounded my-2">
                  <p className="font-semibold  text-md">
                  Battery Charge
                  </p>
                  <button className="text-red-500 text-2xl">
                    <FiArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
