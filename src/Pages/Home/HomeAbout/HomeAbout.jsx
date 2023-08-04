import React from "react";
import img1 from '../../../assets/images/about_us/person.jpg';
import img2 from '../../../assets/images/about_us/parts.jpg';

const HomeAbout = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="text-center lg:text-left w-1/2">
          <p className="text-red-500 font-bold text-xl">About Us</p>
            <h1 className="text-2xl lg:text-4xl font-bold text-black lg:w-2/3">We are qualified & of experience  in this field</h1>
            <p className="p lg:py-6 text-zinc-500 mt-5 lg:w-3/4 ">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <p className="lg:py-4 text-zinc-500 my-5 lg:w-3/4">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <button className=" bg-red-600 text-white py-2 px-4 rounded-md">Get More Info</button>
          </div>
          <div className=" flex-shrink-0  w-1/2 mx-auto">
            <div className="">
              <img className="w-full lg:w-3/4 h-56 lg:h-96 border mx-auto -z-0 rounded-xl" src={img1} alt="" />
              <img className="w-64 lg:w-80 mx-auto mt-[-100px] ml-14 lg:mt-[-210px] lg:ml-72 lg:h-72 rounded-xl border-zinc-300 border-8 z-10 " src={img2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
