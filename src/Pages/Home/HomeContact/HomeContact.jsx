import React from "react";
import { SlCalender } from "react-icons/sl";
import { TbPhoneCall } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";



const HomeContact = () => {
  return (
    <div>
      <div className="bg-black text-white my-10 px-20 py-24 rounded-xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 ">
          <div className="flex justify-center">
            <SlCalender className="text-3xl mt-2 text-red-500" />
            <div className="ml-2">
              <p className="text-sm">We are open monday-friday</p>
              <h5 className="text-lg font-bold">7:00 am - 9:00 pm</h5>
            </div>
          </div>
          <div className="flex justify-center">
            <TbPhoneCall className="text-3xl mt-2 text-red-500" />
            <div className="ml-2">
              <p className="text-sm">Have a question?</p>
              <h5 className="text-lg font-bold">+2546 251 2658</h5>
            </div>
          </div>
          <div className="flex justify-center">
            <SlLocationPin className="text-3xl mt-2 text-red-500" />
            <div className="ml-2">
              <p className="text-sm">Need a repair? our address</p>
              <h5 className="text-lg font-bold">Liza Street, New York</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
