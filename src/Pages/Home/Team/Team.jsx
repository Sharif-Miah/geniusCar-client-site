import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

import img1 from "../../../assets/images/banner/banner1.jpg";
import img2 from "../../../assets/images/banner/banner2.jpg";
import img3 from "../../../assets/images/banner/banner3.jpg";
import img4 from "../../../assets/images/banner/banner4.jpg";
import img5 from "../../../assets/images/banner/banner5.jpg";
import img6 from "../../../assets/images/banner/banner6.jpg";

const Team = () => {
  return (
    <div>
      <div className=" my-24">
        <div>
          <h4 className="text-center text-red-500 text-md font-bold">Team</h4>
          <h1 className="text-center text-5xl font-bold mb-2">Meet Our Team</h1>
          <p className=" text-zinc-500 text-center">
            the majority have suffered alteration in some form, by injected
            humour, or randomised
          </p>
          <p className=" text-zinc-500 text-center">
            words which don't look even slightly believable.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* member one  */}
            <div className="card w-80 bg-base-100 border border-zinc-300 mx-auto">
              <figure className="px-10 pt-5">
                <img src={img1} alt="Shoes" className="rounded-xl h-48" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Car Engine Plug</h2>
                <p className="text-zinc-500">Engine Expert</p>
                <div className="card-actions">
                  <BsFacebook className="text-xl text-sky-900 cursor-pointer" />
                  <AiFillTwitterCircle className="text-2xl text-sky-400 cursor-pointer" />
                  <BsInstagram className="text-xl text-indigo-700 cursor-pointer" />
                  <AiFillLinkedin className="text-2xl text-indigo-700 cursor-pointer" />
                </div>
              </div>
            </div>
            {/* member two  */}
            <div className="card w-80 bg-base-100 border border-zinc-300 mx-auto">
              <figure className="px-10 pt-5">
                <img src={img2} alt="Shoes" className="rounded-xl h-48 " />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Car Engine Plug</h2>
                <p className="text-zinc-500">Engine Expert</p>
                <div className="card-actions">
                  <BsFacebook className="text-xl text-sky-900 cursor-pointer" />
                  <AiFillTwitterCircle className="text-2xl text-sky-400 cursor-pointer" />
                  <BsInstagram className="text-xl text-indigo-700 cursor-pointer" />
                  <AiFillLinkedin className="text-2xl text-indigo-700 cursor-pointer" />
                </div>
              </div>
            </div>
            {/* member three  */}
            <div className="card w-80 bg-base-100 border border-zinc-300 mx-auto">
              <figure className="px-10 pt-5">
                <img src={img3} alt="Shoes" className="rounded-xl h-48 " />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Car Engine Plug</h2>
                <p className="text-zinc-500">Engine Expert</p>
                <div className="card-actions">
                  <BsFacebook className="text-xl text-sky-900 cursor-pointer" />
                  <AiFillTwitterCircle className="text-2xl text-sky-400 cursor-pointer" />
                  <BsInstagram className="text-xl text-indigo-700 cursor-pointer" />
                  <AiFillLinkedin className="text-2xl text-indigo-700 cursor-pointer" />
                </div>
              </div>
            </div>
            {/* member four  */}
            <div className="card w-80 bg-base-100 border border-zinc-300 mx-auto">
              <figure className="px-10 pt-5">
                <img src={img4} alt="Shoes" className="rounded-xl h-48 " />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Car Engine Plug</h2>
                <p className="text-zinc-500">Engine Expert</p>
                <div className="card-actions">
                  <BsFacebook className="text-xl text-sky-900 cursor-pointer" />
                  <AiFillTwitterCircle className="text-2xl text-sky-400 cursor-pointer" />
                  <BsInstagram className="text-xl text-indigo-700 cursor-pointer" />
                  <AiFillLinkedin className="text-2xl text-indigo-700 cursor-pointer" />
                </div>
              </div>
            </div>
            {/* member five  */}
            <div className="card w-80 bg-base-100 border border-zinc-300 mx-auto">
              <figure className="px-10 pt-5">
                <img src={img5} alt="Shoes" className="rounded-xl h-48 " />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Car Engine Plug</h2>
                <p className="text-zinc-500">Engine Expert</p>
                <div className="card-actions">
                  <BsFacebook className="text-xl text-sky-900 cursor-pointer" />
                  <AiFillTwitterCircle className="text-2xl text-sky-400 cursor-pointer" />
                  <BsInstagram className="text-xl text-indigo-700 cursor-pointer" />
                  <AiFillLinkedin className="text-2xl text-indigo-700 cursor-pointer" />
                </div>
              </div>
            </div>
            {/* member six  */}
            <div className="card w-80 bg-base-100 border border-zinc-300 mx-auto">
              <figure className="px-10 pt-5">
                <img src={img6} alt="Shoes" className="rounded-xl h-48 " />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Car Engine Plug</h2>
                <p className="text-zinc-500">Engine Expert</p>
                <div className="card-actions">
                  <BsFacebook className="text-xl text-sky-900 cursor-pointer" />
                  <AiFillTwitterCircle className="text-2xl text-sky-400 cursor-pointer" />
                  <BsInstagram className="text-xl text-indigo-700 cursor-pointer" />
                  <AiFillLinkedin className="text-2xl text-indigo-700 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
