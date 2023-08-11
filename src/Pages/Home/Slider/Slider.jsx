import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";

import img1 from "../../../assets/images/banner/1 (1).jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

import "./Slider.css";

const Slider = () => {
  return (
    <div className="carousel mt-5">

      {/* slide 1  */}
      <div id="slide1" className="carousel-item relative w-full ">
        <div className="img-gradient">
          <img src={img1} className="w-full rounded-2xl" alt="" />
        </div>
        <div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/4 ">
            <h1 className=" lg:w-96 text-lg lg:text-6xl text-white font-bold">
              Affordabe Price For Car Servicing
            </h1>
          </div>
          <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 top-2/4">
            <p className="text-sm lg:text-xl text-white">
              There are many variations of passages of available, <br /> but the
              majority have suffered alteration in some form
            </p>
          </div>

          <div className="absolute flex mt-4 gap-2 lg:flex-row justify-end  transform -translate-y-1/2 left-5 top-2/3 ">
            <button className=" px-2 py-1 mt-2 lg:mt-0 lg:px-3 lg:py-3 bg-red-700 border  border-red-700 rounded hover:bg-red-700 hover:border-red-700 text-white mr-3">
              Discover More
            </button>
            <button className=" px-2 py-1 border rounded mt-2 active:text-white lg:mt-0 border-white text-white hover:bg-red-700 hover:border-red-700">
              Latest Project
            </button>
          </div>
        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide4"
            className="text-red-500 cursor-pointer lg:bg-red-600 text-2xl  hover:text-black border-red-600 lg:hover:text-white lg:text-white ml-3 btn-circle"
          >
            <FiArrowLeft className="mt-8 ml-10 lg:mt-3 lg:ml-3"/>
          </a>
          <a
            href="#slide2"
            className="text-red-500 cursor-pointer lg:bg-red-600 text-2xl  hover:text-black border-red-600 lg:hover:text-white lg:text-white ml-3 btn-circle"
          >
            <FiArrowRight className="mt-8 ml-10 lg:mt-3 lg:ml-3"/>
          </a>
        </div>
      </div>

      {/* slide 2  */}
      <div id="slide2" className="carousel-item relative w-full ">
        <div className="img-gradient">
          <img src={img2} className="w-full rounded-2xl" alt="" />
        </div>
        <div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/4 ">
            <h1 className=" lg:w-96 text-lg lg:text-6xl text-white font-bold">
              Affordabe Price For Car Servicing
            </h1>
          </div>
          <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 top-2/4">
            <p className="text-sm lg:text-xl text-white">
              There are many variations of passages of available, <br /> but the
              majority have suffered alteration in some form
            </p>
          </div>

          <div className="absolute flex mt-4 gap-2 lg:flex-row justify-end  transform -translate-y-1/2 left-5 top-2/3 ">
            <button className=" px-2 py-1 mt-2 lg:mt-0 lg:px-3 lg:py-3 bg-red-700 border  border-red-700 rounded hover:bg-red-700 hover:border-red-700 text-white mr-3">
              Discover More
            </button>
            <button className=" px-2 py-1 border rounded mt-2 active:text-white lg:mt-0 border-white text-white hover:bg-red-700 hover:border-red-700">
              Latest Project
            </button>
          </div>
        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide1"
            className="text-red-500 cursor-pointer lg:bg-red-600 text-2xl  hover:text-black border-red-600 lg:hover:text-white lg:text-white ml-3 btn-circle"
          >
            <FiArrowLeft className="mt-8 ml-10 lg:mt-3 lg:ml-3"/>
          </a>
          <a
            href="#slide3"
            className="text-red-500 cursor-pointer lg:bg-red-600 text-2xl  hover:text-black border-red-600 lg:hover:text-white lg:text-white ml-3 btn-circle"
          >
            <FiArrowRight className="mt-8 ml-10 lg:mt-3 lg:ml-3"/>
          </a>
        </div>
      </div>

      {/* slide 3  */}
      <div id="slide3" className="carousel-item relative w-full ">
        <div className="img-gradient">
          <img src={img3} className="w-full rounded-2xl" alt="" />
        </div>
        <div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/4 ">
            <h1 className=" lg:w-96 text-lg lg:text-6xl text-white font-bold">
              Affordabe Price For Car Servicing
            </h1>
          </div>
          <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 top-2/4">
            <p className="text-sm lg:text-xl text-white">
              There are many variations of passages of available, <br /> but the
              majority have suffered alteration in some form
            </p>
          </div>

          <div className="absolute flex mt-4 gap-2 lg:flex-row justify-end  transform -translate-y-1/2 left-5 top-2/3 ">
            <button className=" px-2 py-1 mt-2 lg:mt-0 lg:px-3 lg:py-3 bg-red-700 border  border-red-700 rounded hover:bg-red-700 hover:border-red-700 text-white mr-3">
              Discover More
            </button>
            <button className=" px-2 py-1 border rounded mt-2 active:text-white lg:mt-0 border-white text-white hover:bg-red-700 hover:border-red-700">
              Latest Project
            </button>
          </div>
        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide2"
            className="text-red-500 cursor-pointer lg:bg-red-600 text-2xl  hover:text-black border-red-600 lg:hover:text-white lg:text-white ml-3 btn-circle"
          >
            <FiArrowLeft className="mt-8 ml-10 lg:mt-3 lg:ml-3"/>
          </a>
          <a
            href="#slide4"
            className="text-red-500 cursor-pointer lg:bg-red-600 text-2xl  hover:text-black border-red-600 lg:hover:text-white lg:text-white ml-3 btn-circle"
          >
            <FiArrowRight className="mt-8 ml-10 lg:mt-3 lg:ml-3"/>
          </a>
        </div>
      </div>

      {/* slide 4  */}
      <div id="slide4" className="carousel-item relative w-full ">
        <div className="img-gradient">
          <img src={img4} className="w-full rounded-2xl" alt="" />
        </div>
        <div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/4 ">
            <h1 className=" lg:w-96 text-lg lg:text-6xl text-white font-bold">
              Affordabe Price For Car Servicing
            </h1>
          </div>
          <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 top-2/4">
            <p className="text-sm lg:text-xl text-white">
              There are many variations of passages of available, <br /> but the
              majority have suffered alteration in some form
            </p>
          </div>

          <div className="absolute flex mt-4 gap-2 lg:flex-row justify-end  transform -translate-y-1/2 left-5 top-2/3 ">
            <button className=" px-2 py-1 mt-2 lg:mt-0 lg:px-3 lg:py-3 bg-red-700 border  border-red-700 rounded hover:bg-red-700 hover:border-red-700 text-white mr-3">
              Discover More
            </button>
            <button className=" px-2 py-1 border rounded mt-2 active:text-white lg:mt-0 border-white text-white hover:bg-red-700 hover:border-red-700">
              Latest Project
            </button>
          </div>
        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide3"
            className="text-red-500 cursor-pointer lg:bg-red-600 text-2xl  hover:text-black border-red-600 lg:hover:text-white lg:text-white ml-3 btn-circle"
          >
            <FiArrowLeft className="mt-8 ml-10 lg:mt-3 lg:ml-3"/>
          </a>
          <a
            href="#slide4"
            className="text-red-500 cursor-pointer lg:bg-red-600 text-2xl  hover:text-black border-red-600 lg:hover:text-white lg:text-white ml-3 btn-circle"
          >
            <FiArrowRight className="mt-8 ml-10 lg:mt-3 lg:ml-3"/>
          </a>
        </div>
      </div>

    </div>
  );
};

export default Slider;
